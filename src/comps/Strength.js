import React, {Component} from 'react';
import List from './strengthList';



export default class Strength extends Component {
    constructor(props) {
        super(props)

        this.state = {

            item: '',
            strength: [],

        }
    }

    onChange = (event) => {
        this.setState({ item: event.target.value })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            item: '',
            strength: [...this.state.strength, this.state.item]
        })
    }

    render() {
        return (

            <div>
                <form className='strength' onSubmit={this.onSubmit}>
                    <input value={this.state.item} onChange={this.onChange} />
                    <button>ADD</button>
                </form>
                    <List strength={this.state.strength}/>
            </div>
        )
    }

}