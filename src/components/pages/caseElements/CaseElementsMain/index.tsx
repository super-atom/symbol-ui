import React from 'react';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';

import Loader from 'components/atoms/Loader';
import DataViewer from 'components/templates/DataViewer';
import Youtube from 'react-youtube';
import styles from 'styles/common.module.css';
import { postVideoPath } from 'settings/variables/routesPath';

import { getCaseElementById } from 'apis/symbol/caseElement';
import { getPostsByCaseElementId } from 'apis/symbol/post';
import { getPostVideosByPostId } from 'apis/symbol/postVideo';

export default function CaseElementsMainPage(): JSX.Element {
  const { id } = useParams();

  const caseElement = useQuery(['caseElementQuery', id], getCaseElementById)
    .data;
  const posts = useQuery(['posts', id], getPostsByCaseElementId).data;

  function List({ items }) {
    if (!items) return false;
    else {
      const YoutubeOpt = {
        width: '300',
        height: '168',
      };
      return items.map((item) => {
        const postVideo = useQuery(
          ['postVideo' + '_' + item.post_id, item.post_id],
          getPostVideosByPostId,
        ).data;
        if (!postVideo) return false;
        return (
          <li key={item.post_id}>
            <div>
              <Youtube
                videoId={postVideo.post_video_access_code}
                opts={YoutubeOpt}
              />
            </div>
            <div>
              <Link to={'../' + postVideoPath + '/' + postVideo.post_video_id}>
                {item.post_content}
              </Link>
            </div>
            <div>{item.createdAt}</div>
            <div>{item.updatedAt}</div>
          </li>
        );
      });
    }
  }

  if (!caseElement && !posts) return <Loader />;
  return (
    <>
      <DataViewer
        title={caseElement.case_element_name}
        view={
          <>
            <div className={styles.column}>
              <div>{caseElement.case_element_id}</div>
              <div>{caseElement.case_element_name}</div>
              <div>{caseElement.case_element_occurred_date}</div>
              <div>{caseElement.createdAt}</div>
              <div>{caseElement.updatedAt}</div>
            </div>
            <br />
            <div className={styles.row}>
              <List items={posts} />
            </div>
          </>
        }
      />
    </>
  );
}
