import axios from 'axios';

export default function getProfiles(options): any {
  const page = options.page;
  const limit = options.limit;
  const order = options.order;
  const sortBy = options.sortBy;

  let data;

  async () => {
    data = await axios.get(
      `http://localhost:3000/profiles?page=${page}&limit=5&order=ASC&sortBy=updatedAt`,
    );
  }

  console.log("DATA", data);
  return data;
}
