import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {cid: 1, title: 'React'},
                {cid: 2, title: 'Vue'},
                {cid: 3, title: 'Flutter'},
            ]
        }
        this.props.history.push('/home')
    }
    render() { 
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(
                            (item, index) => {
                                return (
                                <li key={item.cid}>
                                    <Link to={'/list/' + item.cid}>{item.title}</Link>
                                </li>)
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}
 
export default Index;