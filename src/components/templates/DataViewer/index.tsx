import React from 'react';
import { BackButton } from 'components/atoms/Button/HistoryButton';

export default function DataViewer({ title, view }): JSX.Element {
  return (
    <>
      <h1>{title}</h1>
      <BackButton />
      <hr />
      {view}
    </>
  );
}
