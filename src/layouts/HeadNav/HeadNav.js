import React, { Component } from 'react';
import { Menu } from 'antd';
import './HeadNav.less';
import {SmileOutlined} from '@ant-design/icons';
import {Link}from 'react-router-dom'
export default class HeaderNav extends Component{
  state = {
    current: 'home',
    
  }
  handleClick = (e) => {
    this.setState({current:e.key})
  }
  render() {
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className="nav-logo-wrap">
            <SmileOutlined/>
            {/* <Icon type="global" className="nav-logo"></Icon> */}
          </div>
          <div className="nav-list-wrap">
            <Menu
              selectedKeys={[this.state.current]}
              mode="horizontal"
              onClick={this.handleClick}
            >
              <Menu.Item key="home">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">关于我</Link>
              </Menu.Item>
              <Menu.Item key="vue">
                <Link to="/vue">VUE</Link>
              </Menu.Item>
              <Menu.Item key="react">
                <Link to="/react">React</Link>
              </Menu.Item>
            </Menu>
          </div>
          </div>
      </div>
    )
  }
}
