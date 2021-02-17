import { server } from "../../../config";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { games } from "../../../data";
const game = ({ game }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={game.title} description={game.excerpt} />
      <h1>{game.title}</h1>
      <p>{game.body}</p>
      <Image
        src={game.img}
        alt="Picture of the game"
        width={500}
        height={500}
      />
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  //const res = await fetch(`${server}/api/games/${context.params.id}`);
  //const game = await res.json();
  const game = games.find((g) => g.id === context.params.id);

  return {
    props: {
      game,
    },
  };
};

export const getStaticPaths = async () => {
  //const res = await fetch(`${server}/api/games`);

  //  const games = await res.json();

  const ids = games.map((game) => game.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default game;
