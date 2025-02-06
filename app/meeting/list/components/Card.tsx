import { ReactNode } from 'react';
import Title from './Title';
import DateDisplay from './DateDisplay';

const Card = ({ children }: { children: ReactNode }) => {
  return { children };
};

Card.Title = Title;
Card.DateDisplay = DateDisplay;

export default Card;
