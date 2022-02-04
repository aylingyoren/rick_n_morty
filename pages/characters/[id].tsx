import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import imageLoader from "../../imageLoader";
import { Character } from "../../types";

function CharacterPage({ character }: { character: Character }) {
  const router = useRouter();
  return (
    <div style={{ padding: "32px" }}>
      <h2>Character Page</h2>
      <h4>{character.name}</h4>
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200px"
        height="200px"
      />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <button
        style={{ display: "block", padding: "5px", marginTop: "7px" }}
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
