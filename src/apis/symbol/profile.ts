import axios from 'axios';
import { API_URL } from 'settings/variables/env';
import { profilePath } from 'settings/variables/routesPath';

export async function getProfiles(options): Promise<any> {
  const { page, limit, order, sortBy } = options;

  const { data } = await axios.get(
    `${API_URL}/${profilePath}?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
  ).then(res => res.data);

  return data;
}
export async function getProfileById(key, id): Promise<any> {
  const { data } = await axios.get(
    `${API_URL}/${profilePath}/${id}`,
  ).then(res => res.data);

  return data;
}
