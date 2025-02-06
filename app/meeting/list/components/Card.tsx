import { ReactNode } from 'react';
import Title from './Title';
import DateDisplay from './DateDisplay';
import TimeDisplay from './TimeDisplay';
import Like from './Like';

const Card = ({ children }: { children: ReactNode }) => {
  return { children };
};

Card.Title = Title;
Card.DateDisplay = DateDisplay;
Card.TimeDisplay = TimeDisplay;
Card.Like = Like;

export default Card;
