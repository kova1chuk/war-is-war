import useLossesSwr from 'api/strapi_admin/useLossesSwr';
import { default as LossesBase } from 'components/Losses';

interface LossesProps {
  locale: string;
}

const Losses: React.FC<LossesProps> = (props) => {
  const { locale } = props;

  const { losses } = useLossesSwr(locale);

  return <LossesBase lossesData={losses} />;
};

export default Losses;
