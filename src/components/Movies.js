import Banner from './Banner';
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import './Movies.css'
import { Slider } from './Slider';
import { getRandomMovies } from './db';

export function Movies() {
    const sample = {
            src: "https://www.netflix.com/title/80223050",
            imgsmall: "https://occ-0-7966-1433.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbEnY0B1xhZZthPI9LnzD0Ls_9KSg9STIPfDlyShvIr4ttmtS6ZqQtH1kMBplP9GzxlCx9VrCBnSbwRK4a97CiTJLRbigcRKGjrIt34-YxKEWWvtzrRKJbmwZUE2el0nFpXP.jpg?r=96d",
            imgbig: "https://occ-0-7966-1433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW9gkCyIsITYY1T1BLDbNL9Y8KY6jILyxUfMA8m35SpYJ4GedytBnwehY2bS1x8foOe09QTqxrAgDxMz9dLbqSknCX2Rwv6CbtF-.webp?r=e3a",
            description: "When his abducted brother returns seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the kidnapping."
        }

    return (
        <div id='default-main'>
            <HeaderBrowse></HeaderBrowse>
            <div>
                <Banner
                    backgroundImage="https://occ-0-7319-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeUp1ZkTGUJMG8nyn9Hj_QXrV7VUjkl5ZBq8mgmJ-ut_FnIHpbhjeqQRcTUTlcGLGVaJop1Cl_SoMkqQEfKmTNZGw-Tn4R09vHjQ.webp?r=c00"
                    title="Forgotten"
                    description="When his abducted brother returns seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the kidnapping."
                    ageLimit="16+"
                    img={sample.imgsmall} imgbig={sample.imgbig} genres={["Action", "Adventure", "Sci-Fi"]} year="2013" maturity="16+" length="5 Seasons" additional="violence, language, substances" descriptionModal={sample.description} feature={'HD'}
                />
            </div>
            <div className='slider-main-wrap'>
                <Slider items={getRandomMovies(18)} title='Comedy Movies' />
                <Slider items={getRandomMovies(18)} title='Award-Winning Movies' />
                <Slider items={getRandomMovies(12)} title='Critically Acclaimed Movies' />
                <Slider items={getRandomMovies(12)} title='Adventure Movies' />
                <Slider items={getRandomMovies(12)} title='New on Netflix' />
            </div>
            <Footer></Footer>
        </div>
    );
}