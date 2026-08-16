import { LiveClock } from './LiveClock';
import { SessionCounter } from './SessionCounter';

export const TopMenu = () => {
  return (
    <div>
      <LiveClock />
      <SessionCounter />
    </div>
  );
};
