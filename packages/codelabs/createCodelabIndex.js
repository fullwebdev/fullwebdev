function createStep(step) {
  return `
    <google-codelab-step label="${step.heading}">

    ${step.html}

    </google-codelab-step>
  `;
}

module.exports = function createIndex(codelab) {
  return `
    <!doctype html>

    <html>
    <head>
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
      <meta name="theme-color" content="#4F7DC9">
      <meta charset="UTF-8">
      <title>WoF codelab | ${codelab.heading}</title>
      <link rel="icon" type="image/png" href="/favicon.png">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400|Roboto:400,300,400italic,500,700|Roboto+Mono">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://storage.googleapis.com/codelab-elements/codelab-elements.css">
      <style>
        .success {
          color: #1e8e3e;
        }
        .error {
          color: red;
        }
        .center {
          text-align: center;
        }
        aside.info {
          background: #f1f3f4;
          border: none !important;
          color: #606165;
        }
        aside.info:last-child {
          margin-top: 4em !important;
          margin-bottom: 0 !important;
        }
        aside.info a {
          color: #34a4ff !important;
        }
      </style>
    </head>

    <body>
      <google-codelab title="${
        codelab.heading
      }" feedback-link="https://github.com/noelmace/web-on-fire/issues">

        ${codelab.steps.map(createStep).join('')}

      </google-codelab>

      <script src="https://storage.googleapis.com/codelab-elements/native-shim.js"></script>
      <script src="https://storage.googleapis.com/codelab-elements/custom-elements.min.js"></script>
      <script src="https://storage.googleapis.com/codelab-elements/prettify.js"></script>
      <script src="https://storage.googleapis.com/codelab-elements/codelab-elements.js"></script>

    </body>
    </html>
  `;
};
