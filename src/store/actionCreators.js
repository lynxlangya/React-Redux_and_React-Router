import TodoListTypes from './actionTypes'

const changeInputChange = (value) => ({
    type: TodoListTypes.CHANGE_INPUT,
    value
})

const addItem = () => ({
    type: TodoListTypes.ADD_ITEM
})

const deleteItem = (i) => ({
    type: TodoListTypes.DELETE,
    i
})

export {
    changeInputChange,
    addItem,
    deleteItem
}