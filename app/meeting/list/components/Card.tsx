import { ReactNode } from 'react';
import Title from './Title';

const Card = ({ children }: { children: ReactNode }) => {
  return { children };
};

Card.Title = Title;
export default Card;
