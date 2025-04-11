# @39choko/prettier-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![license][license-src]][license-href]

## Install

```sh
npm install --save-dev @39choko/prettier-config
yarn add --dev @39choko/prettier-config
pnpm add -D @39choko/prettier-config
bun add --dev @39choko/prettier-config
```

## Usage

In your `prettier.config.mjs` or in your `.prettierrc`

```js
// prettier.config.mjs
import prettierConfig from "@39choko/prettier-config";

export default prettierConfig;

// .prettierrc
"@39choko/prettier-config"
```

Add `format` script to `package.json`

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## License

[MIT](./LICENSE.md) License © 2025 [39Choko](https://github.com/39Choko)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@39choko/prettier-config
[npm-version-href]: https://npmjs.com/package/@39choko/prettier-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@39choko/prettier-config
[npm-downloads-href]: https://npmjs.com/package/@39choko/prettier-config
[license-src]: https://img.shields.io/github/license/@39choko/prettier-config.svg
[license-href]: ./LICENSE.md
