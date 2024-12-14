This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

### Project Setup and Features

1. **Project Initialization**:
   - Initialized the project using the latest stable version of React Native.

2. **Library Implementations**:
   - Integrated essential libraries such as:
     - `react-native-vector-icons` for scalable icons.
     - `react-native-reanimated` for enhanced animations.
     - `react-navigation` for managing app navigation.
     - And other useful libraries.

3. **Custom Fonts**:
   - Implemented custom fonts to enhance the UI/UX of the application.
   - use specific code in `text.tsx` to handle italic font  with in fontStyle props in use `AppText` component


4. **Reusable Components**:
   - Developed common components to improve code reusability and maintainability.
   - try to make things modular so they can be reused in multiple places, whether as a component or a helper function

5. **File Structure**:
   - Set up a well-organized file structure to facilitate efficient development and scaling.
   - Designed by me to enhance the coding cycle, this structure provides encapsulation features within its components and ensures efficient handling. 

### Node.js Version Requirement

> **Important**: This project requires Node.js version 18.18.0 or higher. Please ensure you have the correct version installed. You can manage Node.js versions using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm).

#### Using nvm to Install Node.js

1. **Install nvm**: Follow the installation instructions on the [nvm GitHub page](https://github.com/nvm-sh/nvm).

2. **Install Node.js 18.18.0 or higher**:

   ```bash
   nvm install 18
   ```

3. **Switch to the installed version**:

   ```bash
   nvm use 18
   ```

4. **Verify the version**:

   ```bash
   node -v
   ```
