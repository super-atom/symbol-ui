import React, { useState } from 'react';
import styles from './styles.module.css';

export default function DataFilter(): JSX.Element {
  return (
    <>
      <label htmlFor="sortBy">정렬 기준</label>
      <select name="sortBy" id="sortBy">
        <option value="updatedAt">업데이트 기준</option>
        <option value="createdAt">생성 기준</option>
      </select>
      <label htmlFor="sortBy">정렬 순서</label>
      <select name="order" id="order">
        <option value="ASC">오름차순</option>
        <option value="DESC">내림차순</option>
      </select>
      <label htmlFor="limit">표시수</label>
      <select name="limit" id="limit">
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </>
  );
}
