# Why React ?

React helps in creating user interfaces by providing a declarative and efficient way to build UI components. React allows developers to break down complex user interfaces into small, reusable components that can be composed together to create the final UI.

# React is all about Components

React is all about components. A component in React is a small, reusable piece of code that encapsulates a specific functionality or UI element. Components are the building blocks of a React application, and they can be composed together to create complex user interfaces.

React follows a component-based architecture, which means that the application is structured as a tree of components. Each component can have its own state, which determines its behavior and how it interacts with other components. Components can also receive input in the form of props, which are passed down from parent components.

# React follows Declarative Approach

React follows a declarative approach to building user interfaces. In a declarative approach, developers specify what they want the UI to look like, and the library or framework takes care of the details of how to render it.

In React, developers define UI components using a declarative syntax that describes what the component should render based on its current props and state. Whenever the state of a component changes, React updates the UI to reflect the new state in a predictable and efficient way.

By following a declarative approach, React makes it easier for developers to reason about their code and build more maintainable applications. Instead of having to manually manipulate the DOM to update the UI, developers can focus on describing the desired UI state and let React handle the implementation details.

# How to create a React App using create-react-app

To create a new React app using create-react-app, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to create your React app.
3. Run the following command:

```
npx create-react-app my-app
```

Replace my-app with the name you want to give to your app. This will create a new directory named my-app in your current directory.

4. Once the installation is complete, navigate into the newly created directory by running the following command:

```
cd my-app
```

5. Start the development server by running the following command:

```
npm start
```

This will start the development server and open your app in the browser. You can now start building your React app.

# What is JSX in React?

JSX (JavaScript XML) is an extension of JavaScript syntax used in React to write HTML-like code for creating React elements. It allows you to write HTML-like syntax in your JavaScript code, which is then transformed into actual JavaScript code by a transpiler like Babel.

JSX makes it easier to create and manipulate React elements in a more intuitive way, similar to how you would write HTML markup. Instead of manually creating elements with the React.createElement() function, JSX allows you to write code like this:

```
const element = <h1>Hello, world!</h1>;
```

This code looks like HTML markup, but it's actually a JavaScript expression that creates a React element. When this code is compiled, it gets transformed into:

```
const element = React.createElement("h1", null, "Hello, world!");
```

This code creates a React element using the React.createElement() function, which takes three arguments: the type of element to create (in this case, "h1"), any attributes to apply to the element (null in this case), and the content of the element ("Hello, world!").

JSX also allows you to embed JavaScript expressions within your HTML-like syntax using curly braces {}. For example:

```
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
```

In this code, the value of the name variable is embedded within the h1 element using curly braces. When this code is compiled, it gets transformed into:

```
const name = "Alice";
const element = React.createElement("h1", null, "Hello, ", name, "!");
```

# How data is passed via props in react

In React, props (short for "properties") are used to pass data from one component to another.

When a component is created, it can receive a set of props, which are essentially parameters or arguments. These props can be used to customize the behavior or appearance of the component.

To pass data via props, a parent component can pass down data to its child components by including the data as an attribute in the child component's JSX tag. For example:

```
<ChildComponent dataProp={data} />
```
In this example, the parent component is passing down a prop called dataProp with the value of data to ChildComponent.

The ChildComponent can then access the prop data by using props.dataProp within its code.

```
function ChildComponent(props) {
  return (
    <div>
      <p>{props.dataProp}</p>
    </div>
  );
}
```
In this example, ChildComponent renders the value of dataProp passed down from the parent component as a paragraph tag.

By passing data via props, components can be made more modular and reusable, as they can be customized and configured for different use cases.

# Splitting "components" into "multiple components" in react

In React, it is common practice to split larger components into smaller, reusable components. This is known as component composition or component splitting.

There are many benefits to splitting components into smaller pieces:

Reusability: Smaller components can be reused across the application, reducing the amount of duplicate code.

Maintainability: Smaller components are easier to maintain because they have a single responsibility.

Testing: Smaller components are easier to test because they have fewer moving parts.

Performance: Smaller components can be more performant because they have a smaller render tree, which reduces the amount of work that needs to be done by React.

To split a component into multiple components, you can look for areas of the component that have a clear responsibility and could be extracted into a separate component. For example, if you have a component that displays a list of items, you might extract the list item component into a separate component.

Here's an example of splitting a component into multiple components in React:

```
function UserList(props) {
  const users = props.users;

  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

function UserItem(props) {
  const user = props.user;

  return (
    <li>
      {user.name} - {user.email}
    </li>
  );
}
```

In this example, the UserList component displays a list of users by mapping over the users prop and rendering a UserItem component for each user. The UserItem component is responsible for rendering a single user. By splitting the component into two smaller components, we have created two components that have clear responsibilities and can be reused across the application.

# The concept of "Composition" and "child props"

In React, composition refers to the process of combining small, independent components into larger ones. It is a way of building complex components by reusing smaller, simpler ones. Child props is one way of achieving composition in React.

Child props is a technique where a parent component passes down data or functions to its child component as props. This allows the child component to receive the necessary information from its parent and use it to render itself. By using child props, we can create reusable components that can be combined in various ways to create more complex components.

For example, let's say we have a parent component called "App" and a child component called "Header". We want to pass a title to the Header component from the App component. We can achieve this by using child props. Here's an example of how this can be done:

```
import React from 'react';
import Header from './Header';

function App() {
  return (
    <div>
      <Header title="Welcome to my website" />
      {/* Other components */}
    </div>
  );
}

export default App;

// Header.js
import React from 'react';

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Other header content */}
    </div>
  );
}

export default Header;
```

In this example, the App component is passing the title "Welcome to my website" to the Header component as a prop called "title". The Header component then receives this prop and renders it in an h1 tag.

By using child props and composition in this way, we can create more modular and reusable components in React.
