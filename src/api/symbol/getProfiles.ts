import axios from 'axios';
import { API_URL } from 'settings/envConstant';

export default async function getProfiles(options): Promise<any> {
  const page = options.page;
  const limit = options.limit;
  const order = options.order;
  const sortBy = options.sortBy;

  return await axios.get(
    `${API_URL}/profiles?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
  ).then(res => res.data);
}
