import axios from 'axios';
import { useQuery } from 'react-query';

const URL = 'http://localhost:3000';

export async function getProfiles(options) {
  const page = options.page;
  const limit = options.limit;
  const order = options.order;
  const sortBy = options.sortBy;
  console.log("getProfiles page", options);

  return fetch(`${URL}/profiles?page=${page}&limit=${limit}&order=${order}&sortBy=${sortBy}`)
    .then(res => res.json())
    .catch(err => {
      console.log("getProfiles Error : ", err);
      throw err;
    });

  // try {
  //   const data = await axios
  //     .get(`${URL}/profiles?page=0&limit=3&order=ASC&sortBy=updatedAt`)
  //     .then(res => { return res.data })
  //     .catch(err => console.log(err))
  //     .then(() => console.log("getProfiles request done"));

  //   return data;
  // } catch (err) {
  //   console.error(err);
  // }
}
