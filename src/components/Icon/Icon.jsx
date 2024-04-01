import icons from '../../assets/images/icons/sprite.svg';

const Icon = ({ className, id }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
