import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        /**开启订阅模式 */
        store.subscribe(this.storeChange)
    }

    /**改变值 */
    storeChange = () => {
        this.setState(store.getState())
    }

    handleInputValue = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value,
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <div style={{ margin: '10px 100px' }}>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '222px', marginRight: '10px' }}
                        onChange={ this.handleInputValue }
                    />
                    <Button type="primary">新增</Button>
                </div>
                <div style={{ margin: '10px 100px', width: '333px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList
