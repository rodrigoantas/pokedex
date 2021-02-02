# React Pokedex 
### This Pokedex is an app made with React, using the complete pokemon API.

## Architecture

- React <br/>
Framework used for the front-end, using components. UseState was used to store the data from the api, useCallback it's the best way of declaring a function inside a React Component and useEffect is a function to trigger everytime the page loads or when a variable changes.

- React Router Dom <br/>
Library used to manipulate the DOM tree. The "Link" component is used to change the url without realoading the page, in other words, faster. Because of that, i used the BrowserRouter from the library to change pages/react components way faster too.

- Styled Components <br/>
Used to style the application in a more organized way and also to use props.

- React Icons <br/>
Used to style the application with svgs.

- Axios <br/>
Used to require the API. It's easier that way than just fetching the data, since you can use .get easilly.


## Solutions
 - I isolated the Header component because it's a component that will be used through the application.

 - First, in the dashboard component, i used two useState's, one to store the pokemons URL, since the API doesn't deliver all of the information at once. The seconde one is to store all the information about all of the pokemons that return of the api. To do that, i used two useEffect's to fetch the data, one for the URL and another to get all of the data. Rendering the component with all of the pokemons, with a Link by react-router-dom library, sending the pokemon params to the Pokemon page.

 - In the Pokemon page, with the information given by the Dashboard page (via params), it will load all of the information of that specific pokemon. Again, the useState function from React was used to store the data from the api, one for the pokemon in the page, one for the evolution_chain from the API and the third one to the evolutions. The first useEffect is to get the evolution_chain from the API. The second one is to set the Evolutions, that verifies if the pokemon has evolutions or not, since it's not easy to fetch that data.

 ## Lifecycle of React Components
- The React components are a very curious thing. You can set a specific component to only trigger again if a state that that component is rendering changes. In other words, the React components have a lifecycle: it renders, and load all of the default returns and states, and if it an event that triggers the DOM happen, it will update the component, if it updates, it will change the DOM, if it's removed, it will stop updating.

## 3 things about the performance
- Since that specific API is a very complex one to fetch, i found the useEffect plus the Axios the best option to do it. The api don't return the evolution by default, you have to enter not one but two URL's to fetch it.
- The useCallback function inside a React Component, instead of a normal function, it will only be called when an declareted value changes. If you use a normal function, it will render more than once. Because of that, i used the useCallback function to render the formated id, height and weight of the pokemon.
- Since it's a infinity scroll application, the loading is very slow. Because of that, i used in every image of the application the loading="lazy" attribute, to load only when the scroll is near to that image.

## Time in the test

- I made this application in three days, since i started the application saturday and i finished it monday.



