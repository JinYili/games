import Link from "next/link";
import Image from "next/image";
import GameStyles from "../styles/game.module.css";

const Game = ({ game }) => {
  return (
    <Link href={`/game/${game.id}`}>
      <a className={GameStyles.card}>
        <h3>{game.title} &rarr;</h3>
        <Image
          src={game.img}
          alt="Picture of the game"
          width={500}
          height={500}
        />
      </a>
    </Link>
  );
};

export default Game;
