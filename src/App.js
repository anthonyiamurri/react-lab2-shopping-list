// Our convention will be that all of our projects start with an App component in App.js
// These top 2 lines bring in code from other files...
// React is the default export of the 'react' module. Component is another export.
import React, { Component } from 'react';
 // grab the default export from ContactCard.js. './' means look for the file in this folder.
import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';
class App extends Component {
    constructor(props) {
        super(props);
        // set initial contacts on page load
        this.state = {
            listItems: [
                {
                    item: "Apple Juice",
                    cost: 3,
                },
                {
                  item: "Cereal",
                  cost: 4,
                }
            ]
        };
    }
    render() {
        // With React we need to map the array of contact objects into an
        // array of ContactCard components. We'll use map() with JSX.
        // I've chosen to use an arrow (=>) function because in many cases this
        // will keep us out of trouble, although here it makes no difference.
        const listItems = this.state.listItems.map((listItem, index) => (
            <ShoppingList key={listItem.item} listItems={listItem} onDelete={() => this.removeItem(index)}/>
        ));
var total =  0
this.state.listItems.map((item) =>
total+=parseInt(item.cost)
);
console.log(total);
        return (
            <div className="App">
                <h1>Shopping List</h1>
                <p className="total" > {"Total: " + total}</p>
                <div className="App__contacts">
                    {listItems}
                    <ItemForm onSubmit={this.addItem.bind(this)}/>
                </div>
                </div>
        );
    }
    addItem(listItems) {
        this.setState(prevState => {
            // Important: Copy contacts array before modifying. We should not modify
            // the original. React it very clear that arrays and objects in your
            // state must be immutable. So we need to create a NEW array and set
            // that as the new contacts state. React has found this prevents
            // unexpected bugs.
            const newItems = prevState.listItems.slice(0);
            newItems.push(listItems);
            // update the contacts in state
            return { listItems: newItems };
        });
    }
    removeItem(index) {
        this.setState(prevState => {
            // Copy contacts array before modifying. We should not modify the original.
            const newItems = prevState.listItems.slice();
            newItems.splice(index, 1); // Remove the item at this index.
            // update the contacts in state
            return { listItems: newItems };
        });
    }
}
// We must specify that our App component is the default export of this file.
// This will be used on line 5 of index.js
export default App;
