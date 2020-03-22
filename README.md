**React 打卡第 11 天**

1. 使用箭头函数, 不使用`bind`绑定this

```jsx
handleInputValue = (e) => {
  console.log(e.target.value);
  console.log(this)
}
```

2. 开启 `Redux-dev` 方法

```js
const store = createStore(
    reducer,
  	// 添加下面一行在 store 中
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

3. **Redux 设计思想很简单**    --- 阮一峰博客
   1. `Web` 应用是一个状态机, 视图与状态一一对应
   2. 所有的状态, 保存在一个对象里面