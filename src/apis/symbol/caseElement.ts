import axios from 'axios';
import { API_URL } from 'settings/variables/env';
import { caseElementPath, caseConfigurationPath } from 'settings/variables/routesPath';

export async function getCaseElements(key, page, limit, order, sortBy): Promise<any> {
  const { data }
    = await axios
      .get(
        `${API_URL}/${caseElementPath}?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
      )
      .then((res) => res.data);
  return data;
}

export async function getCaseElementById(key, id): Promise<any> {
  const { data }
    = await axios
      .get(
        `${API_URL}/${caseElementPath}/${id}`,
      )
      .then((res) => res.data);
  return data;
}

export async function getCaseElementByActivityName(key, id, page, limit, order, sortBy): Promise<any> {
  const { data }
    = await axios
      .get(
        `${API_URL}/${caseElementPath}/${id}?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
      )
      .then((res) => res.data);
  return data;
}

export async function getCaseConfigurationByProfileId(key, id, page, limit, order, sortBy): Promise<any> {
  const { data }
    = await axios
      .get(
        `${API_URL}/${caseConfigurationPath}/${id}?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
      )
      .then((res) => res.data);
  return data;
}
