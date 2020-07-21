import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import DataViewer from 'components/templates/DataViewer';
import Youtube from 'react-youtube';
import Loader from 'components/atoms/Loader';
import styles from 'styles/common.module.css';

import { getPostVideosById } from 'apis/symbol/postVideo';

export default function PostVideoDetail(): JSX.Element {
  const { id } = useParams();

  const postVideo = useQuery(['postVideo', id], getPostVideosById).data;
  console.log('??', postVideo);

  if (!postVideo) return <Loader />;
  return (
    <>
      <DataViewer
        title={PostVideoDetail.name}
        view={
          <>
            <Youtube videoId={postVideo.post_video_access_code} />
            <div className={styles.column}>
              <div>아이디 : {postVideo.post_video_id}</div>
              <div>
                유형 : {postVideo.post_video_type === 1 ? 'Offical' : false}
              </div>
              <div>생성일 : {postVideo.createdAt}</div>
              <div>수정일 : {postVideo.updatedAt}</div>
            </div>
          </>
        }
      />
    </>
  );
}
