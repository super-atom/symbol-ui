import axios from 'axios';
import { API_URL } from 'settings/variables/env';
import { postPath } from 'settings/variables/routesPath';

export async function getPostsById(key, id): Promise<any> {
  const { data }
    = await axios.get(
      `${API_URL}/${postPath}/${id}`,
    ).then(res => res.data);
  return data;
}
export async function getPostsByCaseElementId(key, caseElementId): Promise<any> {
  const { data }
    = await axios.get(
      `${API_URL}/${postPath}?caseElementId=${caseElementId}`,
    ).then(res => res.data);
  return data;
}
