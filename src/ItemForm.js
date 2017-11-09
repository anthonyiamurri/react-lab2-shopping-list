import React, { Component } from 'react';
class ItemForm extends Component {
    constructor(props) {
        super(props);
        // Set up initial state in constructor. These will be the initial values
        // for the form.
        this.state = {
            item: "",
            cost: "",
        };
    }
    render() {
        // Each input has its value controlled by the component state. And when
        // a user changes the value we update the state to match. It ends up
        // being a tight two-way binding.
        return (
            <form className="ItemForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Add an Item</h2>
                <p>
                </p>
                <p>
                    <label>item</label>
                    <input value={this.state.item} onChange={this.handleItemChange.bind(this)}/>
                </p>
                <p>
                    <label>cost</label>
                    <input type="cost" value={this.state.cost} onChange={this.handleCostChange.bind(this)}/>
                </p>
                <p className="ContactForm__button-bar">
                    <button type="submit">Add</button>
                </p>
            </form>
        );
    }
    handleItemChange(event) {
        this.setState({
            // We get the new input value from the event.
            item: event.target.value
        });
    }
    handleCostChange(event) {
        this.setState({
            cost: event.target.value
        });
    }
    handleSubmit(event) {
        // by default a form submission will refresh the page. preventDefault stops that from happening.
        event.preventDefault();
        // Call the function that App.js passes into the onSubmit attribute.
        // Pass it a new contact object.
        this.props.onSubmit({
            item: this.state.item,
            cost: this.state.cost,
        });
        // Clear the form by simply updating the state with empty form values.
        this.setState({
            item: "",
            cost: "",
        })
    }
}

export default ItemForm;
