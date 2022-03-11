import useLossesSwr from 'api/strapi_admin/useLossesSwr';
import { default as LossesBase } from 'components/Losses';

const Losses: React.FC = () => {
  const { losses } = useLossesSwr();

  return <LossesBase lossesData={losses} />;
};

export default Losses;
