import LossesHeader from 'components/LossesHeader';
import LossesWidget from 'components/LossesWidget';

import styles from './Losses.module.scss';

interface LossesProps {
  lossesData: Array<{
    imgSrc: string;
    desription: string;
    value: number;
  }>;
}

const Losses: React.FC<LossesProps> = (props) => {
  const { lossesData } = props;

  return (
    <div>
      <LossesHeader date={new Date()} />
      <div className={styles.lossesWrapper}>
        {lossesData.map((item, index) => (
          <LossesWidget
            key={index}
            imgSrc={item.imgSrc}
            desription={item.desription}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Losses;
