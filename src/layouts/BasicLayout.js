import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { connect } from 'dva';

import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

import styles from './BasicLayout.less';

const { Content } = Layout;

@connect(({ global, loading }) => ({
  global,
  loading: loading.models.global,
}))
export default class BasicLayout extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className={styles.basicLayout}>
        <Layout className="layout">
          <GlobalHeader />
          <Content style={{ marginTop: 24 }}>
            <Row>
              <Col xs={24} sm={24} md={{ span: 20, offset: 2 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 390 }}>
                  {children}
                </div>
              </Col>
            </Row>
          </Content>
          <GlobalFooter />
        </Layout>
      </div>
    );
  }
}

