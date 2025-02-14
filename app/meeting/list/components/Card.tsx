import { ReactNode } from 'react';

import ConfirmedStatus from './ConfirmedStatus';
import DateDisplay from './DateDisplay';
import Join from './Join';
import Like from './Like';
import Participant from './Participant';
import ProgressBar from './ProgressBar';
import TimeDisplay from './TimeDisplay';
import Title from './Title';

function Card({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

Card.Title = Title;
Card.DateDisplay = DateDisplay;
Card.TimeDisplay = TimeDisplay;
Card.Like = Like;
Card.Participant = Participant;
Card.ConfirmedStatus = ConfirmedStatus;
Card.ProgressBar = ProgressBar;
Card.Join = Join;

export default Card;
