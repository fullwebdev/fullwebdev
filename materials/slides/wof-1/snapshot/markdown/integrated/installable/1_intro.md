# Objectifs

<br><br>

![h-700 float-left](./assets/images/devoxx_app.gif)

<!-- .element: style="margin-left:500px; margin-right:50px;" -->

- App Like
  <br><br>
- Engament
  <br><br>
- Performances

##==##

<!-- .slide: data-background="./assets/images/manifest.png" -->

<br><br>

# Le Manifest

##==##

<!-- .slide: class="with-code" -->

# Manifest : lier à l'application

<br>

```html
<link rel="manifest" href="manifest.json" />
```

<!-- .element: class="big-code" -->

<br>
Notes:
https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en

##==##

<!-- .slide: class="with-code" -->

# Le fichier

<div class="multicol">
  <div class="col">

```javascript
{
  "name": "Peoples",
  "short_name": "Peoples",
  "icons": [
    {
      "src": "../img/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
   ],
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#3E4EB8",
  "theme_color": "#2F3BA2",
  "gcm_sender_id": "912272722967"
}
```

  </div>
  <div class="col">

![center h-600](./assets/images/black_phone.png)

  </div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Icône

<div class="multicol">
  <div class="col">

```javascript
{
  ...,
  "icons": [
    {
      "src":
      "../img/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
   ],
  ...
}
```

<!-- .element: class="big-code" -->

  </div>
  <div class="col">

![center h-600](./assets/images/pwa_icon.png)

  </div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Page de garde (splash screen)

<div class="multicol">
  <div class="col">


```javascript
{
  "short_name": "Peoples",
  "icons": [
    { "src":
      "../img/icons/icon-192x192.png"}
   ],
  "background_color": "#3E4EB8",
  "theme_color": "#2F3BA2",
}
```

<!-- .element: class="big-code" -->

</div>   <div class="col">

![center h-600](./assets/images/pwa_splash.png)

</div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Premier écran

<div class="multicol">
  <div class="col">


```javascript
{
  ...
  "start_url": "index.html",
  ...
}
```

<!-- .element: class="big-code" -->

</div>   <div class="col">

![center h-600](./assets/images/pwa_first-screen.png)

</div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Premier écran pour l'analytics

<div class="multicol">
  <div class="col">

```javascript
{
  ...
  "start_url": "index.html?homescreen=1",
  ...
}
```

<!-- .element: class="big-code" -->

</div>   <div class="col">

![center h-600](./assets/images/pwa_first-screen.png)

</div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Window

<div class="multicol">
  <div class="col">
  

```javascript
{
  ...
  "display": "window",
  ...
}
```

<!-- .element: class="big-code" -->

</div>   <div class="col">

![center h-600](./assets/images/pwa_first-screen-window.png)

</div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Video Games

<div class="multicol">
  <div class="col">

```javascript
{
  ...
  "display": "fullscreen",
  "orientation": "portrait",
  ...
}
```

<!-- .element: class="big-code" -->

</div>   <div class="col">

![center h-600](./assets/images/pwa_games.png)

</div>
</div>

Notes:

##==##

<!-- .slide: class="with-code" -->

# Video Games

<div class="multicol">
  <div class="col">


```javascript
{
  ...
  "display": "fullscreen",
  "orientation": "landscape",
  ...
}
```

<!-- .element: class="big-code" -->

</div>   <div class="col">

![center h-600](./assets/images/pwa_games_landscape.png)

  </div>
</div>

Notes:

##==##

# Validateur

![center h-700](./assets/images/manifest_validator.png)

<br>

https://manifest-validator.appspot.com/

<!-- .element: class="center" -->

<br>

##==##

# Générateur de manifest

![center h-700](./assets/images/manifest_generator.png)

<br>

https://app-manifest.firebaseapp.com/

<!-- .element: class="center" -->

<br>
