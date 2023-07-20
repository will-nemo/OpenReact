# OpenReact

OpenReact is a versatile and highly customizable open-source library of React components developed using TypeScript and SCSS. It aims to provide a collection of well-documented and performant UI elements that can be easily integrated into your React projects.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Node version: 16](https://img.shields.io/badge/node-v16-brightgreen)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Documentation](#documentation)
4. [Contribute](#contribute)
5. [License](#license)

## Installation

OpenReact is published to npm. To install the library in your project, you'll need Node.js (v16 or higher) and npm.

```bash
$ npm install --save open-react
```

## Usage

After installation, components from OpenReact can be imported into your React application:

Remember to import the CSS file in the entry point of your application (usually index.js or App.js):

```jsx
import 'open-react/dist/OpenReact.css'
import { Button } from 'open-react';

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
```

## Documentation

Each component in OpenReact has its own dedicated documentation, including examples, prop descriptions, and other relevant information. You can access the documentation [here](#).

## Contribute

We welcome all contributions! If you wish to contribute, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

OpenReact is [MIT licensed](./LICENSE).

## Support

If you encounter any problems or have suggestions for the library, please file an issue in the GitHub repository or contact us directly.

We hope OpenReact helps you as much as we enjoyed building it. Happy coding!
