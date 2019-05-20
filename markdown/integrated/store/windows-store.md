<!-- .slide: class="transition-white fire-bg-blue fire-specific-slide" data-background="css/theme/legacy/images/background_blue.png" -->

# Windows Store

##==##

# A - APPX Manifest

<div class="multicol">
  <div class="col">

![center h-400](./assets/images/visual-studio-logo.png)
    
  </div>
  <div class="col">

1 - Release your Web App on the Web

2 - Create a Windows Application Packaging Project using VS

3 - Generate the appxmanifest.xml

4 - Add infos and assets

5 - Test it (Build & Run)

  </div>
</div>

Notes:
Cf https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps/windows-features#set-up-and-run-your-universal-windows-app

##==##

# B - Create your app


<div class="multicol">

  <div class="col">

  <br>

![center h-400](./assets/images/windows-dev-center.jpg)

  </div>
  <div class="col">

  <br><br>

1 - Log into the [Windows Dev Center dashboard](https://developer.microsoft.com/en-us/dashboard/windows/overview)

2 - Overview > Create a New App

3 - Check availability.

4 - Reserve product name.

5 - Update your appxmanifest.xml accordingly

  </div>
</div>

Notes:
Cf https://docs.microsoft.com/en-us/windows/uwp/publish/create-your-app-by-reserving-a-name

##==##


# C - Build & Submit

<div class="multicol">
  <div class="col">
<br>

![center h-400](./assets/images/pwabuilder-logo.png)

  </div>
  <div class="col">

<br><br>

1 - Install the [PWABuilder CLI](https://www.npmjs.com/package/pwabuilder)

```bash
$ npm i -g pwabuilder
```

2 - Create the .apx build

```bash
$ pwabuilder package -p windows10 -l debug
```

3 - Test w/ the [Windows App Certification Kit](https://developer.microsoft.com/en-us/windows/develop/app-certification-kit)

4 - Submit through the Windows Dev Center Dashboard

5 - and wait...

  </div>
</div>

Notes:
Cf https://docs.pwabuilder.com/quickstart/2018/02/03/quick-start-pwa-using-cli-tools.html

##==##

# OR...

##==##

<!-- .slide: class="flex-row" -->

# Automatic PWA importing

<br><br>

![center](./assets/images/bing-logo.png)
