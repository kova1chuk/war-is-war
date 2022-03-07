import { default as LossesBase } from 'components/Losses';

const lossesData = [
  {
    imgSrc: '/img/svg/Solder.svg',
    desription: 'вбитих з особового складу',
    value: 9000,
  },
  {
    imgSrc: '/img/svg/ArmoredCombatVehicles.svg',
    desription: 'бойових броньованих машин',
    value: 900,
  },
  {
    imgSrc: '/img/svg/Aircraft.svg',
    desription: 'літаків',
    value: 30,
  },
  {
    imgSrc: '/img/svg/Artillery.svg',
    desription: 'артилерійські системи',
    value: 90,
  },
  {
    imgSrc: '/img/svg/Helicopter.svg',
    desription: 'гелікоптер',
    value: 31,
  },
  {
    imgSrc: '/img/svg/Tank.svg',
    desription: 'танків',
    value: 217,
  },
  {
    imgSrc: '/img/svg/ZrkBuk.svg',
    desription: 'ЗРК БУК',
    value: 1,
  },
  {
    imgSrc: '/img/svg/Cistern.svg',
    desription: 'цистерн',
    value: 60,
  },
  {
    imgSrc: '/img/svg/Mlrs.svg',
    desription: 'РСЗВ',
    value: 42,
  },
  {
    imgSrc: '/img/svg/Drone.svg',
    desription: 'БпЛА ОТР',
    value: 3,
  },
  {
    imgSrc: '/img/svg/Automobile.svg',
    desription: 'одиниці автомобільної техніки',
    value: 37,
  },
  {
    imgSrc: '/img/svg/Ship.svg',
    desription: 'кораблів, катерів',
    value: 2,
  },
  {
    imgSrc: '/img/svg/AirDefens.svg',
    desription: 'засоби ППО',
    value: 11,
  },
];

const Losses: React.FC = () => {
  return <LossesBase lossesData={lossesData} />;
};

export default Losses;
