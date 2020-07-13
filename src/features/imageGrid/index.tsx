import React, { useEffect, useState, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsplashAction, unsplashSelector } from './slice';
import { useInfinteScroll } from '../../hooks';
import ErrorPage from '../../components/pages/error.page';

import './styles.css';

const Loader = ({ size = 'm' }): JSX.Element => {
  return <div className={`loading-box-${size} loading`}></div>;
};

const ImageGrid = (): JSX.Element => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const { isLoading, images, error } = useSelector(unsplashSelector.all);
  const myRef = createRef<HTMLDivElement>();

  // if (!myRef.current) {
  //   myRef.current = setTarget;
  // }

  useInfinteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        dispatch(unsplashAction.loadMore());
      }
    },
  });

  useEffect(() => {
    dispatch(unsplashAction.load());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}

        {/*
          <div ref={setTarget} className="last-item">
            <Loader size="s" />
          </div>
        */}
      </section>
    </div>
  );
};

export default ImageGrid;
