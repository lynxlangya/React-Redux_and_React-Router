import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';

const TodoList = (props) => {
    let { inputValue, handleInputVal, handleBtn, list, handleDelete } = props
    return (
        <div style={{width: '320px', margin: '10px'}}>
            <Input
                value={inputValue}
                style={{width: '240px',marginRight: '10px', marginBottom: '10px'}}
                onChange={handleInputVal}
            />
            <Button type="primary" onClick={handleBtn}>提交</Button>
            <List
                bordered
                dataSource={list}
                renderItem={(item, i) =>
                    (<List.Item key={i} onClick={handleDelete.bind(this, i)}>
                        {item}
                    </List.Item>)
                }
            />
        </div>
    )
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        handleInputVal(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        handleBtn () {
            let action = {
                type: 'handle_btn'
            }
            dispatch(action)
        },
        handleDelete (i) {
            let action = {
                type: 'handle_delete',
                index: i
            }
            dispatch(action)
        }
    }
} 
 
export default connect(stateToProps, dispatchToProps)(TodoList);