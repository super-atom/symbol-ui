import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ImageGrid from 'features/imageGrid';

function ImageGridPage(): JSX.Element {
  const history = useHistory();
  return (
    <>
      <div>THIS IS ImageGridPage</div>
      <Link to="/">Home</Link>
      <button type="button" onClick={() => history.go(-1)}>
        Back
      </button>
      <hr />
      <ImageGrid />
    </>
  );
}

export default ImageGridPage;
