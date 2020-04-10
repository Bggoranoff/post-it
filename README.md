## PosterIt
A print-on-demand e-commerce site for posters.

## Website Structure
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### On every page:
- There is a header with all the relevant links (for logged and non-logged users respectively).
- There is a footer.
- There is a loader for most of the React.Components.

### Homepage:
- All the posts are displayed in rectangular boxes with the relevant image, caption and price tag.

### Register page:
- There is a registration form with several fields, all required:
    - Full name
    - Username
    - Password
    - Date of birth
    - Profile image URL
    - Bio
    - Email
- On submitting the form the user is redirected to the login page.

### Login page:
- There is a registration form with several fields, all required:
    - Username
    - Password
- On submitting the form the user is redirected to the home page.

### Create Poster:
- There is a form for creating a new poster with several fields, all required:
    - Poster name (caption)
    - Poster price (select option)
    - Poster category (select option)
    - Poster image (url)
    - Poster description
- On submitting the form the user is redirected to the home page.

### Details Page:
- For every poster. Contains all the details of the particular product in a larger rectangular box.
- Has a DELETE button for the creator and a BUY button for other consumers.

### Delete Poster:
- Only the creator of the poster has this option.
- On clicking the button the user is redirected to the home page and the current poster is deleted.

### Profile Page:
- For every creator. Contains his / her personal details.

### About Us:
- Documentation of the project.
- Contacts.

### Additional Routing Information:
- The details, login, register, home and about pages are public.
- The create, logout and profile pages are private - solely for creators.
- The delete page is only for the authors of the particular posters.

### Testing:
- Tests built using [JEST](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

### Server:
- The server is created using [Express](https://expressjs.com/) and MVC architecture.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
