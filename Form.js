import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            URL: '',
            items: []
        }
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.handleChange = this.handleChange.bind(this);
       this.onFormSubmit = this.onFormSubmit(this);

    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */

       this.setState({
           //items: items,
           name: event.target.value,
           URL: event.target.URL
       });
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        //event.preventDefault();
        const items = this.state.items;
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */


       items.push({
           name: this.state.username,
           URL: this.state.URL
       })


       
       


    }

    render() {

        return(
            <form onChange={this.handleChange}>

                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>
                    Name:
                    <input type="text" 
                    name={this.state.name} 
                    onSubmit={this.onFormSubmit}
                    onChange={this.handleChange}>
                    </input>
                </label>
                <label>
                    URL:
                    <input type="text" 
                    value={this.state.URL} 
                    onChange={this.handleChange}
                    onSubmit={this.onFormSubmit}></input>
                </label>
                <button type="submit" value="Submit">Submit</button>


                

            </form>
        )
    
    }
}

export default Form;
