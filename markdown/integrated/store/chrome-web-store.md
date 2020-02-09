<!-- .slide: class="transition-white fire-bg-blue fire-specific-slide" data-background="css/theme/legacy/images/background_blue.png" -->

# Chrome Web Store <br>& G Suite Marketplace

##==##

# Why ?

<div class="multicol"> <div class="col">

<br><br>

![center h-300](./assets/images/store/Chrome-App-List-icon.png)

</div><div class="col">

<br><br><br><br>

<p class="quotation">
Deliver an experience comparable to a native application.
</p>

</div></div>

Notes:
Cf https://developer.chrome.com/apps/about_apps

##==##

# Why ?


<div class="multicol"> <div class="col">

<br><br>

![center h-300](./assets/images/gsuite-marketplace-logo.svg)

</div><div class="col">

<br><br><br><br>

<p class="quotation">
Find and install third-party applications that are integrated with G Suite.
</p>

</div></div>

Notes:
Cf https://developer.chrome.com/apps/about_apps

##==##

<!-- .slide: class="flex-row" -->

# How ?

<br>

Google Apps Script Project

<br>

A .gs script with a doGet() methode:

```javascript
function doGet() {
  return HtmlService.createHtmlOutput('<b>Hello, world!</b>');
}
```

<br>
Published as a Web App to the Store.

Notes:
Cf https://developers.google.com/apps-script/guides/distribute-web-app
https://developers.google.com/apps-script/guides/html/
https://developers.google.com/apps-script/guides/projects
https://developers.google.com/apps-script/guides/dashboard
https://developers.google.com/apps-script/guides/web
https://developer.chrome.com/apps/first_app
https://github.com/GoogleChrome/chrome-app-samples

##==##

<!-- .slide: data-background="black" class="full-center mariane" -->

![center w-1000](./assets/images/store/chrome-app-support-end.png)

##==##

<!-- .slide: data-background="black" class="full-center mariane" -->

![center w-1000](./assets/images/store/chrome-app-to-pwa.png)

##==##

<!-- .slide: data-background="black" class="full-center mariane" -->

![center w-1000](./assets/images/store/chrome-store-pwa-support.png)

##==##

<!-- .slide: data-background="black" class="full-center mariane" -->

<p class="center">
<video autoplay loop muted playsinline height="1000" src="./assets/images/gifs/laugh.mp4"></video>
</p>
