import Image from "next/image";
import {
    IconBookmarkEmpty,
    IconBookmarkFull,
    IconPlay,
} from "@/components/Icons";
import {useContext, useState} from "react";
import Context from "@/context/Context";

/**
 * A component that renders the thumbnail part of a movie component
 * @param id - unique id for a certain show
 * @param title - title of the show
 * @param thumbnail - path to thumbnail of the show
 * @param isTrending - true if movie is trending
 * @component
 */
const MovieHero = ({
                       id,
                       title,
                       thumbnail,
                       isTrending,
                   }: {
    id: string;
    title: string;
    thumbnail: any;
    isTrending: boolean;
}) => {
    const {bookmarked, updateBookmarked}: any = useContext(Context);

    // State whether movie is bookmarked or not
    const [isBookmarked, setIsBookmarked] = useState(bookmarked.has(id));

    /**
     * Toggles the bookmark to be active or not
     */
    const toggleBookmark = () => {
        setIsBookmarked((prevState: boolean) => !prevState);

        // updating the map of bookmarks in the context
        updateBookmarked(id, title);
    };

    // unoptimized=true makes next js render full quality images

    return (
        <>
            <div className="movie-card__item-modal">
                <div className="modal-background"></div>
                <div className="movie-card__item-play">
                    <IconPlay cssClass={""}/>
                    <span className="heading--extra-small">Play</span>
                    <div className="play-background"></div>
                </div>
            </div>
            <Image
                className="movie-card__item-thumbnail"
                src={thumbnail}
                alt={title}
                width={100}
                height={100}
                unoptimized={true}
            />
            <button
                className={`movie-card__item-bookmark ${
                    isTrending ? "" : "bookmark-adjust"
                }`}
                onClick={toggleBookmark}
            >
                {isBookmarked ? (
                    <IconBookmarkFull cssClass={""}/>
                ) : (
                    <IconBookmarkEmpty cssClass={""}/>
                )}
            </button>
        </>
    );
};

export default MovieHero;
