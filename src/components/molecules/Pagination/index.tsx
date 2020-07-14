import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Pagination({
  data,
  options,
  reducer,
  fallback,
}): JSX.Element {
  const dispatch = useDispatch();
  const maxPage = Math.ceil(data.count / options.limit);
  const buttonList: any = [];
  const [currentPage, setCurrentPage] = useState(1);
  for (let i = 1; i <= maxPage; i++) {
    buttonList.push(i);
  }

  function fetchData() {
    dispatch(reducer(currentPage));
  }

  function prevPage() {
    if (1 < currentPage) {
      setCurrentPage((currentPage) => Math.min(currentPage - 1, maxPage));
      fetchData();
    }
  }
  function nextPage() {
    if (currentPage < maxPage) {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
      fetchData();
    }
  }
  function jumpPage(page) {
    if (1 < currentPage || currentPage < maxPage) {
      setCurrentPage(() => Math.min(page, maxPage));
      fetchData();
    }
  }

  console.log('현재 페이지는 : ', currentPage, maxPage);

  const List = ({ item }) => {
    console.log('저장하는 값은? ', currentPage);

    return item.map((data, index) => {
      return (
        <button
          key={index + 1}
          value={index + 1}
          onClick={() => jumpPage(index + 1)}
        >
          {data}
        </button>
      );
    });
  };

  if (!data || data.length === 0) {
    return fallback;
  } else {
    return (
      <div className={styles.pagination}>
        <button onClick={() => prevPage()}>prev</button>
        <List item={buttonList} />
        <button onClick={() => nextPage()}>next</button>
      </div>
    );
  }
}
