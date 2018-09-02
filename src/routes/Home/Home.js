import React, { Component } from 'react';

import BasicLayout from '../../layouts/BasicLayout';
import styles from './Home.less';

export default class Home extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <BasicLayout>
        <div className={styles.home}>
          <h1>Home</h1>
        </div>
      </BasicLayout>
    );
  }
}
