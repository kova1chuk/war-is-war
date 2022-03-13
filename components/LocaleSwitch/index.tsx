import Select from 'components/Select';

// import styles from './LocaleSwitch.module.scss';

interface LocaleSwitchProps {
  changeLanguage: (value: string) => void;
}

const LocaleSwitch: React.FC<LocaleSwitchProps> = (props) => {
  const { changeLanguage } = props;

  const onSelectChange = (value: string) => {
    console.log(value);
    changeLanguage(value);
  };

  return (
    <Select
      values={[{ value: 'uk' }, { value: 'ru' }, { value: 'en' }]}
      currentValue={'uk'}
      onChange={onSelectChange}
    />
  );
};

export default LocaleSwitch;
