var port = window.location.port
  ? ":" + window.location.port
  : "";

window.location.href =
  window.location.protocol +
  "//" +
  window.location.hostname +
  port +
  "/mon-fichier.html";
