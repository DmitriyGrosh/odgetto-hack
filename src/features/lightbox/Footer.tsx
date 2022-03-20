import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/ui/button/Button';

interface IFooter {
  handleCLick: () => void;
  id: string;
}

const Footer: FC<IFooter> = ({ handleCLick, id }) => {
  const navigate = useNavigate();
  const mock = () => {
    handleCLick();
    navigate(`/stock/${id}`);
  };
  return (
    <div className='footer-container'>
      <Button handleClick={mock}>статистика</Button>
      <Button handleClick={handleCLick}>закрыть</Button>
    </div>
  );
};

export default Footer;