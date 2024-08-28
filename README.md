# task-twitter-app

## Getting Started

After cloning the repo, consult `package.json` for the requirements with regard to nodejs and yarn versions.
Install dependencies with:

```bash
yarn
```

Run the development server with:

```bash
yarn dev
```

Open [http://localhost:3007](http://localhost:3007) with your browser to see the result.

For the full list of available scripts (`yarn lint`, `yarn test`, `yarn build`, etc.), please consult `scripts` section of `package.json` or `scripts` section of the documentation for additional decription.

## Scripts

Run the scripts using:

```bash
yarn <script_name>
```

At the moment, the following scripts can be run within the project:

- clean - delete the build folder and all its files using rm;
- clean:npm - delete the node_modules folder and all its files with rm;
- dev - launch the application in development mode;
- build - create an optimised production build of the application;
- preview - preview the application n production mode with the created build;
