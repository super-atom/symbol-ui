import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileAction, profileSelector } from 'features/profile/slice';
import DataViewer from 'components/templates/DataViewer';
import DataFilter from 'components/molecules/DataFilter';
import Pagination from 'components/molecules/Pagination';
import Loader from 'components/atoms/Loader';
import ErrorPage from 'components/pages/ErrorPage';
import styles from 'styles/common.module.css';

function ProfileMainPage(): JSX.Element {
  const dispatch = useDispatch();
  const { profiles, options, error, isLoading } = useSelector(
    profileSelector.all,
  );

  useEffect(() => {
    dispatch(profileAction.load());
  }, []);

  if (error) return <ErrorPage />;
  if (isLoading || profiles.data === undefined) return <Loader />;

  function List({ items, fallback }) {
    if (!items || items.length === 0) {
      return fallback;
    } else {
      return items.map((item) => {
        return <li key={item.profile_id}>{item.activity_name}</li>;
      });
    }
  }

  return (
    <>
      <DataViewer
        title={'ProfileMainPage'}
        view={
          <>
            <div className={styles.column}>
              <div>아이템 수 : {profiles.data.count}</div>
              <div>현재 페이지 : {options.page}</div>
            </div>
            <div className={styles.row}>
              <DataFilter
                options={options}
                reducer={profileAction.changeOptions}
              />
            </div>
            <div className={styles.row}>
              <ul>
                <List items={profiles.data.rows} fallback={<Loader />} />
              </ul>
            </div>
            <div className={styles.row}>
              <Pagination
                data={profiles.data}
                options={options}
                reducer={profileAction.changeOptionPage}
                fallback={<Loader />}
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default ProfileMainPage;
