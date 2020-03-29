import React from 'react';
import { Route, NavLink } from 'react-router-dom'

import ReactPage from './videos/ReactPage'
import Flutter from './videos/Flutter'
import Vue from './videos/Vue'

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><NavLink to="/video/reactpage">React 学习</NavLink></li>
                    <li><NavLink to="/video/flutter">Flutter 学习</NavLink></li>
                    <li><NavLink to="/video/vue">Vue 学习</NavLink></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频</h3></div>
                <Route path="/video/reactpage/" component={ReactPage} />
                <Route path="/video/flutter/" component={Flutter} />
                <Route path="/video/vue/" component={Vue} />
            </div>
        </div>
    )
}

export default Video