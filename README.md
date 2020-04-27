# Fluent Power Apps components Starter

 Use of React and Office UI Fabric React in the PowerApps component framework.Let’s take a look at what you need to do to create a framework component that uses React and Office UI Fabric.
 This is the first step in React support, and our current approach bundles React (like any other 3rd party JavaScript libraries) as part of your overall control JavaScript package. This means that for now, each control package gets its own React DOM tree. However, we will be adding native support for integrating into the Model-Driven Power Apps host application React DOM in coming releases.

 If you have not yet updated to the latest tools, or do not yet have the Power Apps CLI and NPM, please follow the tooling documentation to get updated. You can also grab a copy of the updated sample control code (including a React sample) as well.
 Let’s create a new framework component, add React and Office UI Fabric, and get it running in the debug harness.

## Create the component and add React and Office UI Fabric React
From a command line, run these commands to create a directory for your new project get a new framework component project created with a name of MyReactComponent using the field template. The final two commands add React and Office UI Fabric and the TypeScript typing files for React.

mkdir FluentReactComponent
cd FluentReactComponent
pac pcf init --namespace FluentComponents --name FluentReactComponent --template field
npm install
npm install react react-dom office-ui-fabric-react
npm install @types/react --save-dev
npm install @uifabric/react-cards

## Implement React for your component
Our sample control code and documentation have an example of how you can implement React; React bundling will be one of the supported ways to use a custom React version for components going forward. Controls built using the current patterns will be supported as we release into general availability.

There are a few things to keep in mind as you implement your components:

### DO keep the root control file, index.ts, as a plain TypeScript file; it is not supported as a TSX file at this time.
### DO Follow the pattern of React without JSX to render your root component in the updateView function of your framework component, as seen in the sample documentation:

ReactDOM.render(
  React.createElement(
    FacepileBasicExample,
    this.props
  ),
  this.theContainer
);

In the example above, FacepileBasicExample is the type of the React component, this.props refers to the properties being passed to the React element being created, and this.container refers to the div element that will contain the rendered framework component.

### DO pass event handlers in your React component’s props to manage framework code to React code communication, so that the code in your React component can pass back information to the framework component to allow the component to do something with that information, such as notify the framework to save the changes.

## To create and import a solution file:

Create a new folder inside the folder that has the pcfproj file and name it as Solutions (or any name of your choice) using the command mkdir Solutions. Navigate into the directory using the command cd Solutions.

Create a new solutions project using the following command. The solution project is used for bundling the code component into a solution zip file that is used for importing into Common Data Service.

CLI
pac solution init --publisher-name <enter your publisher name> --publisher-prefix <enter your publisher prefix>
 Note

The publisher-name and publisher-prefix values must be unique to your environment.

Once the new solution project is created, refer the Solutions folder to the location where the created sample component is located. You can add the reference using the command shown below. This reference informs the solution project about which code components should be added during the build. You can add references to multiple components in a single solution project.

CLI

 pac solution add-reference --path <path to your Power Apps component framework project>
To generate a zip file from the solution project, go into your solution project directory and build the project using the following command. This command uses MSBuild to build the solution project by pulling down the NuGet dependencies as part of the restore. Use the /restore only for the first time when the solution project is built. For every build after that, you can run the command msbuild.

CLI

msbuild /t:build /restore
 Tip

If msbuild 15.9.* is not in the path, open Developer Command Prompt for VS 2017 to run the msbuild commands.
Building the solution in the debug configuration generates an unmanaged solution package. A managed solution package is generated by building the solution in release configuration. These settings can be overridden by specifying the SolutionPackageType property in the cdsproj file.
You can set the msbuild configuration to Release to issue a production build. Example: msbuild /p:configuration=Release
If you encounter an error that says Ambiguous project name when running the msbuild command on your solution, ensure that your solution name and project name are not the same.
The generated solution files are located inside the \bin\debug\ folder after the build is successful.

Manually import the solution into Common Data Service using the web portal or automatically using the Power Apps Build Tools.






