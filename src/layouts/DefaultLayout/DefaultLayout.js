import React, { Component } from 'react'
import HeaderNav from '../HeadNav/HeadNav'
import Footer from '../FooterLayout/FooterLayout'
import { Route, HashRouter } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import WVue from '../VUE/WVue'
import WReact from '../React/WReact'
// import { Button } from 'antd';
import './DefaultLayout.less'
export default class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.match.url + '/about')
    return (
      <div id="DefaultLayout">

        <HeaderNav match={this.props.match} location={this.props.location} history={this.props.history}></HeaderNav>
        <div>
          <HashRouter>
            <Route path= {this.props.match.url + 'home'} component={Home} />
            <Route path={this.props.match.url + 'about'} component={About} />
            <Route path={this.props.match.url + 'vue'} component={WVue} />
            <Route path={this.props.match.url + 'react'} component={WReact} />
          </HashRouter>

        </div>
        <div className="footerBox">
          <Footer />
        </div>

      </div>
    )
  }
}