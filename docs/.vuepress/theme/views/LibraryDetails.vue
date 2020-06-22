<style scoped lang="scss"></style>

<template>
  <!-- <ParentLayout> -->
  <main class="library-details" aria-labelledby="main-title">
    <h1 id="main-title">{{ npmInfos.name }}</h1>
    <p class="subtitle">{{ npmInfos.description }}</p>
    <div class="infos">
      <div>Version: {{ npmInfos.version }}</div>
      <div>Starts: {{ npmInfos.stars }}</div>
      <div>Latest Release: {{ npmInfos.latestRelease }}</div>
      <div>Popularity: {{ npmInfos.popularity }}</div>
      <div>Quality: {{ npmInfos.quality }}</div>
      <div>Maintenance: {{ npmInfos.maintenance }}</div>
    </div>
  </main>
  <!-- </ParentLayout> -->
</template>

<script>
// import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: "LibraryDetails",
  // components: {
  //   ParentLayout
  // },
  data() {
    return {
      error: null,
      npmInfos: {},
      //...this.$page.frontmatter,
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
      const name = this.$route.params.name;
      const npmRes = await fetch(
        `https://api.npms.io/v2/package/${encodeURIComponent(name)}`
      );
      const npmData = await npmRes.json();
      this.npmInfos = {
        // repository, homepage, npm, bugs
        name,
        links: npmData?.collected.metadata.links,
        description: npmData?.collected.metadata.description,
        version: npmData?.collected.metadata.version,
        homepage: npmData?.collected.metadata.links.homepage,
        stars: npmData?.collected.github.starsCount,
        latestRelease: npmData?.collected.metadata.date,
        popularity: Math.round(npmData?.score.detail.popularity * 100),
        quality: Math.round(npmData?.score.detail.quality * 100),
        maintenance: Math.round(npmData?.score.detail.maintenance * 100),
        // TODO: parse markdown using markdown-it
        readme: npmData?.collected.metadata.readme,
      };
    },
  },
};
</script>
