# Install our dependencies

First ensure TypeScript, Typings, and webpack are installed globally.

    npm install -g typescript typings webpack

Webpack is a tool that will bundle your code and optionally all of its dependencies into a single `.js` file.
[Typings](https://www.npmjs.com/package/typings) is a package manager for grabbing definition files.

Let's now install the dependencies from our `package.json` file:

    npm install

Next, we'll add development-time dependencies:

    npm link typescript

Linking TypeScript allows you to use your global installation of TypeScript instead of needing a separate local copy.
If you want a local copy, just run `npm install typescript`.

# Putting it all together

Just run:

    webpack -d

Now open up `index.html` in your favorite browser and everything should be ready to use!
You should see a page that says "Hello from TypeScript and React!"

## Additional information
See [react-webpack typescript](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/quick-start/react-webpack.md) for details.