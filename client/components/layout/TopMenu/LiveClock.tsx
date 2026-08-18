"use client";

import { useEffect, useState } from "react";

export const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-menu__clock">
      <time className="top-menu__date">{currentTime.toLocaleDateString()}</time>
      <time className="top-menu__time">{currentTime.toLocaleTimeString()}</time>
    </div>
  );
};
