import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

const Home = () => {
    return (
        <main className="home">
            <NavBar/>
            <div className="home__main">
                <SearchBar/>
                <div className="movies">
                    <div className="movies__trending">
                        <div className="trend-movies">

                        </div>
                    </div>
                    <div className="movies__container">
                        <div className="movies__list"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
