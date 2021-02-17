import { server } from "../config";
import GameList from "../components/GameList";

export default function Home({ games }) {
  return (
    <div>
      <GameList games={games} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/games`);
  const games = await res.json();

  return {
    props: {
      games,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
