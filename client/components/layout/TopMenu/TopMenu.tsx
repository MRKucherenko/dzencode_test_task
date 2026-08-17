import { LiveClock } from './LiveClock';
import { SessionCounter } from './SessionCounter';

export const TopMenu = () => {
  return (
    <>
      <LiveClock />
      <SessionCounter />
    </>
  );
};
