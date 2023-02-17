I have created a webpack and babel based custom react app, where you don't need a support of create-react-app. \

You can start your project directly after cloning this component directly. [copy clone link](https://github.com/souvik1000/custom-react-app.git)

## Steps need to be follow -

1. git clone <paste_clone_link>
2. Go to the project folder.
3. open terminal and run <npm i> to install node_modules from the package.json
4. To start the project, use <npm start>
5. To build the project, use <npm run build>

## Uses

It will directly give you the support of building a separate js & css file.

But if you want to attach CSS with bundle.js, that support is also there. Just you can check the webpack.config.js file to check the comments portion of the <rules[]>. On toggling the css rules (toggle comments), you can able to attach the css code with bundle.js.

## All Available Scripts

In the project directory, you can run:

### `npm start` 
- will run the project with webpack-dev-server

### Can add: `--open` flag
- helps you to start showing browser when you will start the server.

### Already added: `--hot` flag
- helps you see smoothness on coding. Whenever you change something in your code, it will automatically reload that component, rather than reloading the whole page.

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) `or` [http://localhost:8081](http://localhost:8081) to view it in the browser.

The component will reload if you make edits (by --hot reload), not the whole page\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance with the help of webpack build --mode production.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

See the section about [webpack](https://webpack.js.org/concepts/) for more information.
