import React, { Component } from 'react';

import BasicLayout from '../../layouts/BasicLayout';
import styles from './List.less';

export default class Home extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <BasicLayout>
        <div className={styles.list}>
          <h1>List</h1>
        </div>
      </BasicLayout>
    );
  }
}
