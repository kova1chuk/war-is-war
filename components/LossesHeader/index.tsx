import moment from 'moment';

import styles from './LossesHeader.module.scss';

interface LossesHeaderProps {
  date: Date;
}

const LossesHeader: React.FC<LossesHeaderProps> = (props) => {
  const { date } = props;

  return (
    <div className={styles.lossesHeader}>
      <h1>
        ВТРАТИ РОСІЙСЬКИХ
        <br />
        ОКУПАЦІЙНИХ СИЛ В УКРАЇНІ
      </h1>
      <p>Станом на {moment(date).format('DD.MM.YYYY')}</p>
    </div>
  );
};

export default LossesHeader;
