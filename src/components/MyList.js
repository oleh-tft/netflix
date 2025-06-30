import { HeaderBrowse } from './HeaderBrowse';
import { Footer } from "./Footer";
import './MyList.css'
import { Slider } from './Slider';
import { getRandomMovies } from './db';

export function MyList() {
    return (
        <div id='default-main'>
            <HeaderBrowse></HeaderBrowse>
            <div id='mylist-title'>My List</div>
            <div>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
            </div>

            <Footer></Footer>
        </div>
    );
}