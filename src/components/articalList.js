import React from 'react'
import {Artical} from './artical'

class ArticalList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.articals)
        return (
            <div>
                {this.props.articals.map( value => {
                   return <Artical artical = {value} />
                })}
            </div>
        )
    }
}

export default ArticalList

