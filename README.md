# elevar-common

`elevar-common` is a shared library designed to provide common utilities, models, and services for the Elevar project ecosystem. It serves as a foundational module to ensure consistency and reusability across various Elevar applications.

## Features

- **Reusable Components**: Centralized utilities and helpers for streamlined development.
- **Shared Models**: Common data structures used across Elevar projects.
- **Cross-Project Consistency**: Ensures uniformity in functionality and design.

## Installation

To include `elevar-common` in your project, first ensure that your npm registry is correctly set up. Run the following commands:

```bash
npm set registry http://localhost:4873
npm adduser --registry http://localhost:4873/
npm login --registry http://localhost:4873/
npm publish --registry http://localhost:4873/
npm install @elevar/common --registry=http://localhost:4873
```

If you are using a private registry, configure it as follows:

```bash
npm set registry https://your-private-registry-url/
npm install elevar-common
```

## Usage

Import the required modules or utilities in your project:

```javascript
import { utilityFunction } from 'elevar-common';

utilityFunction();
```

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).