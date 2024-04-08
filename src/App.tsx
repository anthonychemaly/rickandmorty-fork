import "./App.css";
import { useGetCharacters } from "./_hooks";
import ProfileCard from "./components/common/ProfileCard";

function App() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetCharacters();
  if (isLoading || isError)
    return (
      <main
        role="main"
        className="container grid min-h-svh place-content-center"
      >
        <p
          className={`text-center ${isLoading ? "animate-bounce" : "text-red-600"}`}
        >
          {isLoading ? "Loading..." : "Something went wrong..."}
        </p>
      </main>
    );
  return (
    <main role="main" className="container">
      <ul className="grid grid-cols-5 gap-6">
        {data?.pages.flatMap((item) => {
          return item.results.map((character) => {
            return (
              <li key={`homepage_character_${character.id}`}>
                <ProfileCard character={character} />
              </li>
            );
          });
        })}
      </ul>
      {hasNextPage && (
        <button type="button" onClick={() => fetchNextPage()}>
          Fetch
        </button>
      )}
    </main>
  );
}

export default App;
