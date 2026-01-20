// import useLeaderboard from "@/hooks/useLeadBoard";
import useSSELeaderboard from "@/hooks/useSseLeadBoard";

const url = "http://localhost:8001/api/v1/events";

const DemoPage = () => {
  //const leaderboard = useLeaderboard(10);
  const leaderboard = useSSELeaderboard(url);
  const z;

  return (
    <>
      <div className="min-h-100">
        <ul>
          <li className="text-2xl">
            <span>Rank</span>
            <span className="mx-10">Id</span>
            <span className="ml-15 font-bold">Score</span>
          </li>
          {leaderboard?.map((player) => (
            <li className="text-2xl" key={player.playerId}>
              <span>{player.rank}</span>
              <span className="mx-20">{player.playerId}</span>
              <span className="ml-10 font-bold">{player.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DemoPage;
