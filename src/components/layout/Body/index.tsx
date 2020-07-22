import React, { Children } from 'react';
import styles from './styles.module.scss';

export default function Body(props): JSX.Element {
  return <div className={styles.Body}>{props.children}</div>;
}
