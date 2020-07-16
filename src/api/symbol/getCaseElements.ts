import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from 'settings/envConstant';

export default async function getCaseElements(options): Promise<any> {
  const page = options.page;
  const limit = options.limit;
  const order = options.order;
  const sortBy = options.sortBy;

  return await axios.get(
    `${API_URL}/cases?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
  ).then(res => res.data);
}

export function getCaseElementsQuery(options): any {
  const page = options.page;
  const limit = options.limit;
  const order = options.order;
  const sortBy = options.sortBy;

  const { isLoading, error, data } = useQuery('getCaseElements', () => axios.get(
    `${API_URL}/cases?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
  ).then(res => res.data));

  return {
    isLoading,
    error,
    data
  }
}