const render = ({ script, data, storySrc }) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: var(--sansserif);
      color: var(--primary);
      background-color: var(--primary-background);
    }
  </style>
  <script>window._data = ${JSON.stringify(data)}</script>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script crossorigin src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>
  <script>
    ${script}
  </script>
  <script crossorigin src="${storySrc}" />
  <link rel="stylesheet" href="https://cloud.webtype.com/css/3a8e55c6-b1f3-4659-99eb-125ae72bd084.css">
  <title>Glitch Component Library</title>
</head>

<body>
  <div class="glitchButton" style="position: absolute; top: 20px; right: 20px;"></div><script src="https://button.glitch.me/button.js"></script>
  <div id="root"></div>
  
</body>
</html>`;

module.exports = { render }