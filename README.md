This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## CNODE

### 踩坑
1. 遇见Nav组件复用的问题，在完善移动端和响应式时。开始想通过props将style样式传入，后通过media重写Nav组件样式解决。
2. 移动端布局侧边导航时发现antd默认给li上下4px的margin，去掉。
3. IndexList组件，去掉p标签默认margin。
4. 在detail组件渲染的时候遇到TypeError: Cannot read property 'xxx' of undefinde.因为我state里面初始化的json是空对象，所以渲染的时候第二层的对象就是undefined，继续往下一层就肯定不行了，也就是undefined.undefined，开始以为是setState的更新有延迟。
  - 初始化的时候按照请求数据深层格式初始化一下
  - 每一层对象渲染的时候条件判断渲染
5.图片适应的问题max-width
6.在使用react-redux后，实现首页的tab跳转，match.params.id   
  - shouldComponentUpdate 监视tabs变化发现有刷新问题
  - componentDidUpdate 改用生命周期函数解决
7. 使用withRouter让index的内部组件Nav返回一个高阶组件，给this.props注入（history，location， macth）三个对象，通过
location.pathname变化，来实现Nav选中效果。
8. 在使用pagination组件时，有刷新bug重写handleOnChange函数和Router，通过重定向路由和生命周期函数componetDidMount,componentDidUpdate来解决，让路由参数来控制整个index页面数据的获取。


