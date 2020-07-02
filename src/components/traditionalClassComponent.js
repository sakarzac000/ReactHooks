import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state= {
            visible: true
        }

        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleBtnClick() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div className='class-component'>
                <h3 style={{visibility: this.state.visible ? "visible" : "hidden"}}>Hello!</h3>
                <button onClick={this.handleBtnClick}>{this.state.visible ? "hide" : "show"}</button>
            </div>
        )
    }
}
