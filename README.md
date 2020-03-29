**React 打卡第 14 天**

1. `Store` 必须是唯一的, 只有 `Store` 能改变自己的内容
2. `Reducer` 里面只能接受 `state` , 不能改变 `state`
3. `Reducer` 必须是纯函数
4. `redux-thunk` 配置:

```js
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    reducer,
    enhancer
)
export default store
```
