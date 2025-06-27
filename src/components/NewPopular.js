import { HeaderBrowse } from './HeaderBrowse';
import { Footer } from "./Footer";
import { Slider } from './Slider';
import './NewPopular.css'

export function NewPopular() {
    const movies = [
        {
            title: "Movie 1",
            src: "sample1.jpg",
            genres: ["Action", "Adventure", "Sci-Fi"]
        },
        {
            title: "Movie 2",
            src: "sample2.jpg",
            genres: ["Drama", "Romance", "History"]
        },
        {
            title: "Movie 3",
            src: "sample3.jpg",
            genres: ["Comedy", "Family", "Fantasy"]
        },
        {
            title: "Movie 4",
            src: "sample4.jpg",
            genres: ["Horror", "Thriller", "Mystery"]
        },
        {
            title: "Movie 5",
            src: "sample5.jpg",
            genres: ["Animation", "Adventure", "Family"]
        },
        {
            title: "Movie 6",
            src: "sample6.jpg",
            genres: ["Action", "Crime", "Thriller"]
        },
        {
            title: "Movie 7",
            src: "sample7.jpg",
            genres: ["Sci-Fi", "Drama", "Mystery"]
        },
        {
            title: "Movie 8",
            src: "sample8.jpg",
            genres: ["Fantasy", "Adventure", "Action"]
        },
        {
            title: "Movie 9",
            src: "sample9.jpg",
            genres: ["Comedy", "Romance", "Drama"]
        },
        {
            title: "Movie 10",
            src: "sample10.jpg",
            genres: ["History", "Drama", "War"]
        },
        {
            title: "Movie 11",
            src: "sample11.jpg",
            genres: ["Crime", "Mystery", "Thriller"]
        },
        {
            title: "Movie 12",
            src: "sample12.jpg",
            genres: ["Adventure", "Fantasy", "Family"]
        }
    ];

    return (
        <div id='default-main'>
            <HeaderBrowse />
            <Slider items={movies} title='New on Netflix' />
            <Slider items={movies} title='Coming This Week' />
            <Slider items={movies} title='Top 10 Movies in Ukraine Today' />
            <Slider items={movies} title='Coming Next Week' />
            <Slider items={movies} title='Worth the Wait' />
            <Footer></Footer>
        </div>
    );
}