import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        console.log(this.props)
        let temId = this.props.match.params.id
        this.setState({id: temId})
    }

    render() { 
        return (
            <div>
                <h1>List-Page => {this.state.id}</h1>
            </div>
        );
    }
}
 
export default List;