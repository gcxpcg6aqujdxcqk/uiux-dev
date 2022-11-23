# Development

### Link to Deployed Website
[Click Here](https://gcxpcg6aqujdxcqk.github.io/uiux-dev)

### Goal and Value of the Application
This application is a simple online plant shop that offers different types of plants with varying care needs to the user. The user has the ability to filter between light and water levels, as well as sort by price to find the perfect plant! On the right side of the website is the user's cart, where they can see the plants that they have added in addition to the total cost of their purchase.

### Usability Principles Considered
Each card contains all of the necessary information for each plant, and a button to add/remove the plant to the cart. The font hierarchy is organized to have important information larger, such as the plant name and price, and more intricate details be smaller. The filter and sort menu is on the top of the page, where the user has easy access to such tools. 

### Organization of Components

In App.js, the user's cart is stored as a list. Additionally, all of the filter code is placed here, and is adjusted using react's state components. In StoreItem.js, the data provided by data.json is made into individual cards that make each item in the store.

### How Data is Passed Down Through Components
I passed in the website's cart as a prop so that each item has the ability to edit the cart's state.

### How the User Triggers State Changes
The user can add and remove items by using the button on each plant card. When the user clicks the button, the state is changed in StoreItem.js. Additionally, the user can click any of the filter/sort buttons on top of the page to filter/sort accordingly. In App.js, the filter/sort functionality is handled using react's useState.

