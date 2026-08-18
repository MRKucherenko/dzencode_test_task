import { LiveClock } from "./LiveClock";
import { SessionCounter } from "./SessionCounter";

export const TopMenu = () => {
  return (
    <div className="top-menu">
      <label htmlFor="nav-toggle" className="top-menu__burger">
        ☰
      </label>
      <LiveClock />
      <SessionCounter />
    </div>
  );
};
