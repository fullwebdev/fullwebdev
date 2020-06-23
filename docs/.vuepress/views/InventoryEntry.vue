<style scoped lang="scss">
main {
  max-width: 740px;
  margin: 1rem auto;
}

.marker {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 3px 12px;
  font-size: 14px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  display: inline-block;

  &.alert {
    background-color: rgba(255, 0, 0, 0.15);
  }

  &.success {
    background-color: rgba(0, 255, 0, 0.15);
  }
}
</style>

<template>
  <main class="inventory-entry" aria-labelledby="main-title">
    <NavLink :item="linkItem"></NavLink>
    <h1>{{ $route.params.name }}</h1>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <template v-if="npmInfos" class="npm-infos">
      <p class="subtitle">{{ npmInfos.description }}</p>

      <div class="markers">
        <div class="marker" v-if="npmInfos.stars">⭐️ {{ npmInfos.stars }}</div>
        <div class="marker success" v-if="isMicro">⚡️ micro-library</div>
        <template>
          <div class="marker success" v-if="maintenanceLevel === 2">
            👷 well maintained
          </div>
          <div class="marker" v-else-if="maintenanceLevel === 1">
            🐢 low maintance
          </div>
          <div class="marker alert" v-else-if="maintenanceLevel === 0">
            💤 unmaintained
          </div>
        </template>
      </div>

      <h2>Release</h2>
      <table>
        <tr v-if="npmInfos.version">
          <td>Version</td>
          <td>{{ npmInfos.version }}</td>
        </tr>
        <tr v-if="npmInfos.latestRelease">
          <td>Last Publish</td>
          <td>{{ npmInfos.latestRelease }}</td>
        </tr>
      </table>

      <template v-if="isALibrary">
        <h2>Bundle Size</h2>

        <p>
          See
          <a
            v-if="bundleHref"
            v-bind:href="bundleHref"
            target="blank"
            rel="noopener noreferrer"
            >Bundlephobia</a
          >
          for more details.
        </p>

        <div v-if="bundleLoading" class="loading">
          Loading...
        </div>

        <div v-if="bundleError" class="error">
          unknown
        </div>

        <table v-if="bundle">
          <tr v-if="bundle.gzip">
            <td>Minified + Gzipped</td>
            <td>{{ bundle.gzip }}</td>
          </tr>
          <tr v-if="bundle.dlTime">
            <td>Download Time (regular 2G)</td>
            <td>{{ bundle.dlTime }}</td>
          </tr>
          <template v-if="showDependencies">
            <tr>
              <td>Dependencies</td>
              <td v-if="bundle.dependencies.names.length > 0">
                {{ bundle.dependencies.names.join(", ") }}
              </td>
              <td v-else>none</td>
            </tr>
            <tr v-if="bundle.dependencies.size">
              <td>Proportion of total size taken up by dependencies</td>
              <td>{{ bundle.dependencies.proportion }}</td>
            </tr>
          </template>
        </table>
      </template>

      <template v-if="npmInfos.score">
        <h2>Npm Scores</h2>

        <table>
          <tr>
            <td>Popularity</td>
            <td>{{ npmInfos.score.popularity }}</td>
          </tr>
          <tr>
            <td>Quality</td>
            <td>{{ npmInfos.score.quality }}</td>
          </tr>
          <tr>
            <td>Maintenance</td>
            <td>{{ npmInfos.score.maintenance }}</td>
          </tr>
        </table>
      </template>

      <template v-if="npmInfos.links">
        <h2>Links</h2>

        <table class="links">
          <tr v-if="npmInfos.links.repository">
            <td>Repository</td>
            <td>
              <a
                v-bind:href="npmInfos.links.repository"
                target="_blank"
                rel="noopener noreferrer"
                >{{ npmInfos.links.repository }}</a
              >
            </td>
          </tr>
          <tr v-if="npmInfos.links.homepage">
            <td>Homepage</td>
            <td>
              <a
                v-bind:href="npmInfos.links.homepage"
                target="_blank"
                rel="noopener noreferrer"
                >{{ npmInfos.links.homepage }}</a
              >
            </td>
          </tr>
          <tr v-if="npmInfos.links.npm">
            <td>NPM</td>
            <td>
              <a
                v-bind:href="npmInfos.links.npm"
                target="_blank"
                rel="noopener noreferrer"
                >{{ npmInfos.links.npm }}</a
              >
            </td>
          </tr>
          <tr v-if="npmInfos.links.bugs">
            <td>Bugs</td>
            <td>
              <a
                v-bind:href="npmInfos.links.bugs"
                target="_blank"
                rel="noopener noreferrer"
                >{{ npmInfos.links.bugs }}</a
              >
            </td>
          </tr>
        </table>
      </template>
    </template>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

function toSizeStr(size) {
  if (size > 1024) {
    return `${Math.round((size * 100) / 1024) / 100}kB`;
  } else {
    return `${size} bytes`;
  }
}

export default {
  name: "InventoryEntry",
  components: {
    NavLink,
  },
  data() {
    return {
      linkItem: {
        link: "/inventory/",
        text: "< back to the inventory",
      },
      loading: false,
      error: null,
      npmInfos: null,
      bundle: null,
      bundleLoading: false,
      bundleError: false,
      showDependencies: false,
      isMicro: false,
      maintenanceLevel: null,
      isALibrary: false,
      bundleHref: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      this.error = this.npmInfos = this.bundle = this.dependencies = null;
      this.showDependencies = this.isMicro = this.isMaintained = this.bundleError = false;
      this.loading = this.bundleLoading = true;

      const name = decodeURIComponent(this.$route.params.name);
      const encodedName = encodeURIComponent(this.$route.params.name);
      this.isALibrary = !(this.$route.query.library === "false");

      try {
        const npmRes = await fetch(
          `https://api.npms.io/v2/package/${encodedName}`
        );
        const npmData = await npmRes.json();

        const now = new Date();
        const sixMonthBeforeNow = now.setMonth(now.getMonth() - 6);
        const oneYearBeforeNow = now.setFullYear(now.getFullYear() - 1);

        const score = npmData?.score.detail
          ? {
              popularity: Math.round(npmData.score.detail.popularity * 100),
              quality: Math.round(npmData.score.detail.quality * 100),
              maintenance: Math.round(npmData.score.detail.maintenance * 100),
            }
          : null;

        if (npmData?.collected.metadata.date && score) {
          const releaseDate = new Date(npmData.collected.metadata.date);
          if (releaseDate > sixMonthBeforeNow && score.maintenance > 80) {
            this.maintenanceLevel = 2;
          } else if (releaseDate > oneYearBeforeNow && score.maintenance > 20) {
            this.maintenanceLevel = 1;
          } else {
            this.maintenanceLevel = 0;
          }
        }

        this.npmInfos = {
          links: {
            repository: npmData?.collected.metadata.links.repository,
            homepage: npmData?.collected.metadata.links.homepage,
            npm: npmData?.collected.metadata.links.npm,
            bugs: npmData?.collected.metadata.links.bugs,
          },
          description: npmData?.collected.metadata.description,
          version: npmData?.collected.metadata.version,
          latestRelease: npmData?.collected.metadata.date.split("T")[0],
          score,
          // TODO: parse markdown using markdown-it
          // readme: npmData?.collected.metadata.readme,
        };

        if (npmData.collected.github) {
          const stars = npmData.collected.github.starsCount;
          this.npmInfos.stars =
            stars > 9999 ? `${stars.toString().slice(0, -3)}k` : stars;
        }
      } catch (err) {
        this.error = err.toString();
      }
      this.loading = false;

      if (this.isALibrary) {
        try {
          this.bundleHref = `https://bundlephobia.com/result?p=${encodedName}`;
          const sizeRes = await fetch(
            `https://bundlephobia.com/api/size?package=${encodedName}`
          );
          const sizeData = await sizeRes.json();
          let dependencies = {
            size: 0,
            names: [],
          };
          if (sizeData?.dependencySizes.length > 1) {
            let ownSize;
            dependencies = sizeData.dependencySizes.reduce((prev, cur) => {
              if (cur.name === name) {
                ownSize = cur.approximateSize;
                return prev;
              } else {
                return {
                  size: prev.size + cur.approximateSize,
                  names: prev.names.concat(cur.name),
                };
              }
            }, dependencies);
            dependencies.proportion = Math.round(
              (dependencies.size * 100) / (dependencies.size + ownSize)
            );
          }
          if (sizeData.gzip) {
            if (dependencies.proportion > 1) {
              this.showDependencies = true;
            }
            dependencies.size = toSizeStr(dependencies.size);
            dependencies.proportion = `${dependencies.proportion}%`;
            if (sizeData.gzip / 1024 < 4) {
              this.isMicro = true;
            }
            let dlTime = Math.round((sizeData.gzip / (30 * 1024)) * 1000);
            if (dlTime > 999) {
              dlTime = `${Math.round(dlTime * 100) / 100}s`;
            } else {
              dlTime = `${dlTime}ms`;
            }
            this.bundle = {
              gzip: toSizeStr(sizeData.gzip),
              dlTime,
              dependencies,
            };
          }
        } catch (err) {
          console.warn(err);
          this.bundleError = true;
          this.bundle = null;
        }
      }
      this.bundleLoading = false;
    },
  },
};
</script>
