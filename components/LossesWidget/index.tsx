import Image from 'next/image';

import styles from './LossesWidget.module.scss';

interface LossesWidgetProps {
  imgSrc: string;
  desription: string;
  value: number;
}

const LossesWidget: React.FC<LossesWidgetProps> = (props) => {
  const { imgSrc, desription, value } = props;

  return (
    <div className={styles.lossesWidget}>
      <span className={styles.lossesWidget__img}>
        <Image
          className={styles.image}
          src={imgSrc}
          alt={desription}
          layout="fill"
        />
      </span>
      <section>
        <var>{value}</var>
        <p>{desription}</p>
      </section>
    </div>
  );
};

export default LossesWidget;
