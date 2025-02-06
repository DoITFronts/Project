import { ReactNode } from 'react';
import Title from './Title';
import DateDisplay from './DateDisplay';
import TimeDisplay from './TimeDisplay';

const Card = ({ children }: { children: ReactNode }) => {
  return { children };
};

Card.Title = Title;
Card.DateDisplay = DateDisplay;
Card.TimeDisplay = TimeDisplay;

export default Card;
