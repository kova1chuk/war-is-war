import moment from 'moment';

import styles from './LossesHeader.module.scss';

interface LossesHeaderProps {
  title: string;
  dateTitle: string;
  date: Date;
}

const LossesHeader: React.FC<LossesHeaderProps> = (props) => {
  const { title, dateTitle, date } = props;

  return (
    <div className={styles.lossesHeader}>
      <h1>{title}</h1>
      <p>
        {dateTitle} {moment(date).format('DD.MM.YYYY')}
      </p>
    </div>
  );
};

export default LossesHeader;
