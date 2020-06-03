import React from 'react'
import Message from './Message.jsx'
import Button from './Button.jsx'

export default class MessageList extends React.Component {
    constructor(props){
        super(props)
        
    }
    state = {
        messages: [
            {name: 'Ivan' , content: 'Hello'},
            {name: 'Petr' , content: 'Hi'},
            {name: 'Vitalii' , content: 'Hola'},
            {name: 'Oleg' , content: 'Shalom'},
        ]
    }
    
    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, {name: document.getElementById('name').value, content: document.getElementById('text').value} ] });
    }
 

    render() {
        return(
            <div className="container">
                <label className="label">
                    <span className="label__text">Имя</span>
                    <input className="input" id="name" type="text"></input>
                </label>
                <label className="label">
                    <span className="label__text">Текст</span>
                    <input className="input" id="text" type="text"></input>
                </label>
                <Button name="Добавить" cb={this.handleClick} />

                <ul className="message-list">
                    {this.state.messages.map((item, index) => <Message {...item} key={index}/> )}
                </ul>
            </div>
        )
    }
}