import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { usePaginatedQuery, queryCache } from 'react-query';
import {
  caseElementsAction,
  caseElementsSelector,
} from 'features/case/caseElements/slice';
import DataViewer from 'components/templates/DataViewer';
import DataFilter from 'components/molecules/DataFilter';
import Pagination from 'components/molecules/Pagination';
import Loader from 'components/atoms/Loader';
import ErrorPage from 'components/pages/ErrorPage';
import styles from 'styles/common.module.css';
import { getCaseElementsQuery } from 'api/symbol/getCaseElements';
import { API_URL } from 'settings/envConstant';

export default function CaseElementsMainPage(): JSX.Element {
  const dispatch = useDispatch();
  const caseElements = useSelector(caseElementsSelector.caseElements);
  const options = useSelector(caseElementsSelector.options);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState('ASC');
  const [sortBy, setSortBy] = useState('updatedAt');
  let hasMore = true;
  let count = 0;
  let maxPage = 0;

  useEffect(() => {
    dispatch(caseElementsAction.load());
  }, []);

  if (caseElements.data) {
    count = caseElements.data.count;
    maxPage = Math.ceil(count / limit);
    if (maxPage === page) hasMore = false;
  }

  const CaseElementsMainPageQuery = useCallback(async (key, page) => {
    const { data } = await axios
      .get(
        `${API_URL}/cases?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
      )
      .then((res) => res.data);

    return data;
  }, []);

  const {
    status,
    resolvedData,
    latestData,
    error,
    isFetching,
  } = usePaginatedQuery(
    ['CaseElementsMainPage', page],
    CaseElementsMainPageQuery,
    {},
  );

  useEffect(() => {
    if (latestData || hasMore) {
      queryCache.prefetchQuery(
        ['CaseElementsMainPage', page + 1],
        CaseElementsMainPageQuery,
      );
    }
  }, [latestData, CaseElementsMainPageQuery, page]);

  if (status === 'loading') return <Loader />;
  else if (status === 'error') {
    <ErrorPage />;
    if (process.env.NODE_ENV === 'development') {
      console.log('Error : ', error);
    }
  }

  const List = (): JSX.Element => {
    return resolvedData.rows.map((item) => {
      return <li key={item.case_element_id}>{item.case_element_name}</li>;
    });
  };

  return (
    <>
      <DataViewer
        title={'CaseElementsMainPage'}
        view={
          <>
            <div className={styles.column}>
              <div>현재 페이지 : {page}</div>
            </div>
            <div className={styles.row}>
              {/*
              <DataFilter
                options={options}
                reducer={caseElementsAction.changeOptions}
              />
            */}
            </div>
            <div className={styles.row}>
              <ul>
                <List />
              </ul>
            </div>
            <div className={styles.row}>
              <span>Current Page: {page}</span>
              <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 1}
              >
                Previous Page
              </button>{' '}
              <button
                onClick={() =>
                  setPage((old) => (!latestData || !hasMore ? old : old + 1))
                }
                disabled={!latestData || !hasMore}
              >
                Next Page
              </button>
              {/*
              <Pagination
                data={api.data}
                options={options}
                reducer={caseElementsAction.changeOptions}
                fallback={<Loader />}
              />
            */}
            </div>
          </>
        }
      />
      {isFetching ? <Loader /> : null}{' '}
    </>
  );
}
