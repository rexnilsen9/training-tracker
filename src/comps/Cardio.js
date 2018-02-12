import React, {Component} from 'react';
import List from './cardioList';



export default class Cardio extends Component {
    constructor(props) {
        super(props)

        this.state = {

            item: '',
            cardio: [],

        }
    }
    onChange = (event) => {
        this.setState({ item: event.target.value })
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
        item: '',
        cardio: [...this.state.cardio, this.state.item],
        });
    }
    
    render () {
        return (
    
            <div>
                <form className='Cardio' onSubmit={this.onSubmit}>
                    <input value={this.state.item} onChange={this.onChange}/>
                    <button>ADD</button>
                </form>
                <List cardio={this.state.cardio}/>
            </div>
        )
    }
}