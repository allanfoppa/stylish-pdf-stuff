
export const initalHTMLSnippet = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex; /* Center content horizontally */
      justify-content: center;
      align-items: center;
      min-height: 100vh; /* Set minimum height for viewport */
      background-color: #f5f5f5; /* Light gray background */
    }

    .hello-world {
      font-size: 8rem; /* Large font size */
      color: #333; /* Dark gray text */
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
      animation: color-change 5s infinite alternate ease-in-out; /* Animate color change */
    }

    @keyframes color-change {
      from { color: #333; } /* Start from dark gray */
      to { color: #f5f5f5; } /* Change to light gray */
    }
  </style>
</head>
<body>
  <h1 class="hello-world">Hello World!</h1>
</body>
</html>
`
