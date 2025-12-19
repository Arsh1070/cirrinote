import { useEffect, useRef, useState } from "react";

export default function useSSELeaderboard(url) {
  const [leaderboard, setLeaderboard] = useState([]);
  const esRef = useRef(null);

  useEffect(() => {
    const fullUrl = url;
    const es = new EventSource(fullUrl, { withCredentials: false });
    esRef.current = es;

    es.addEventListener("init", (e) => {
      try {
        setLeaderboard(JSON.parse(e.data));
      } catch (err) {
        console.log(err);
      }
    });

    es.onmessage = (e) => {
      // message will contain JSON-encoded text (we broadcast stringified JSON)
      try {
        const parsed = JSON.parse(e.data);
        // If we used wrapper { type, payload }:
        if (parsed.type === "snapshot") {
          setLeaderboard(parsed.payload);
        } else if (parsed.type === "update") {
          // if payload is a partial update (playerId, score) we can merge locally:
          // fetch snapshot or merge+resort; here for simplicity, we fetch snapshot
          fetch("http://localhost:8001/api/v2/test/check-score")
            .then((r) => r.json())
            .then((d) => {
              setLeaderboard(d);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // fallback: assume e.data is whole snapshot
          setLeaderboard(parsed);
        }
      } catch (err) {
        // fallback: plain array
        try {
          setLeaderboard(JSON.parse(e.data));
        } catch (err) {
          console.log(err);
        }
      }
    };

    es.onerror = (err) => {
      console.error("SSE error", err);
      // browser will auto-reconnect EventSource. On error, don't close immediately.
    };

    return () => {
      es.close();
    };
  }, [url]);

  return leaderboard;
}
