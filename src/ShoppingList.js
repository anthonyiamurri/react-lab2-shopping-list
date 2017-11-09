import React, { Component } from 'react';
// Grab font-awesome stylesheet for our trash can icon. Note, we had to add this
// to our package.json using `npm install --save-dev font-awesome`.
import "font-awesome/css/font-awesome.css";
// Define tha ContactCard comonent using ES6 class syntax
class ShoppingList extends Component {
    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="ShoppingList">
                <div className="List_item">{this.props.listItems.item}</div>
                <div className="List_cost">{this.props.listItems.cost || "No price"}</div>
                <button className="List__delete-button"
                        title={"Delete " + this.props.listItems.item}
                        onClick={this.props.onDelete}>
                    <i className="fa fa-trash fa-lg"></i>
                </button>
            </div>
        );
    }
}
// We must specify that our ContactCard component is the default export of this file.
// This will be used on line 6 of App.js
export default ShoppingList;
