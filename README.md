# React Native Install

https://reactnative.dev/docs/environment-setup

npm install -g expo-cli

---

expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start

# React Native Navigation

https://reactnavigation.org/docs/getting-started

npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

(might need to use npm install instead of expo install)

---

(bug: need to install seperately):
npm install react-native-gesture-handler

---

Add to the top of entry file (before other deps):

import 'react-native-gesture-handler';

---

npm install @react-navigation/stack

# Create New Firebase Project

Create new firebase project and grab config.
Stick firebase web app config into firebase.js file...

---

# React Snippets

ext install dsznajder.es7-react-js-snippets

---

rnfes - create functional component with stylesheet

# React Native Elements

https://reactnativeelements.com/docs

npm install react-native-elements

# Expo Firebase

https://docs.expo.io/guides/using-firebase/

expo install firebase

# Deploy App to Firebase

firebase login

firebase init

◯ Hosting: Configure and deploy Firebase Hosting sites

(arrow keys to choose, spacebar to select, enter to continue)

Use an existing project

(pick the one we created fro this app)

signal-clone-yt-build-50df0 (signal-clone-yt-build)

What do you want to use as your public directory? - type: web-build

(needs to be web-build for expo projects)

Configure as a single-page app (rewrite all urls to /index.ht
ml)? : Y

Set up automatic builds and deploys with GitHub? N

expo publish

create expo account or login

expo publish

(will start build...)

An Expo user account is required to proceed.
✔ How would you like to authenticate? › Log in with an existing Expo account
✔ Username/Email Address: … \***\*\*\*\*\***
✔ Password: … \***\*\*\*\*\***

Success. You are now logged in as ponstasound.

- Expo SDK: 40.0.0
- Release channel: default
- Workflow: Managed

Building optimized bundles and generating sourcemaps...
Starting Metro Bundler
Building JavaScript bundle [=========================== ] 90%

Uploading JavaScript bundles
Publish complete

📝 Manifest: https://exp.host/@ponstasound/signal-clone-yt/index.exp?sdkVersion=40.0.0 Learn more: https://expo.fyi/manifest-url
⚙️ Project page: https://expo.io/@ponstasound/signal-clone-yt Learn more: https://expo.fyi/project-page

TO DEPLOY TO THE WEB:

expo build:web

creates a web build folder in project - once done:

firebase deploy

(will upload files in web-build folder to firebase, and host them)

Deploy complete!

Project Console: https://console.firebase.google.com/project/signal-clone-yt-build-50df0/overview
Hosting URL: https://signal-clone-yt-build-50df0.web.app
