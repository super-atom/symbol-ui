import React from 'react';
import styles from './styles.module.css';

export default function Loader(): JSX.Element {
  return (
    <>
      <div className={styles.loader}>loading...</div>;
    </>
  );
}
