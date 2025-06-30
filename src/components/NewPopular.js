import { HeaderBrowse } from './HeaderBrowse';
import { Footer } from "./Footer";
import { Slider } from './Slider';
import './NewPopular.css'
import { getRandomMovies } from './db';

export function NewPopular() {

    return (
        <div id='default-main'>
            <HeaderBrowse />
            <div className='slider-main-wrap'>
                <Slider items={getRandomMovies(18)} title='New on Netflix' />
                <Slider items={getRandomMovies(18)} title='Coming This Week' />
                <Slider items={getRandomMovies(18)} title='Top 10 Movies in Ukraine Today' />
                <Slider items={getRandomMovies(18)} title='Coming Next Week' />
                <Slider items={getRandomMovies(18)} title='Worth the Wait' />
            </div>
            <Footer></Footer>
        </div>
    );
}