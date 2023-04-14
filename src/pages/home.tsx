import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Movies from "@/components/movies/Movies";
import ContextProvider from "@/context/ContextProvider";
import path from "path";
import * as fs from "fs";

const Home = ({ data }) => {
  return (
    <ContextProvider>
      <main className="home">
        <NavBar />
        <div className="home__main">
          <SearchBar />
          <Movies content={data} />
        </div>
      </main>
    </ContextProvider>
  );
};

export default Home;

export async function getStaticProps() {
  // Reading contents from file in public folder
  // and then pre-rendering the page with the data
  const filePath = path.join(process.cwd(), "public/data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  return {
    props: {
      data,
    },
  };
}
