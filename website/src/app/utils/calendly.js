export function loadCalendly() {
  if (window.calendlyLoading) {
    return window.calendlyLoading;
  }
  if (window.Calendly) {
    window.calendlyLoading = Promise.resolve([null, null]);
    return window.calendlyLoading;
  }
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  document.body.appendChild(script);
  /** @type {Promise<Event>} */
  const scriptLoadPromise = new Promise((resolve, reject) => {
    script.onload = (ev) => resolve(ev);
    script.onerror = (error) => reject(error);
  });
  const stylesheet = document.createElement("link");
  stylesheet.href = "https://assets.calendly.com/assets/external/widget.css";
  stylesheet.rel = "stylesheet";
  stylesheet.type = "text/css";
  /** @type {Promise<Event>} */
  const stylesheetLoadPromise = new Promise((resolve, reject) => {
    stylesheet.onload = (ev) => resolve(ev);
    stylesheet.onerror = (error) => reject(error);
  });
  document.getElementsByTagName("head")[0].appendChild(stylesheet);
  window.calendlyLoading = Promise.all([
    scriptLoadPromise,
    stylesheetLoadPromise,
  ]);
  return window.calendlyLoading;
}
