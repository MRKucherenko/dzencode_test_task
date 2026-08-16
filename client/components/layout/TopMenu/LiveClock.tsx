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
    <div>
      <time>{currentTime.toLocaleDateString()}</time>
      <time>{currentTime.toLocaleTimeString()}</time>
    </div>
  );
};
