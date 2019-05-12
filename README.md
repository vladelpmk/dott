# Project Title

Test assignment for interview process at [dott](https://ridedott.com)

## Test requirements
Develop a simple application using Custom Elements which displays a search bar, a carousel of books (covers and basic information) you search for and a relative time of a moment the results were fetched. Aesthetic design will be a plus, but it's not a strict requirement.

* Develop the application in TypeScript.
* Focus on modern browser APIs, target the latest version of Chrome.
* The search bar should support both text and voice input (voice recognition). Some ideas on how to add voice recognition:
    * place a microphone button on the right side of an input;
    * use a keyword such as "search for".
* Use Open Library API (https://openlibrary.org/developers/api) to get the search results and images of book covers.
* There are multiple sizes of images available in the API, choose a correct size based on a viewport size.
* Automatically scroll the carousel through all search results in an infinite loop using modern, native techniques. Do not use any libraries.
* Stop scrolling when the webpage is in the background.
* Load images lazily as the carousel scrolls with a small buffer of a few images.
* Relative time of a moment when the last search query was performed should be updated automatically.
* Display the relative time in a user's preferred language (navigator.language).

## Technical details

*Run project*
```
npm i && npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
