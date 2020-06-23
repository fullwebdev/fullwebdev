<style scoped lang="scss">
main {
  max-width: 740px;
  margin: 1rem auto;
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

    <div v-if="npmInfos" class="npm-infos">
      <p class="subtitle">{{ npmInfos.description }}</p>
      <h2>Infos</h2>
      <table>
        <tr v-if="npmInfos.version">
          <td>Version</td>
          <td>{{ npmInfos.version }}</td>
        </tr>
        <tr v-if="npmInfos.latestRelease">
          <td>Latest Release</td>
          <td>{{ npmInfos.latestRelease }}</td>
        </tr>
      </table>
      <h2>Scores</h2>
      <table>
        <tr v-if="npmInfos.stars">
          <td>Stars</td>
          <td>{{ npmInfos.stars }}</td>
        </tr>
        <tr v-if="npmInfos.popularity">
          <td>Popularity</td>
          <td>{{ npmInfos.popularity }}</td>
        </tr>
        <tr v-if="npmInfos.quality">
          <td>Quality</td>
          <td>{{ npmInfos.quality }}</td>
        </tr>
        <tr v-if="npmInfos.maintenance">
          <td>Maintenance</td>
          <td>{{ npmInfos.maintenance }}</td>
        </tr>
      </table>
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
    </div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

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
      this.error = this.npmInfos = null;
      this.loading = true;

      try {
        const npmRes = await fetch(
          `https://api.npms.io/v2/package/${encodeURIComponent(
            this.$route.params.name
          )}`
        );
        const npmData = await npmRes.json();

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
          popularity: Math.round(npmData?.score.detail.popularity * 100),
          quality: Math.round(npmData?.score.detail.quality * 100),
          maintenance: Math.round(npmData?.score.detail.maintenance * 100),
          // TODO: parse markdown using markdown-it
          readme: npmData?.collected.metadata.readme,
        };

        if (npmData.collected.github) {
          this.npmInfos.stars = npmData.collected.github.starsCount;
        }
      } catch (err) {
        this.error = err.toString();
      }
      this.loading = false;
    },
  },
};
</script>
