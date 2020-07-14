import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileAction, profileSelector } from './slice';
import Loader from '../../components/atoms/Loader';
import styles from './styles.module.css';

function Profile(): JSX.Element {
  function List({ items, fallback }) {
    if (!items || items.length === 0) {
      return fallback;
    } else {
      return items.map((item) => {
        return <li key={item.profile_id}>{item.activity_name}</li>;
      });
    }
  }

  return <></>;
}

export default Profile;
