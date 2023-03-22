# Listening to events and working with event handlers in react

In React, listening to events and working with event handlers is similar to how it is done in traditional JavaScript, with a few differences.

To listen to an event in React, you can use the on[EventName] prop, where [EventName] is the name of the event you want to listen to. For example, to listen to the click event, you can use the onClick prop. You can attach an event handler to this prop, which will be called when the event is triggered.

Here is an example of how you can use an event handler to handle a button click event:
```
function handleClick() {
  console.log('Button clicked!');
}

function App() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```
In this example, we define a function handleClick that will be called when the button is clicked. We then pass this function as the onClick prop to the button element. When the button is clicked, the handleClick function will be called, and the message "Button clicked!" will be logged to the console.

You can also pass arguments to an event handler function in React. Here is an example:
```
function handleClick(name) {
  console.log(`Hello, ${name}!`);
}

function App() {
  return (
    <button onClick={() => handleClick('John')}>Click me</button>
  );
}
```
In this example, we pass an arrow function as the onClick prop, which calls the handleClick function with the argument 'John'. When the button is clicked, the message "Hello, John!" will be logged to the console.

In summary, to listen to events and work with event handlers in React, you can use the on[EventName] prop and attach an event handler function to it. You can also pass arguments to the event handler function using arrow functions.

# Working with 'State' in React

In React, state is an object that represents the current state of a component. It's used to store dynamic data that changes over time, such as user input or server responses.

To work with state in React, you need to do the following:

Define the state object: In the constructor of a class component, define a state object with initial values.

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Hello",
    };
  }
  // ...
}
```
Accessing state: You can access the state values using the this.state object.
```
render() {
  return (
    <div>
      <h1>{this.state.message}</h1>
      <p>Count: {this.state.count}</p>
    </div>
  );
}
```
Updating state: To update the state, use the setState method. This method takes an object that contains the new state values to be updated. You should never modify the state directly. Instead, use setState to update the state.
```
handleClick = () => {
  this.setState({
    count: this.state.count + 1,
  });
};
```
Using state in child components: You can pass the state as props to child components. This allows you to share the state across multiple components.
```
render() {
  return (
    <div>
      <ChildComponent count={this.state.count} />
    </div>
  );
}
```
By using state, you can create dynamic and interactive user interfaces in React.

# A closer look at the "useState" Hook

The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

Syntax: The first element is the initial state and the second one is a function that is used for updating the state.

```
const [state, setState] = useState(initialstate)
```
We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.
```
const [sum, setsum] = useState(function generateRandomInteger(){5+7);})
```
The above function is oneline function which computes the sum of two numbers and will be set as the initial state.

Importing: To use useState you need to import useState from react as shown below:
```
import React, { useState } from "react"
```
Example: Below is the implementation of useState() function.
```
import React, { useState } from "react";

function App(props) {
const [count, setRandomCount] =
	useState(function generateRandomInteger() {
	return Math.floor(Math.random() * 100);
});
function clickHandler(e) {
	setRandomCount(Math.floor(Math.random() * 100));
}
return (
	<div style={{margin: 'auto', width: 100, display: 'block'}}>
	<h1> {count} </h1>
	
	
<p>
		<button onClick={clickHandler}> Click </button>
	</p>


	</div>
);
}

export default App
```
Explanation: First count variable is initialized with a random number using a random function and setRandomCount is used for updating the state of the count. Every time we click on the button onClick it calls the clickHandler function which sets the count variable again with a random number.

# Adding Form Inputs in React
In React, you can add form inputs using the form element and its child input elements like input, textarea, select, etc. Here is an example of a simple form with two input fields:
```
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```
In this example, we use the useState hook to create two state variables name and email, which will store the values of the input fields. We also define a handleSubmit function, which will be called when the form is submitted.

Inside the form element, we have two label elements, each containing an input element. The value prop of each input element is set to the corresponding state variable (name and email). We also define an onChange event handler for each input, which will update the state variable when the user types into the input field.

Finally, we have a button element with the type set to "submit". When this button is clicked, the handleSubmit function will be called, which will prevent the default form submission behavior and log the values of the input fields to the console.

# Working with multiple states in React

Working with multiple states in React is a common task when building complex user interfaces. To manage state in React, you can use the built-in useState hook. Here are some general steps you can follow:

1. Identify the pieces of data that you want to manage as state. These could be anything from user input to data fetched from an API.

2. Create a state variable for each piece of data using the useState hook. For example, you could create a state variable for a user's name like this:

```
const [name, setName] = useState("");
```
The first parameter in the useState call is the initial value of the state variable, and the second parameter is a function that you can use to update the state.

3. Use the state variables in your components. You can access the value of a state variable by simply referencing it in your JSX code. For example, you could display the user's name like this:

```
<div>{name}</div>
```
4. Update the state variables as needed. To update a state variable, you can call the function that was returned by the useState hook with the new value. For example, you could update the user's name like this:
```
setName("John Doe");
```
Note that calling the function returned by useState will also trigger a re-render of your component, so that any changes to the state will be reflected in the UI.

5. Repeat steps 2-4 for each piece of data that you want to manage as state.

When working with multiple states, it's a good practice to group related state variables together into an object. This can make your code more organized and easier to manage. Additionally, you can use the useEffect hook to perform side effects based on changes to your state variables.