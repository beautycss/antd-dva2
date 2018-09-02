import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';

import styles from './index.less';

const { Footer } = Layout;

@connect(({ global, loading }) => ({
  global,
  loading: loading.models.global,
}))
export default class GlobalFooter extends Component {

  render() {
    return (
      <div className={styles.moduleFooter}>
        <Footer style={{ textAlign: 'center' }}>
          ©2018
        </Footer>
      </div>
    );
  }
}
