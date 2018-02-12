import React, {Component} from 'react';
import List from './enduranceList';



export default class Endurance extends Component {
    constructor(props) {
        super(props)

        this.state = {

            item: '',
            endurance: [],

        }
    }
    onChange = (event) => {
        this.setState({ item: event.target.value })
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
        item: '',
        endurance: [...this.state.endurance, this.state.item],
        });
    }
    
    render () {
        return (
    
            <div>
                <form className='Endurance' onSubmit={this.onSubmit}>
                    <input value={this.state.item} onChange={this.onChange}/>
                    <button>ADD</button>
                </form>
                <List endurance={this.state.endurance}/>
            </div>
        )
    }
}





