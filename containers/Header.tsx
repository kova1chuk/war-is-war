import useHeaderSwr from 'api/strapi_admin/useHeaderSwr';

import { default as LossesHeader } from 'components/LossesHeader';

const Header: React.FC = () => {
  const { header } = useHeaderSwr();

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
