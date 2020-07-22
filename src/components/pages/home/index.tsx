import React from 'react';
import { css } from '@emotion/core';
function HomePage(): JSX.Element {
  const sample = css`
    background-color: hotpink;
  `;
  const test = css`
    font-size: 50px;
  `;
  return (
    <>
      <style>{`.base {color: red}`}</style>
      <div className="base" css={[test, sample]}>
        THIS IS HOME
      </div>
    </>
  );
}

export default HomePage;
