const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authentication: `Bearer ${process.env.STRAPI_ADMIN_READ_TOKEN}`,
    },
  }).then((res) => res.json());

export default fetcher;
