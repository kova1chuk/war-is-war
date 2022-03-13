import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from './Select.module.scss';

interface SelectValue {
  value: string;
}

interface SelectProps {
  values: Array<SelectValue>;
  currentValue: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = (props) => {
  const { values, currentValue, onChange } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  const [currentSelect, setCurrentSelect] = useState<SelectValue>({
    value: currentValue,
  });

  const changeCurrentSelect = (value: SelectValue) => {
    setCurrentSelect(value);
  };

  useEffect(() => {
    onChange(currentSelect.value);
  }, [currentSelect.value, onChange]);

  return (
    <OutsideClickHandler onOutsideClick={() => setExpanded(false)}>
      <div className={styles.select}>
        <div
          className={styles.select__current}
          onClick={() => setExpanded(!expanded)}
        >
          {currentSelect.value}
        </div>
        {expanded && (
          <section>
            {values.map((item: SelectValue, index: number) => (
              <div
                key={index}
                className={styles.select__value}
                onClick={() => changeCurrentSelect(item)}
              >
                {item.value}
              </div>
            ))}
          </section>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default Select;
