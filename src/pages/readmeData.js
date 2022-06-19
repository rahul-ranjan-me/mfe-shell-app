/* eslint-disable max-len */

const data = `<div>
  <div class="tocs">
    <h1> Table of contents <a id="top"></a></h1>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#runningCli">Running the CLI</a></li>
      <li><a href="#scriptsAvailable">Available scripts</a></li>
      <li><a href="#settings">Settings</a></li>
      <li><a href="#dataSharing">Data sharing between micro-frontends(MFEs) and shell app</a></li>
      <li><a href="#widgetComponents">Exposing widgets components</a></li>
      <li><a href="#usefulFeatures">Useful features</a></li>
    </ul>
  </div>
  <div class="content">
    <div class="go-to-top">
      <a href="#">Go to top</a>
    </div>

    <a id="introduction"></a>
    <h1>Create MFA App</h1>
    <p>Bootstrap your micro front-end (MFE) using the starter App. The starter app comes with a shared micro-front end and an example of navigation.</p>
    <p>The starter app is not opinionated and is the minimum scaffolding to run an application using the Webpack module federation approach.</p>
    <p>It will create and initialize your micro front-end startup application into the specified folders, user-ready and available for further customization.</p>
    <p>There are two main options on the CLI, which let the software about the type of application you want to create.</p>
    <pre><code>
  &gt; Bootstrap MFE platform. Includes 
    1. Shell App 
    2. Shared components app 
    3. MFE app

  &gt; Add new MFE to platform
    </code></pre>
        
    <h4>Bootstrap MFE platform</h4>
    <p>This option will create three separate applications, as described above, and integrate them into the shell application. It can be used during the creation of a new project.</p>
    <h4>Add new MFE to the platform</h4>
    <p>This option will build a new micro-front-end application that can be added to a shell already generated in the previous step.</p>
    <h4>Template repos</h4>
    <p>1. Shell container: <a href="https://github.com/rahul-ranjan-me/mfe-shell-app" target="_blank">git@github.com:rahul-ranjan-me/mfe-shell-app.git</a></p>
    <p>2. Shared components: <a href="https://github.com/rahul-ranjan-me/mfe-shared-components" target="_blank">git@github.com:rahul-ranjan-me/mfe-shared-components.git</a>
    <p>3. Micro front-end application: <a href="https://github.com/rahul-ranjan-me/mfe-app" target="_blank">git@github.com:rahul-ranjan-me/mfe-app.git</a>
    <a id="runningCli"></a>
    <h2>Running the CLI (Command line interface)</h2>
    <pre><code>
  &gt; npx create-mfa-app
    </code></pre>
    <p>Executing the command will create three directories (shell-container, shared-components, micro-frontend-app) in the 'workspace' folder (the names would be based on your entries). It will generate the initial project structure and install the transitive dependencies within those directories.</p>
    <pre><code>
  micro-frontend-app
  |-- node_modules
  |-- public
    |-- index.html
  |-- src
    |-- components
        |-- Header.jsx
        |-- header.scss
    |-- const
        |-- routes.jsx
    |-- core
        |-- App.jsx
        |-- AppRoutes.jsx
        |-- bootstrap.jsx
        |-- index.scss
        |-- setupApp.jsx
    |-- pages
        |-- home
            |-- index.jsx
    |-- appRoutesComponentConfig.js
    |-- exposedComponentsList.js
    |-- index.js
  |-- .babelrc
  |-- .browserlistrc
  |-- .eslintrc.js
  |-- .gitignore
  |-- package-lock.json
  |-- package.json
  |-- webpack.config.js
    </code></pre>
    <p>No complicated configuration or folder structure, only the files you need to construct your application. Once the installation is complete, you may open your project files.</p>
    <pre></code>
  &gt; cd workspace/micro-frontend-app
    </code></pre>

    <a id="scriptsAvailable"></a>
    <h2>Available scripts</h2>
    <p>Within the newly created project, you can execute a few embedded commands:</p>
    <h3><code>npm start</code> or <code>yarn start</code></h3>
    <p>Runs the app in development mode</p>
    <ul>
      <li>Shell container: http://localhost:6001</li>
      <li>Micro front-end app: http://localhost:6003</li>
    </ul>
    <h3><code>npm lint</code> or <code>yarn lint</code></h3>
    <p>Run the eslinting for static type checking</p>
    <h3><code>npm build</code> or <code>yarn build</code></h3>
    <p>Build the application for production into the 'dist' folder. It bundles React in production mode and optimizes the build for the best performance.</p>
    <p>The build is minified, and the filenames include the hashes which ensure files are not cached.</p>

    <a id="settings"></a>
    <h2>Settings</h2>
    <p>Consider updating the following configuration in accordance with your application requirements.</p>
    <h3>1) Free Port</h3>
    <p>A free port is necessary to execute the newly added micro front-end. You can specify this when adding a new microfront-end application through the Command Line Interface (CLI). In the event that you want to modify the port, you can configure the new port by specifying in the package.json file of the respective micro-front-end application.</p>
    <h3>2) Application routes</h3>
    <p><code>{micro front-end app}/src/const/routes.jsx</code> is the configuration file for sharing micro front-end application routes with the shell to register them as platform routes.</p>
    <h3>Adding a new route</h3>
    <p>Add a new entry to <code>defaultRoutes</code> array in <code>{micro front-end app}/src/const/routes.jsx</code> like below:</p>
    <pre></code>
  { path: "payments/about", element: <About /> },
    </code></pre>
    <h3>3) Config service</h3>
    <p>The shell-container application makes an XHR call to retrieve information on the micro-front-end applications to be recorded, such as remoteName and the URL.</p>
    <p>Micro front-end addition/deletion can be done through the configuration service. This doesn't require shell container or any micro front-end app re-deployment.</p>
    <p>You can refer sample configuration service response in <code>{shell-container}/public/config.json</code>.</p>
    <p>To display the file is served via the public folder of the shell-container application. You can create a separate endpoint API for the same and update the URL in line no. 12 of <code>{shell-container}/src/core/setupApp.jsx</code> file.</p>

    <a id="dataSharing"></a>
    <h2>Data sharing</h2>
    <p>The Scaffold application uses the React Context API to share data across micro front-end and shell-container applications.</p>
    <p>The context is common and is created through the shared component of the micro front-end. You can refer <code>{shared-component}/src/components/contextProvider.js</code>.</p>
    <p>Any new data can be added to the context and shared across the platform by adding in the shared component global context file.</p>

    <a id="widgetComponents"></a>
    <h2>Exposing widgets components</h2>
    <p>Sometimes, instead of exposing the whole app as a micro front-end, you also want to expose a particular widget/component that can be built and exposed by one micro front-end app and re-used by other micro front-ends easily.</p>
    <h3>Exposing a widget as a module federated component</h3>
    <p>Create your component as a typical React component. In order to expose this component, we just need to add this component information in two files on the respective micro front-end application.</p>
    <ul>
      <li>
        <p><code>{micro front-end app}/src/appRoutesComponentConfig.js</code></p>
        <p>Add an entry just like <code>"./header": "./src/components/Header",</code> component to <code>allComponents</code> object is added on the line no. 4.</p>
      </li>
      <li>
        <p><code>{micro front-end app}/src/exposedComponentsList.js</code></p>
        <p>Add an entry just like <code>'./header'</code> to <code>componentsArray</code> on the line no. 1.</p>
      </li>
    </ul>
    <h3>Consuming the component</h3>
    <p>Now that we have exposed a component from our micro front-end app, we want to consume the same in other micro front-end apps.</p>
    <p>In order to consume a module federated widget, we have created a special component <code>MFAComponentLoader</code> that you can export from the shared component micro front-end like below.</p>
    <pre><code>
  import { MFAComponentLoader } from "shared/Components";
    </code></pre>
    <p>and consume the exposed component anywhere in your application by calling the component below</p>
    <pre><code>
  &lt;MFAComponentLoader componentName="./header" /&gt;
    </code></pre>
    <p>An example of the same is created for you and placed under <code><a href="#mfa-component-loader-example">{shell-container app}/src/pages/Home.jsx</a></code>.</p>

    <a id="usefulFeatures"></a>
    <h2>Useful features</h2>
    <h3>Less to research</h3>
    <p>The Create-mfa-app CLI will come with abilities to help you start on day 1.</p>
    <h3>Using opensource, no lock in</h3>
    <p>Under the hood, we use Webpack, Babel, ESlint, and other amazing projects to fuel your application. This will allow you to expand and customize the setup according to your project needs.</p>
    <h3>Shared component micro-frontend</h3>
    <p>The scaffolding is delivered with a micro front-end shared component (MFE). The MFE shared component lets you consume reusable components from a single source through different micro front-ends. So when you need to update a component, all you need to do is update and deploy shared micro-front-end components. Other micro front-end would always be guaranteed to get the latest version in contrast to consuming as a node package.</p>
    <h3>Data sharing</b><p>
    <p>Common mechanisms to share data between micro front-ends and shell container app.</p>
    <h3>Testing Support</h3>
    <p>ESLint pre-configured with the generated application.</p>
  
    <h2>Credit</h2>
    <p>Zack Jackson and the team for coming up with Webpack 5 module federation solution.</p>
    <h2>Contact me</h2>
    <p>I would love to get your feedback. Small or big any feedback is welcome. Please drop me a note to me on my email id: <a href="mailto:rahul.smile@gmail.com">rahul.smile@gmail.com</a></p>
    <h2>Thank you </h2>
    <p>- Rahul Ranjan</p>
  </div>`;

export default data;
