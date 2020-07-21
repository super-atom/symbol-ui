import axios from 'axios';
import { API_URL } from 'settings/variables/env';
import { postVideoPath } from 'settings/variables/routesPath';

export async function getPostVideosById(key, id): Promise<any> {
  const { data }
    = await axios.get(
      `${API_URL}/${postVideoPath}/${id}`,
    ).then(res => res.data);
  return data;
}

export async function getPostVideosByPostId(key, postId): Promise<any> {
  const { data }
    = await axios.get(
      `${API_URL}/${postVideoPath}?postId=${postId}`,
    ).then(res => res.data);
  return data;
}
