const appRoutes: Routes = [
  // ...
  {
    path: "posts",
    component: PostsListComponent,
    resolve: {
      posts: PostsListResolverService
    }
  }
  // ...
];
