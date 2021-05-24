# NgRx update

> See [V9 Update Guide](https://ngrx.io/guide/migration/v9) for more details.

## Creators syntax

[v8 introduced](https://medium.com/ngrx/announcing-ngrx-version-8-ngrx-data-create-functions-runtime-checks-and-mock-selectors-a44fac112627#6611) a less verbose syntax following a [Good Action Hygiene](https://www.youtube.com/watch?v=JmnsEvoy-gY). It is [used by default in v9](https://medium.com/ngrx/announcing-ngrx-version-9-immutability-out-of-the-box-customizable-effects-and-more-e4cf71be1a5b) (all schematics).

> See [NgRx: Action Creators redesigned](https://medium.com/angular-in-depth/ngrx-action-creators-redesigned-d396960e46da) & [NgRx creator functions 101](https://indepth.dev/posts/1109/ngrx-creator-functions-101) for more details.

### createAction

> [example](https://github.com/ngrx/platform/blob/master/projects/example-app/src/app/books/actions/collection-api.actions.ts)

![new createAction factory function vs old Action interface](https://miro.medium.com/max/2634/1*ZZ5jtJUvgcxEK3YXTnD4Mg.png)

### createReducer

> [example](https://github.com/ngrx/platform/blob/master/projects/example-app/src/app/books/reducers/collection.reducer.ts)

Avoid switch statement :heavy_plus_sign: no need for a default case.

![new createReducer factory function vs old syntax](https://miro.medium.com/max/2880/1*goeepP1SbM8v1WZ8Yh3JJA.png)

### createEffect

> [example](https://github.com/ngrx/platform/blob/master/projects/example-app/src/app/books/effects/collection.effects.ts)

Type safe (i.e. if the effect does not return an Observable<Action> it will give compile errors).

![new createEffact factory function vs old syntax](https://miro.medium.com/max/3300/1*Vzp9di4vAuDSVmZOnCVGJA.png)

## Runtime checks

4 runtime checks where introduced in [v8](https://medium.com/ngrx/announcing-ngrx-version-8-ngrx-data-create-functions-runtime-checks-and-mock-selectors-a44fac112627#6611) (replacing the `ngrx-store-freeze` package):

- `strictStateImmutability`: to verify that the state isn’t mutated
- `strictActionImmutability`: to verify that actions aren’t mutated
- `strictStateSerializability`: to verify if the state is serializable
- `strictActionSerializability`: to verify if the actions are serializable

[v9](https://medium.com/ngrx/announcing-ngrx-version-9-immutability-out-of-the-box-customizable-effects-and-more-e4cf71be1a5b) enabled `strictStateImmutability` and `strictActionImmutability` by default in development and added `strictActionWithinNgZone`.

```typescript
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        // strictStateImmutability: true,
        // strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
      },
    }),
  ],
})
export class AppModule {}
```

## Deprecrations

- v9: @nrgx/entity `addAll` :arrow_right: `setAll`
