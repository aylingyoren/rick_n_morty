import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Character, GetCharacterResults } from "../types";
import styles from "../styles/Home.module.css";
import imageLoader from "../imageLoader";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            {character.name}
            <Image
              loader={imageLoader}
              unoptimized
              src={character.image}
              alt={character.name}
              width="200px"
              height="200px"
            />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
