import LibraryDetails from "./theme/views/LibraryDetails.vue";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  router.addRoutes([
    {
      name: "libraryDetails",
      path: "/libraries/:name",
      component: LibraryDetails,
    },
  ]);
};
