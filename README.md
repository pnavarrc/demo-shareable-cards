## Getting Started

Yarn commands:

- `dev`: Starts next in development mode
- `build`: Builds the application for production
- `start`: Starts the Next.js production server
- `export`: Builds the application and exports to the `out` folder.
- `serve:static`: Builds, exports and serves the static app.
- `lint`: Runs ESLint to check for linting errors
- `lint:fix`: Runs ESLint and attempts to fix linting errors
- `format`: Checks the code for formatting errors using Prettier
- `format:fix`: Fixes code formatting using Prettier
- `test`: Runs Jest
- `test:watch`: Runs Jest in watch mode

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### ✨ Code generators

Code generators help to create boilerplate code based on templates. This helps document best practices and keep the codebase consistent, as well as saving a bit of time. The templates are implemented in [`plopfile.ts`](./plopfile.ts). See [Plop.js](https://plopjs.com/documentation)

#### Create a new component

Generates the boilerplate code for a component. Includes the styles, main component file and the `index.ts` file to export the main component and other functions or variables. The generator takes care of making capitalization of the files and variable names uniform.

**Example**:

```sh
# generates the code, prompting for the component name
$ yarn create-component
# generates the code using the given name (`usa map`)
$ yarn create-component 'usa map'
yarn run v1.22.10
$ plop component 'usa map'
✔  ++ /src/components/UsaMap/index.ts
✔  ++ /src/components/UsaMap/UsaMap.tsx
✔  ++ /src/components/UsaMap/UsaMap.styles.ts
✨  Done in 3.33s.
```

#### Create a script

Generates the boilerplate code for a script, including an `index.ts` and `README.md` files. The index file includes basic argument parsing and processing. See [`scripts/sum`](./scripts/sum) for an example.

**Example**:

```sh
# generate the code, prompting for the name and description
$ yarn create-script
# generates the code using the given name and description
$ yarn create-script 'fetch data' 'fetch data from the cloud'
yarn run v1.22.10
$ plop script 'fetch data' 'fetch data from the cloud'
✔  ++ /scripts/fetch-data/index.ts
✔  ++ /scripts/fetch-data/README.md
✨  Done in 3.44s.
```

## Learn More

- [Next.js · Documentation](https://nextjs.org/docs)
- [Next.js · Learn](https://nextjs.org/learn)
- [Plop.js](https://plopjs.com/)
- [Jest.io · Getting Started](https://jestjs.io/docs/getting-started)
