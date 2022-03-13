import useHeaderSwr from 'api/strapi_admin/useHeaderSwr';

import { default as LossesHeader } from 'components/LossesHeader';

interface HeaderProps {
  locale: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { locale } = props;

  const { header } = useHeaderSwr(locale);

  return header ? (
    <LossesHeader
      title={header.title}
      dateTitle={header.dateTitle}
      date={header.date}
    />
  ) : (
    <></>
  );
};

export default Header;
