import Game from "./Game";
import GameStyles from "../styles/game.module.css";

const GameList = ({ games = [] }) => {
  return (
    <div className={GameStyles.grid}>
      {games.map((game) => (
        <Game game={game} />
      ))}
    </div>
  );
};

export default GameList;
