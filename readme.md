# Install our dependencies

First ensure TypeScript, Typings, and webpack are installed globally.

    npm install -g typescript typings webpack

Webpack is a tool that will bundle your code and optionally all of its dependencies into a single `.js` file.
[Typings](https://www.npmjs.com/package/typings) is a package manager for grabbing definition files.

Let's now add React and React-DOM as dependencies to your `package.json` file:

    npm install --save react react-dom

Next, we'll add development-time dependencies on [ts-loader](https://www.npmjs.com/package/ts-loader) and [source-map-loader](https://www.npmjs.com/package/source-map-loader).

    npm install --save-dev ts-loader source-map-loader
    npm link typescript

Both of these dependencies will let TypeScript and webpack play well together.
ts-loader helps webpack compile your TypeScript code using the TypeScript's standard configuration file named `tsconfig.json`.
source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating *its own* sourcemaps.
This will allow you to debug your final output file as if you were debugging your original TypeScript source code.

Linking TypeScript allows ts-loader to use your global installation of TypeScript instead of needing a separate local copy.
If you want a local copy, just run `npm install typescript`.

Finally, we'll use Typings to grab the declaration files for React and ReactDOM:

    typings install --ambient --save react
    typings install --ambient --save react-dom

The `--ambient` flag will tell Typings to grab any declaration files from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), a repository of community-authored `.d.ts` files.
This command will create a file called `typings.json` and a folder called `typings` in the current directory.

# Putting it all together

Just run:

    webpack

Now open up `index.html` in your favorite browser and everything should be ready to use!
You should see a page that says "Hello from TypeScript and React!"

## Additional information
See [react-webpack typescript](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/quick-start/react-webpack.md) for details.