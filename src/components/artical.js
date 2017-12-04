import React from 'react'

export class Artical extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article>
                <h1> {this.props.artical.title} </h1>
                <p> {this.props.artical.description} </p>
            </article>
        )
    }
}