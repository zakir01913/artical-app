import React from 'react'

class AddArticalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title:'',
            description:''
        }
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleDescriptionTextAreaChange = this.handleDescriptionTextAreaChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleInputChange(event) {
        this.setState({
            title: event.target.value,
            description: this.state.description
        })
    }

    handleDescriptionTextAreaChange(event) {
        this.setState({
            title: this.state.title,
            description: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addArtical({ title: this.state.title, description: this.state.description })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Title: <input id = 'title' value = {this.state.title} onChange = {this.handleTitleInputChange} />
                </label>
                <br />
                <br />
                <label>
                    Description: <textarea id = 'description' value = {this.state.description} onChange = {this.handleDescriptionTextAreaChange} />
                </label>
                <br />
                <br />
                <input type = 'submit' id = 'submit' value = 'Submit' />
            </form>
        )
    }
}

export default AddArticalForm