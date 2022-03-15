import Image from 'next/image';

import styles from './LossesWidget.module.scss';

interface LossesWidgetProps {
  img: string;
  title: string;
  value: number;
  lastDayLosses: number;
  moreThan: boolean;
}

const LossesWidget: React.FC<LossesWidgetProps> = (props) => {
  const { img, title, value, lastDayLosses, moreThan } = props;

  return (
    <div className={styles.lossesWidget}>
      <span className={styles.lossesWidget__img}>
        <Image className={styles.image} src={img} alt={title} layout="fill" />
      </span>
      <section>
        <div>
          <p className={styles.lossesWidget__value}>
            {moreThan && '> '}
            {value}
          </p>
          {lastDayLosses && <span>+{lastDayLosses}</span>}
        </div>
        <p>{title}</p>
      </section>
    </div>
  );
};

export default LossesWidget;
