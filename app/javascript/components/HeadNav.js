import React from "react"
import {Menu,Icon} from 'antd'
import './HeadNav.less'
class HeadNav extends React.Component {
  state = {
        current: 'home',
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="global" className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <a href="/home">首页</a>
                            </Menu.Item>
                            <Menu.Item key="aboutme">
                                <a  href="/home/about">关于我</a>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <a href="/home/article">文章分享</a>
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <a href="/home/resource">资源共享</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadNav
