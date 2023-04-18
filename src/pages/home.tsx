import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Movies from "@/components/movies/Movies";
import ContextProvider from "@/context/ContextProvider";
import path from "path";
import * as fs from "fs";
import { contentType } from "@/utilities/types";

/**
 * Page component that renders the home page
 * @param data - preloaded data of shows
 * @constructor
 */
const Home = ({ data }: { data: contentType }) => {
  // Providing the context to all child components
  return (
    <ContextProvider>
      <main className="home" role="main">
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
  const filePath = path.join(process.cwd(), "src/data/data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  return {
    props: {
      data,
    },
  };
}
