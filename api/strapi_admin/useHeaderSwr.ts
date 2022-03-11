import useSWR from 'swr';
import fetcher from './fetcher';

interface Header {
  title: string;
  dateTitle: string;
  date: Date;
}

const parseHeader = (data: any): Header => ({
  title: data.attributes.title,
  dateTitle: data.attributes.dateTitle,
  date: data.attributes.date,
});

const useHeaderSwr = (locale = 'uk') => {
  const { data, error } = useSWR(
    `${process.env.STRAPI_ADMIN_API_URI}/header?locale=${locale}`,
    fetcher
  );

  return {
    header: data && data.data && parseHeader(data.data),
    isLoading: !error && !data,
    isError: error,
  };
};

export default useHeaderSwr;
