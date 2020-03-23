import TodoListTypes from './actionTypes'
const defaultState = {
    inputValue: null,
    list: [
        '前不见古人',
        '后不见来者',
        '念天地之悠悠',
    ]
}

export default (state = defaultState, action) => {
    /**Reducer 只能接受 state, 不能改变 state */
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TodoListTypes.CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        case TodoListTypes.ADD_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = null
            return newState
        case TodoListTypes.DELETE:
            newState.list.splice(action.i, 1)
            return newState
        default:
            break;
    }
    return state
}