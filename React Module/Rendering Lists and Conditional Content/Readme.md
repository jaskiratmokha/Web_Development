# Rendering lists of data in react
To render a list of data in React, you can use the map() method to iterate through the data and return an array of React elements.

Here is an example of how to render a list of items in React:
```
import React from 'react';

function MyList(props) {
  const items = props.items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return <ul>{items}</ul>;
}

export default MyList;
```
In this example, we have a component called MyList that receives an array of items as a prop. The map() method is used to iterate through the array and create an array of React elements, in this case, a list item ```(<li>) ```for each item in the array. The key prop is used to provide a unique identifier for each item in the list, which helps React to efficiently update the list when changes are made. Finally, the array of items is returned as a list ```(<ul>)``` wrapped in a React element.

To use this component, you can pass an array of items as a prop, like this:
```
import React from 'react';
import MyList from './MyList';

function App() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <MyList items={items} />;
}

export default App;
```
In this example, we have an App component that creates an array of items and passes it to the MyList component as a prop. The MyList component then renders the list of items using the map() method.