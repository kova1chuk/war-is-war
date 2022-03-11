import Image from 'next/image';

import styles from './LossesWidget.module.scss';

interface LossesWidgetProps {
  img: string;
  title: string;
  value: number;
}

const LossesWidget: React.FC<LossesWidgetProps> = (props) => {
  const { img, title, value } = props;

  return (
    <div className={styles.lossesWidget}>
      <span className={styles.lossesWidget__img}>
        <Image className={styles.image} src={img} alt={title} layout="fill" />
      </span>
      <section>
        <var>{value}</var>
        <p>{title}</p>
      </section>
    </div>
  );
};

export default LossesWidget;
