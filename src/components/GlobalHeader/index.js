import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import styles from './index.less';

const { Header } = Layout;

@connect(({ global, loading }) => ({
  global,
  loading: loading.models.global,
}))
export default class GlobalHeader extends Component {

  getPath = () => {
    let path = location.hash.replace('#', '');
    if (path === '/') path = '/home';
    return path;
  }

  handleClick = (e) => {
    const path = e.key;
    this.props.dispatch(routerRedux.push(path));
  }

  render() {
    return (
      <div className={styles.moduleHeader}>
        <Header style={{ padding: 0 }}>
          <Row>
            <Col xs={24} sm={24} md={{ span: 20, offset: 2 }}>
              <div>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  onClick={this.handleClick}
                  defaultSelectedKeys={[this.getPath()]}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="/home">Home</Menu.Item>
                  <Menu.Item key="/list">List</Menu.Item>
                </Menu>
              </div>
            </Col>
          </Row>
        </Header>
      </div>
    );
  }
}
