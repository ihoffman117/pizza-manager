# pizza-manager

pizza manager is a full-stack web application that allows for a user to add and edit toppings for a pizza as well as adding and editing Pizzas. The app was build using JavaScript with React, Node.js, Express, MongoDB in tandem with Mongoose otherwise known as the MERN stack. Additional technologies include styled-components and axios.

## Download and run the app

To get this app up and running locally, fork and clone the repository to your local machine. Having MongoDB installed on your machine is a prerequisite to being able to properly run the application. Follow the installation guid [here](https://www.mongodb.com/docs/manual/installation/) to ensure MongoDB is up and running. 

Install the dependencies and build + run the server by running the following commands in order: 

```
npm install
npm run build
npm run start
```

By default the app will be running on localhost:3000 

## How to use & app features

The app opens up to a home page with no use other than to guide the user to the respective management tabs. Before creating any pizzas it's suggested the user first head to the toppings page and create some pizza toppings. 

### Manage Toppings

On the Manage Toppings page the user can edit existing toppings and create new ones at the top of the page. To create a topping simply fill out the form and hit the submit button. The form will not allow a user to leave the name or description blank. Furthermore the user can not create multiple toppings of the same name. Editing existing toppings will not allow the user to change the name of the topping to another topping that already exists. The user delete a topping by simply pressing the delete button

### Manage Pizzas 

On the Manage Pizzas page the functionality is very similar to the toppings page. The main difference is creating a pizza will pull up a form Modal where the user can fill out the name and description an toggle any existing toppings to add to the pizza. The same name rules apply for naming pizzas. The user can pull up an editing modal to toggle more toppings onto the pizza, or remove existing toppings. 


