import './Browse.css'
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import { Slider } from './Slider';
import { getRandomMovies } from './db';

export function Browse() {
    return (
        <div id='default-main'>
            <HeaderBrowse></HeaderBrowse>
            <div id='mylist-title'>Browse by Languages</div>
            <div>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
                <Slider items={getRandomMovies(6)}/>
            </div>

            <Footer></Footer>
        </div>
    );
}