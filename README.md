# Pulse Prototype
This repo functions as a playground for testing out design patterns and new UIs for the Pulse app built by KickUp, Inc.

## Interface with Pulse UI
This prototyping app depends on the universal style and globally shared components made available in the [`pulse-ui` repo](https://github.com/kickup-dev/pulse-ui). When styles or components are confirmed and ready to be polished for use in production work, they ought to be trasferred to the `pulse-ui` package and reviewed with or passed off to the engineering team. 

## Application Structure
This app is currently bootstrapped from [`create-react-app`](https://github.com/facebookincubator/create-react-app) and takes advantage of the default webpack configuration. Base components used for bootstrapping a page that resembles the production app live in `/src/base` and use simple name-sharing conventions to connect components and style files (for instance the `Header.js` file imports the styles from `header.css`. For full-scale prototypes, like the Report Builder, we create new directories under `/src/apps` to allow for scoped modules. It is likely that you'll want to add your prototype app to our `routes.js` file which allows you to add the app and have it simply plug in to our routing system.
