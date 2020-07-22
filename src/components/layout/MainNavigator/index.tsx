import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function MainNavigator(): JSX.Element {
  return (
    <>
      <div className={styles.MainNavigator}>
        <div className={styles.MainNavigator__subscribe}>
          <div>
            <Link to="/">홈</Link>
          </div>
          <div>탐색</div>
          <div>구독</div>
          <div>좋아요</div>
        </div>
        <div className={styles.MainNavigator__menu}>
          <div>
            <Link to="/profile">프로필</Link>
          </div>
          <div>비디오</div>
          <div>이미지</div>
          <div>소셜</div>
          <div>뉴스</div>
          <div>스케줄</div>
          <div>활동</div>
          <div>데이터</div>
          <div>커뮤니티</div>
        </div>
      </div>
    </>
  );
}
