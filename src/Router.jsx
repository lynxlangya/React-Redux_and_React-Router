import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Index from './pages/Index'
import './index.css'
import Video from './pages/Video'

function AppRouter() {
    // 动态路由
    let routeConfig = [
        { path: '/', title: '首页', exact: true, component: Index },
        { path: '/video', title: '视频', exact: false, component: Video }
        // { path: '/video', title: '职场', exact: false, component: Video }
    ]

    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {
                            routeConfig.map((item, index) => {
                                return (
                                    <li key={index}><NavLink to={item.path}>{item.title}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    )
}


export default AppRouter