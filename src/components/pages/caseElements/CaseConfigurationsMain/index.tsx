import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useQuery, usePaginatedQuery, queryCache } from 'react-query';
import { useParams, Link } from 'react-router-dom';

import DataViewer from 'components/templates/DataViewer';
import DataFilter from 'components/molecules/DataFilter';
import Loader from 'components/atoms/Loader';
import styles from 'styles/common.module.css';
import * as utils from 'utils/index.utils';

import {
  caseElementsAction,
  caseElementsSelector,
} from 'features/case/caseElements/slice';
import { getCaseConfigurationByProfileId } from 'apis/symbol/caseElement';
import { getProfileById } from 'apis/symbol/profile';

export default function CaseElementsMainPage(): JSX.Element {
  const { id } = useParams();
  const options = useSelector(caseElementsSelector.options);
  const { limit, order, sortBy } = useSelector(caseElementsSelector.options);
  const [page, setPage] = useState(options.page);
  let ishasMore = true;
  let count = null;
  let maxPage = 0;

  const profile = useQuery(['profileQuery', id], getProfileById).data;
  const queryName = CaseElementsMainPage.name;
  const query = useCallback(
    async (queryName, id, page, limit, order, sortBy) =>
      await getCaseConfigurationByProfileId(
        queryName,
        id,
        page,
        limit,
        order,
        sortBy,
      ),
    [],
  );

  const {
    status,
    resolvedData,
    latestData,
    error,
    isFetching,
  } = usePaginatedQuery([queryName, id, page, limit, order, sortBy], query, {});

  useEffect(() => {
    if (latestData || ishasMore) {
      queryCache.prefetchQuery(
        [queryName, id, page + 1, limit, order, sortBy],
        query,
      );
    }
  }, [latestData, query, page]);

  if (status === 'loading') return <Loader />;
  else if (status === 'error') {
    <div>Error</div>;
    if (process.env.NODE_ENV === 'development') console.log(error);
  }

  if (resolvedData) {
    if (count === null) count = resolvedData.count;
    if (count) maxPage = Math.ceil(count / limit);
    if (maxPage === page) ishasMore = false;
  }

  function List({ items }) {
    if (!items) return false;
    else {
      return items.map((item) => {
        return (
          <li key={item.case_configuration_id}>
            <div>
              <Link to={'/cases/' + item.case_element_id}>
                {item.case_element_id}
              </Link>
            </div>
            <div>{item.createdAt}</div>
            <div>{item.updatedAt}</div>
          </li>
        );
      });
    }
  }

  const ButtonList = () => {
    const buttonCounts: any = [];
    for (let i = 1; i <= maxPage; i++) buttonCounts.push(i);
    if (utils.isEmptyData(buttonCounts)) {
      return (
        <button className={styles.button} disabled>
          Not exists page
        </button>
      );
    } else {
      return buttonCounts.map((data, index) => {
        return (
          <button
            className={
              styles.button + (page === index + 1 ? ' ' + 'active' : '')
            }
            key={index + 1}
            value={index + 1}
            onClick={() => setPage(index + 1)}
          >
            {data}
          </button>
        );
      });
    }
  };

  return (
    <>
      <DataViewer
        title={profile ? profile.activity_name : false}
        view={
          <>
            {profile ? (
              <div className={styles.column}>
                <div>활동명 : {profile.activity_name}</div>
                <div>활동명(원어) : {profile.native_activity_name}</div>
                <div>본명 : {profile.human.real_name}</div>
                <div>성별 : {profile.human.gender === 2 ? '여성' : false}</div>
                <div>출생지 : {profile.human.birth_country}</div>
                <div>활동 국가 : {profile.human.activity_country}</div>
                <div>거주 국가 : {profile.human.current_list_city}</div>
                <div>
                  활동 유형 : {profile.profile_type === 2 ? '아티스트' : false}
                </div>
                <div>생년월일 : {profile.human.birth_city}</div>
                <div>프로필 설명 : {profile.profile_description}</div>
                <br />
                <div>작성일 : {profile.createdAt}</div>
                <div>최근 수정 : {profile.updatedAt}</div>
                <div>작성자 : {profile.publication.user_id}</div>
              </div>
            ) : (
              false
            )}
            <br />
            <div className={styles.row}>
              <DataFilter
                options={options}
                reducer={caseElementsAction.changeOptions}
              />
            </div>
            <div className={styles.column}>
              <List items={resolvedData.rows} />
            </div>
            <div className={styles.row}>
              {maxPage === 0 ? (
                false
              ) : (
                <button
                  className={styles.button}
                  onClick={() => setPage((old) => Math.max(old - 1, 0))}
                  disabled={page === 1}
                >
                  Previous Page
                </button>
              )}
              <ButtonList />
              {maxPage === 0 ? (
                false
              ) : (
                <button
                  className={styles.button}
                  onClick={() =>
                    setPage((old) =>
                      !latestData || !ishasMore ? old : old + 1,
                    )
                  }
                  disabled={!latestData || !ishasMore}
                >
                  Next Page
                </button>
              )}
            </div>
            {isFetching ? <div>fetching...</div> : null}{' '}
          </>
        }
      />
    </>
  );
}
