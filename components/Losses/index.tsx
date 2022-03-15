import LossesHeader from 'components/LossesHeader';
import LossesWidget from 'components/LossesWidget';

import styles from './Losses.module.scss';

interface LossesProps {
  lossesData: Array<{
    id: string | number;
    index: number;
    title: string;
    value: number;
    img: string;
    lastDayLosses: number;
  }>;
}

const Losses: React.FC<LossesProps> = (props) => {
  const { lossesData } = props;

  return (
    <div className={styles.lossesWrapper}>
      {lossesData &&
        lossesData
          .sort((firstItem, secondItem) => firstItem.index - secondItem.index)
          .map((item, index) => (
            <LossesWidget
              key={item.id}
              title={item.title}
              img={item.img}
              value={item.value}
              lastDayLosses={item.lastDayLosses}
              moreThan={index === 0}
            />
          ))}
    </div>
  );
};

export default Losses;
