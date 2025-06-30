import Banner from './Banner';
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import './TVShows.css'
import { Slider } from './Slider';
import { getRandomMovies } from './db';

export function TVShows() {
    const sample = {
            src: "https://www.netflix.com/title/70234440",
            imgsmall: "https://occ-0-7966-1433.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWFpr3hU_h6WGxmNp0IdAJyxgnhU3ATYwhU0BGvip7l-I_xjaw_HPO7EOeNrpEMraNblXyh6Bb8s5uZ-CviypFhmtGxWRPgrifY.webp?r=716",
            imgbig: "https://occ-0-7966-1433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRv5WXk9Sgi96qHlD52Q3gHrw9Q50jWEmb6xdOgJZnrI14VgA9BGb1aAGhVRMhOlhaRrpxZVF4l2eUeQpZ5Kgu9EOUWTIP4-RuSw.webp?r=700",
            description: "Bronies and pegasisters, unite! Filled with enchanting characters and heartfelt lessons, Lauren Faust's animated series inspires fans of all kinds."
        }

    return (
        <div id='default-main'>
            <HeaderBrowse></HeaderBrowse>
            <div>
                <Banner
                    backgroundImage="https://occ-0-7319-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYSLAD580dzUMcQstXVMUnfhM_DzufoXAjAqohKhB6qgfI2WoO0k5s4OWP-x6QhlwB3wEngEfGzmZiTyo7w4lvQA2Gej9dD_5tRH.webp?r=eaa"
                    title="My little pony"
                    description="Follow Twilight Sparkle and her pony pals in this series The A.V. Club callsFollow Twilight Sparkle and her pony pals in this series The A.V. Club calls relentlessly cute, relentlessly happy, and relentlessly entertaining."
                    ageLimit="All"
                    img={sample.imgsmall} imgbig={sample.imgbig} genres={["Action", "Adventure", "Sci-Fi"]} year="2013" maturity="16+" length="5 Seasons" additional="violence, language, substances" descriptionModal={sample.description} feature={'HD'}
                />
            </div>
            <div className='slider-main-wrap'>
                <Slider items={getRandomMovies(18)} title='Award-Winning TV Shows' />
                <Slider items={getRandomMovies(18)} title='Get In on the Action' />
                <Slider items={getRandomMovies(12)} title='My List' />
                <Slider items={getRandomMovies(12)} title='Limited Series' />
                <Slider items={getRandomMovies(12)} title='TV Comedies' />
                <Slider items={getRandomMovies(12)} title='Crowd Pleasers' />
            </div>
            <Footer></Footer>
        </div>
    );
}