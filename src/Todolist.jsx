import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputChange, addItem, deleteItem } from "./store/actionCreators";

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
        const action = changeInputChange(e.target.value)
        store.dispatch(action)
    }
    /**按钮点击 */
    handleClickBtn = () => {
        const action = addItem()
        store.dispatch(action)
    }
    /**删除方法 */
    handleDelete(i) {
        const action = deleteItem(i)
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <div style={{ margin: '10px 100px' }}>
                    <Input
                        placeholder='请输入...'
                        style={{ width: '222px', marginRight: '10px' }}
                        onChange={this.handleInputValue}
                        value={this.state.inputValue}
                        onPressEnter={this.handleClickBtn}
                    />
                    <Button type="primary" onClick={this.handleClickBtn}>新增</Button>
                </div>
                <div style={{ margin: '10px 100px', width: '333px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, i) => (<List.Item onClick={this.handleDelete.bind(this, i)}>
                            {item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList
