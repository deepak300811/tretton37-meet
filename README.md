### `MeetTretton37 😎`

### Developed by Deepak Kumar (deepak300811@gmail.com)

### Available at https://meettretton37.netlify.app/ 🚀

# Third party / Helper libraries used in this project ❤️

1. React - A JS Library
2. Axios -  A third party package for making network requests. (just personal preference in this case, fetch API can also be opted)

# Architecture of the project 🎁

1. A Container conponent holds all the view of the application. The a wider view the application has two parts - first, FilterAndTools and second, CardHolder.
2. Whole app is devided into components, all components are available in a separate components folder. Components used in this web app are CardHolder, DetailCard, Error, FilterAndTools, and Loader. 
3. FilterAndTools is a component where main fetching and filtering of the data happens, then this data is fed to CardHolder which generates the grid or list of DetailCards as per the user requirement.

# User Stories Developed🙋🏻‍♂️

1. `Responsive design, works on mobile and tablets` - Based on the usecase each website that is made, it has to work perfectly on various screen sizes, otherwise customer satisfaction will suffer. So have taken this on highest priority and implemented this story.
2. `Use modern CSS throughout the application (css-grid)` - Css grid makes it easier to manage view in a 2 dimentional space, also it helps in maintaining consistant and neat views on varying screen sizes. Like in our example we are showing grid of 4 employee details on large screen, and then 3 and then 2, then 1 employee in a row based on screen size. This all can happen easily with Grids.
3. `Sort by name and office` - Implementing Sorting by name and office gave me an opportunity to showcase how i can handel different state changes based on the user selection. So i opted this story. 
4. `Filter by name and office` - When we have large records, it is absolutely necessary to allow user to search and find the information needed by them. Seeing the necessity of Filter functionality, I opted to implement it.
5. `Enable switch between a grid and a different view (such as list)` - It came as something of a new exciting requirement, where the information that is desplayed on screen and also it's design will change in real time based on the user preference. If they want a superficial look they can stay on the grid view, if they want detailed information of employees, they can toggle to list view.
6. `Available on a free public url (such as Azure, Heroku)` - What is the use of a webapp developed by you, if you can't show it off outside of your machine ? This was the motivation behind making the developed webapp available on the public url.
7. `Use Typescript (or similar, no any’s!)` - started using typescript recently, so wanted to do something with it. Also, One of the big benefits of typescript is to enable IDEs to provide a richer environment for spotting common errors as we type the code. Hence, it made my life easier throughout the lifecyle of development of this WebApp.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
