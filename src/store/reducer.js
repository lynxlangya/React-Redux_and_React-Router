
const defaultState = {
    inputValue: '请输入...',
    list: [
        '前不见古人',
        '后不见来者',
        '念天地之悠悠',
    ]
}

export default (state = defaultState, action) => {
    console.log(state);
    console.log(action);
    /**Reducer 只能接受 state, 不能改变 state */
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    return state
}