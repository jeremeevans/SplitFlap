# LitElement Dev Container

When I work on a project, I like to
[work in a container](https://www.jeremeevans.com/articles/why-you-should-write-code-in-containers/).
This repository serves as a template for developing LitElement web components in a
Visual Studio Code developement container. These are my requirements:

1. Create no local dependencies on my computer.
1. Use TypeScript.
1. Minimize the number of dependencies the codebase requires.
1. Write tests to ensure things work as expected.

This template will create a project that runs in a container, uses [LitElement](https://lit.dev/) to
create a web component, [Sass](https://sass-lang.com/) to style it, and [Cypress](https://www.cypress.io/) to test it.

## Get started

1. Install [Visual Studio Code](https://code.visualstudio.com/)
1. Install [Docker](https://www.docker.com/products/docker-desktop/)
1. Open Visual Studio Code and install the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
1. Clone this repository, or create a new one from the template, and open it in Visual Studio Code
1. Configure ports so they do not conflict with other things on your box:
    1. Set the [webPort for noVNC and vncPort](https://github.com/jeremeevans/LitDevContainer/blob/3061dd77fe150852fdbcb1ac1415dee7b4f7f35a/.devcontainer/devcontainer.json#L43) and forward them if you want to use them.
    1. Set the [appPort where your app will run](https://github.com/jeremeevans/LitDevContainer/blob/3061dd77fe150852fdbcb1ac1415dee7b4f7f35a/.devcontainer/devcontainer.json#L51).
1. Reopen the folder inside a dev container and open a terminal:
    1. Install dependencies: `npm i`
    1. Run it: `npm run dev`
    1. Test it: `npm run test`

## Code intellisense, linting, and formatting

When multiple developers work on the same codebase, it is very easy to end up with inconsistent styling. This template is configured to use ESLint and Prettier to help ensure consistent styling and coding rules. It also has some extensions to help with intellisense and reason about the code. The following Visual Studio Code Extensions are installed in the container to help with that:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
* [lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)
* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

These plugins rely on the follow NPM packages:

* [eslint](https://eslint.org/) to ensure code quality.
* [prettier](https://prettier.io/) to enforce style and format.
* [@typescript-eslint/eslint-plugin and @typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) configure ESLint to behave nicely with TypeScript.

## Building the web component

To build the web component, run `npm run build` from a terminal. It uses rollup to package the code into a nice little bundle. The build relies on the following packages:

* [rollup](https://rollupjs.org) builds all the things.
* [rimraf](https://github.com/isaacs/rimraf#readme) delete things in a cross-platform way.
* [@rollup/plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve#readme) loads node modules.
* [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript#readme) allows all the code to be written in TypeScript.
* [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss#readme) compiles SCSS.
  * [postcss-url](https://github.com/postcss/postcss-url#readme) embeds images in the compiled CSS.
* [rollup-plugin-postcss-lit](https://github.com/umbopepato/rollup-plugin-postcss-lit#readme) imports SCSS into LitElements
* [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser#readme) bundles the code as small as possible.
* [rollup-plugin-summary](https://github.com/yousifalraheem/rollup-plugin-summary#readme) lets us know what has been built.

## Other installed packages and why they are here

When building an application, it is important to limit dependencies and know why the ones in the project are there. Dependency hell is no fun. We've all been there. These are the other libraries in this starter template and why they are there:

* [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) serves our code during development.
* [@webcomponents/webcomponentsjs](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs) polyfills for web components in various environments.
* [start-server-and-test](https://github.com/bahmutov/start-server-and-test#readme) waits for the server to launch before running tests.
