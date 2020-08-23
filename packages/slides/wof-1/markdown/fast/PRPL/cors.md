<!-- .slide: data-background="assets/images/cross.jpg" -->

# CORS

##==##

# CORS

additional HTTP headers

let access selected resources from a server at a different origin

##==##

# credentials

identify a particular user

<br>

- cookies
- HTTP basic auth
- connection-level identifiers (e.g. client certificates)

##==##

- XMLHTTPRequest & fetch
- @font-face
- `<img>`, `<video>`, `<script>`

##==##

# crossorigin attribute

- anonymous
- use-credentials

<br>

`""` -> anonymous

##==##

<!-- .slide: data-background="black" -->

![h-800](assets/images/so-what.jpg)

##==##

# Requests without credentials use a separate connection !

HTTP/2 push cache sits with connection!

Different credential mode => new connection => re-load
