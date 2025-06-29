import { HeaderBrowse } from './HeaderBrowse';
import { Footer } from "./Footer";
import { Slider } from './Slider';
import './NewPopular.css'
import { movies } from './db';

export function NewPopular() {

    return (
        <div id='default-main'>
            <HeaderBrowse />
            <div className='slider-main-wrap'>
                <Slider items={movies} title='New on Netflix' />
                <Slider items={movies} title='Coming This Week' />
                <Slider items={movies} title='Top 10 Movies in Ukraine Today' />
                <Slider items={movies} title='Coming Next Week' />
                <Slider items={movies} title='Worth the Wait' />
            </div>
            <Footer></Footer>
        </div>
    );
}