import React, { Component } from 'react';
import { Input, Button } from 'antd';
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() { 
        return (
            <div style={{margin: '10px'}}>
                <Input value={this.state.inputValue} style={{width: '240px', marginRight: '10px'}} />
                <Button type="primary">提交</Button>
            </div>
        );
    }
}
 
export default TodoList;