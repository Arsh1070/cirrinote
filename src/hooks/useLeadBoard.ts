// src/hooks/useLeaderboard.js
import { useEffect, useRef, useState } from "react";

import { io } from "socket.io-client";

export default function useLeaderboard(/* token */ limit = 20) {
  const [leaderboard, setLeaderboard] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // if (!token) return;

    const socket = io("http://localhost:8001/check-score", {
      path: "/socket.io",
      transports: ["websocket"],
      // auth: { token },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅Frontend: Socket connected", socket.id);

      // fetch initial leaderboard
      socket.emit("get:check-score", { limit }, (resp) => {
        if (resp.ok) setLeaderboard(resp.top);
      });
    });

    socket.on("score:update", (data) => {
      // fetch again to get fresh ordering
      fetch(`http://localhost:8001/api/v2/test/check-score`)
        .then((r) => r.json())
        .then((d) => setLeaderboard(d));
    });

    socket.on("disconnect", () => {
      console.log("❌ disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, [/* token, */ limit]);

  return leaderboard;
}
