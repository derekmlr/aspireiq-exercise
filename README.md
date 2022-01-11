# AspireIQ Recipients Input

Hiring exercise for AspireIQ to build a recipients email input for their compose form.

## UI/UX Suggestions
These are just opinions that would likely require actual discussion instead of just going ahead with the changes.

- There's a lot of space between emails. Perhaps it's worth keeping the background and close button visible so it better communicates the intent of the UI as a collection with tighter visual space.
- Instead of an error tag style, perhaps it shouldn't be added and a validation error communicate to change the input instead. Just not sure what the value it is to use this tag style for errors.
- There's no indication of what to do with the error tags. I made a "revise" function to remove the tag and put the contents of that tag in the input field. Helpful if there was a slight typo.
- The autocomplete/suggestion design mock has a bottom fade but I added logic to toggle a fade on the top, bottom, or both depending on the scroll position.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.