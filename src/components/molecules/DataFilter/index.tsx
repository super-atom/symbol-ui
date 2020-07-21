import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from 'styles/common.module.css';
import Loader from 'components/atoms/Loader';
import { API_URL } from 'settings/variables/env';
import { usePaginatedQuery, queryCache } from 'react-query';

type FormData = {
  page: number;
  limit: number;
  order: string;
  sortBy: string;
};

export default function DataFilter({ options, reducer }): JSX.Element {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = ({ limit, order, sortBy }) => {
    const newOptions = {
      page: options.page,
      limit: Number(limit),
      order,
      sortBy,
    };
    dispatch(reducer(newOptions));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="sortBy">정렬 기준</label>
        <select ref={register} name="sortBy" defaultValue="updatedAt">
          <option value="updatedAt">업데이트 기준</option>
          <option value="createdAt">생성 기준</option>
        </select>

        <label htmlFor="order">정렬 순서</label>
        <select ref={register} name="order" defaultValue="ASC">
          <option value="ASC">오름차순</option>
          <option value="DESC">내림차순</option>
        </select>

        <label htmlFor="limit">표시 수</label>
        <select ref={register} name="limit" defaultValue={5}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

        <button type="submit">적용</button>
      </form>
    </>
  );
}
