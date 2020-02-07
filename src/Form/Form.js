import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            head_coach: '',
            name: '',
            sport: '',
            notFilled: false
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    checkForm = (e) => {
        e.preventDefault()
        this.state.name && this.state.head_coach && this.state.sport ? 
        this.props.addTeam(this.state):this.setState({notFilled: true})
    }

    render() {
        return(
        <form>
            <h1>Enter your vote</h1>
            <input
                name='head_coach'
                placeholder='Head Coach...'
                value={this.state.head_coach}
                onChange={this.handleChange}
            />
            <input
                name='name'
                placeholder='Team name...'
                value={this.state.name}
                onChange={this.handleChange}
            />
             <input
                name='sport'
                placeholder='Sport...'
                value={this.state.sport}
                onChange={this.handleChange}
            />
            <button className='enter-team' onClick={this.checkForm}>Enter Team</button>
            <h4 className={this.state.notFilled ? 'input-error':'hidden'}
            >Please fill all inputs.</h4>
        </form>
        )
    }
}

export default Form;