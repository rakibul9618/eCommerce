import { Api, toFormData } from './base';

export const Posts = {
  getPosts: () =>
    new Promise((resolve) => {
      Api.get('/api/products')
        .then((res) => resolve([null, res.data]))
        .catch((error) => resolve([error.response, null]));
    }),
};
