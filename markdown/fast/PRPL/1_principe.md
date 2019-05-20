<!-- .slide: class="transition-white fire-bg-blue fire-specific-slide" data-background="css/theme/legacy/images/background_blue.png" -->

# Principles

##==##

<!-- .slide: class="flex-row"-->

# P.R.P.L

<br>

![border-circle red w-300](./assets/images/PRPL/push.png)
![border-circle green w-300](./assets/images/PRPL/render.svg)
![border-circle blue w-300](./assets/images/PRPL/precache.png)
![border-circle purple w-300](./assets/images/PRPL/lazy.png)

<p>
<span class="center" style="font-weight:bold"> PUSH </span>
<span class="center" style="font-weight:bold"> Render </span>
<span class="center" style="font-weight:bold"> Pre-cache </span>
<span class="center" style="font-weight:bold"> Lazy-load </span>
</p>

##==##

<!-- .slide: class="flex-row"-->

# P.R.P.L

<br>

![border-circle red w-300](./assets/images/PRPL/push.png)
![border-circle green w-300](./assets/images/PRPL/render.svg)
![border-circle blue w-300](./assets/images/PRPL/precache.png)
![border-circle purple w-300](./assets/images/PRPL/lazy.png)

<p>
<span class="center"><span style="font-weight:bold">PUSH </span> <br/> critical resources <br/> for the initial URL route</span>
<span class="center"><span style="font-weight:bold">Render</span><br/> initial route</span>
<span class="center"><span style="font-weight:bold">Pre-cache</span><br/> remaining routes</span>
<span class="center"><span style="font-weight:bold">Lazy-load</span><br/> and create remaining <br/> routes on demand</span>
</p>

##==##

<!-- .slide: class="flex-row"-->

# P.R.P.L

<br>

![border-circle red w-300](./assets/images/PRPL/push.png)
![border-circle green w-300](./assets/images/PRPL/render.svg)
![border-circle blue w-300](./assets/images/PRPL/precache.png)
![border-circle purple w-300](./assets/images/PRPL/lazy.png)

<p>
<span class="center">HTTP/2 Server Push</span>
<span class="center">(simple rendering)</span>
<span class="center">Service Worker<br>(+ rel="preload")</span>
<span class="center">ES Module<br>dynamic imports</span>
</p>

##==##

# App Structure

![center h-800](./assets/images/PRPL/app-build-components.png)

© [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) [Google](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
<!-- .element class="copyright" -->

