import { message } from 'antd'
const defaultState = {
    inputValue: 'mars',
    list: [
        'mars',
        'js'
    ]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'change_input':
            newState.inputValue = action.value
            return newState
        case 'handle_btn': 
            newState.inputValue !== '' ? newState.list.push(newState.inputValue) : message.error('请输入东西, 沙雕')
            newState.inputValue = ''
            return newState
        case 'handle_delete':
            newState.list.splice(action.index, 1)
            return newState
        default:
            return state
    }
}