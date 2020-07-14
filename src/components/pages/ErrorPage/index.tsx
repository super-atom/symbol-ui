import React from 'react';
import styles from './styles.module.css';

export default function ErrorPage(): JSX.Element {
  return (
    <>
      <div className={styles.ErrorPage}>Error! Something went wrong!</div>
    </>
  );
}
