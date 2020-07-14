import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';

export function BackButton({ text = 'BACK' }): JSX.Element {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.go(-1)}>
        {text}
      </button>
    </>
  );
}
