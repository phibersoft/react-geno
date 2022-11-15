# React Geno

A cli-tool to generate React components and folders.

Published on NPM: [https://www.npmjs.com/package/react-geno](https://www.npmjs.com/package/react-geno)

## Installation

```bash
npm install -g react-geno
```

## Options

| Option | Description | Default |
| :---: | :---: | :---: |
| -n, --name | Name of the component |  |
| -j, --js | Generate a .jsx file instead of .tsx | false |
| -c, --css | Generate a .css file instead of .scss | false |

## Usage

```bash
rg -n MyComponent

# Generates a folder with the following structure:
MyComponent
├── MyComponent.tsx
├── MyComponent.module.scss
└── index.ts

rg -n MyComponent -j -c

# Generates a folder with the following structure:
MyComponent
├── MyComponent.jsx
├── MyComponent.module.css
└── index.ts

rg -n MyComponent -j

# Generates a folder with the following structure:
MyComponent
├── MyComponent.jsx
├── MyComponent.module.scss
└── index.ts

```




