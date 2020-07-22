import React from 'react';
import { Link } from 'react-router-dom';
import {
  faEnvelope,
  faPenSquare,
  faBell,
  faUserCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

export default function Header(): JSX.Element {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.navigator__buttonWrap}>
          <button className={styles.navigator__button}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div>검색창</div>
        <div className={styles.navigator__utils}>
          <div>
            <FontAwesomeIcon icon={faPenSquare} />
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div>
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </div>
      </div>
    </>
  );
}
