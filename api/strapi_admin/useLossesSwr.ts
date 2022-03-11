import useSWR from 'swr';

import fetcher from './fetcher';

interface Losses {
  id: string;
  index: number;
  title: string;
  value: number;
  img: string;
}

const parseLosses = (data: any): Array<Losses> =>
  data.map((lossItem: any) => ({
    id: lossItem.id,
    index: lossItem.attributes.index,
    title: lossItem.attributes.title,
    value: lossItem.attributes.value,
    img: lossItem.attributes.img.data.attributes.url,
  }));

const useLossesSwr = (locale = 'uk') => {
  const { data, error } = useSWR(
    `${process.env.STRAPI_ADMIN_API_URI}/losses?locale=${locale}&populate=%2A`,
    fetcher
  );

  return {
    losses:
      data && data.data && Array.isArray(data.data) && parseLosses(data.data),
    isLoading: !error && !data,
    isError: error,
  };
};

export default useLossesSwr;
