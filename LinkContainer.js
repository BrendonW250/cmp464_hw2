import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            items: [{
                name: '',
                URL: ''
            }],
            favLinks: [{
                name: '',
                URL: ''
            }]
            //favLinks: [{name: 'Brendon', URL: 'youtube.com'}]

            
        }
    }

    

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       

    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       let items = [this.state.items];

       items.push({
           name: this.state.name,
           URL: this.state.URL
       });

       this.setState({
           items: items
           
       });
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table favLinks={this.state.favLinks}/>
                {/*TODO - Add Table Component */}
                
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form onSubmit={this.props.handleSubmit}
                />
            </div>
        );
    }
}


export default LinkContainer;