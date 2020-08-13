import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";

// FIXME: this all file
// this is just a quick translation from a Vue SFC

function toSizeStr(size) {
  if (size > 1024) {
    return `${Math.round((size * 100) / 1024) / 100}kB`;
  } else {
    return `${size} bytes`;
  }
}

const data = {
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
  isALibrary: true,
  bundleHref: null,
};

async function fetchData(name) {
  data.error = data.npmInfos = data.bundle = data.dependencies = null;
  data.showDependencies = data.isMicro = data.isMaintained = data.bundleError = false;
  data.loading = data.bundleLoading = true;
  const encodedName = encodeURIComponent(name);
  // FIXME
  // data.isALibrary = !(data.$route.query.library === "false");
  try {
    const npmRes = await fetch(`https://api.npms.io/v2/package/${encodedName}`);
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
        data.maintenanceLevel = 2;
      } else if (releaseDate > oneYearBeforeNow && score.maintenance > 20) {
        data.maintenanceLevel = 1;
      } else {
        data.maintenanceLevel = 0;
      }
    }
    data.npmInfos = {
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
      data.npmInfos.stars =
        stars > 9999 ? `${stars.toString().slice(0, -3)}k` : stars;
    }
  } catch (err) {
    data.error = err.toString();
  }
  data.loading = false;
  if (data.isALibrary) {
    try {
      data.bundleHref = `https://bundlephobia.com/result?p=${encodedName}`;
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
          data.showDependencies = true;
        }
        dependencies.size = toSizeStr(dependencies.size);
        dependencies.proportion = `${dependencies.proportion}%`;
        if (sizeData.gzip / 1024 < 4) {
          data.isMicro = true;
        }
        let dlTime = Math.round((sizeData.gzip / (30 * 1024)) * 1000);
        if (dlTime > 999) {
          dlTime = `${Math.round(dlTime * 100) / 100}s`;
        } else {
          dlTime = `${dlTime}ms`;
        }
        data.bundle = {
          gzip: toSizeStr(sizeData.gzip),
          dlTime,
          dependencies,
        };
      }
    } catch (err) {
      console.warn(err);
      data.bundleError = true;
      data.bundle = null;
    }
  }
  data.bundleLoading = false;
}

const maintenance = (maintenanceLevel) => {
  let content;
  const classes = {
    success: maintenanceLevel === 2,
    alert: maintenanceLevel === 0,
  };
  if (maintenanceLevel === 2) {
    content = "👷 well maintained";
  } else if (maintenanceLevel === 1) {
    content = "🐢 low maintance";
  } else if (maintenanceLevel === 0) {
    content = "💤 unmaintained";
  }

  return html`<div class="marker ${classMap(classes)}">
    ${content}
  </div>`;
};

const bundleInfos = (bundle) => {
  // TODO: query param library = false
  if (bundle) {
    return html`<h2>Bundle Size</h2>

      <p>
        See
        <a href=${data.bundleHref} target="blank" rel="noopener noreferrer"
          >Bundlephobia</a
        >
        for more details.
      </p>

      <table>
        ${bundle.gzip
          ? html`<tr>
              <td>Minified + Gzipped</td>
              <td>${bundle.gzip}</td>
            </tr>`
          : ""}
        ${bundle.dlTime
          ? html`<tr>
              <td>Download Time (regular 2G)</td>
              <td>${bundle.dlTime}</td>
            </tr>`
          : ""}
        ${data.showDependencies
          ? html`
              <tr>
                <td>Dependencies</td>
                <td>
                  ${bundle.dependencies.names.length > 0
                    ? html` ${bundle.dependencies.names.join(", ")} `
                    : "none"}
                </td>
              </tr>
              ${bundle.dependencies.size
                ? html`<tr>
                    <td>Proportion of total size taken up by dependencies</td>
                    <td>${bundle.dependencies.proportion}</td>
                  </tr>`
                : ""}
            `
          : ""}
      </table>`;
  }
};

const npmScore = (score) => {
  if (score) {
    return html`<h2>Npm Scores</h2>
      <table>
        <tr>
          <td>Popularity</td>
          <td>${score.popularity}</td>
        </tr>
        <tr>
          <td>Quality</td>
          <td>${score.quality}</td>
        </tr>
        <tr>
          <td>Maintenance</td>
          <td>${score.maintenance}</td>
        </tr>
      </table>`;
  }
};

const npmLinks = (links) => {
  if (links) {
    return html`<h2>Links</h2>

      <table class="links">
        ${links.repository
          ? html`<tr>
              <td>Repository</td>
              <td>
                <a
                  href=${links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  >${links.repository}</a
                >
              </td>
            </tr>`
          : ""}
        ${links.homepage
          ? html`<tr>
              <td>Homepage</td>
              <td>
                <a
                  href=${links.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  >${links.homepage}</a
                >
              </td>
            </tr>`
          : ""}
        ${links.npm
          ? html`<tr>
              <td>NPM</td>
              <td>
                <a href=${links.npm} target="_blank" rel="noopener noreferrer"
                  >${links.npm}</a
                >
              </td>
            </tr>`
          : ""}
        ${links.bugs
          ? html`<tr>
              <td>Bugs</td>
              <td>
                <a href=${links.bugs} target="_blank" rel="noopener noreferrer"
                  >${links.bugs}</a
                >
              </td>
            </tr>`
          : ""}
      </table>`;
  }
};

export default async ({ routeParams: [, pkgName] }) => {
  pkgName = decodeURIComponent(pkgName);
  // FIXME
  await fetchData(pkgName);

  return html`
    <p><a href="/en/04-inventory/">&lt; back to inventory</a></p>
    <main class="inventory-entry" aria-labelledby="main-title">
      <h1>${pkgName}</h1>

      ${data.npmInfos
        ? html`
            <p class="subtitle">${data.npmInfos.description}</p>

            <div class="markers">
              ${data.npmInfos.stars
                ? html`<div class="marker">⭐️ ${data.npmInfos.stars}</div>`
                : ""}
              ${data.isMicro
                ? html`<div class="marker success">⚡️ micro-library</div>`
                : ""}
              ${maintenance(data.maintenanceLevel)}
            </div>

            <h2>Release</h2>
            <table>
              ${data.npmInfos.version
                ? html`<tr>
                    <td>Version</td>
                    <td>${data.npmInfos.version}</td>
                  </tr>`
                : ""}
              ${data.npmInfos.latestRelease
                ? html`<tr>
                    <td>Last Publish</td>
                    <td>${data.npmInfos.latestRelease}</td>
                  </tr>`
                : ""}
            </table>

            ${bundleInfos(data.bundle)} ${npmScore(data.npmInfos.score)}
            ${npmLinks(data.npmInfos.links)}
          `
        : "no npm package found"}
    </main>
  `;
};
