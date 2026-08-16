'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const SessionCounter = () => {
  const [sessionCount, setSessionCount] = useState<number>(0);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socket.on('sessionCount', (count: number) => {
      setSessionCount(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>{sessionCount}</div>;
};
