import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    // 添加下面一行在 store 中
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store