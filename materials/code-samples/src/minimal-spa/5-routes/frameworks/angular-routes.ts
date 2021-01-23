const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
  //...
})
export class AppModule {}
