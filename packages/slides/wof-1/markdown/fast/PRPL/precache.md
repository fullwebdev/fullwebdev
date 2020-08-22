# Precache

##==##

# Service Worker

## cache.addAll

- takes an array of URLs
- retrieves them
- adds the resulting response objects to the given cache

##==##

```javascript
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
        'common/app/components/AboutComponent.js'
      ]);
    })
  );
});
```

##==##

```javascript
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
```

##==##

# Cache API

```javascript
document.querySelector('.cache-article').addEventListener('click', function(event) {
  event.preventDefault();
  var id = this.dataset.articleId;
  caches.open('mysite-article-' + id).then(function(cache) {
    fetch('/get-article-urls?id=' + id).then(function(response) {
      // /get-article-urls returns a JSON-encoded array of
      // resource URLs that a given article depends on
      return response.json();
    }).then(function(urls) {
      cache.addAll(urls);
    });
  });
});
```

##==##

# SW Precache

## sw-precache-config.js

```javascript
module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
    'common/app/components/AboutComponent.js',
    '/img/*'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.js$|\/api\/).*/]
};
```

##==##

# Polymer CLI

```json
{
  "entrypoint": "index.html",
  "shell": "src/my-app.js",
  "builds": [
    {
      ...
      "addServiceWorker": true
    }
  ]
}
```

##==##

![h-500](assets/images/PRPL/sw-precache-deprecation.png)
