import Banner from './Banner';
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import './Home.css'
import { Slider } from './Slider';
import { getRandomMovies } from './db';

export function Home() {
  const sample = {
            src: "https://www.netflix.com/title/81389634",
            imgsmall: "https://occ-0-7966-1433.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdSKbJ5OnYLOGMTPNIs5OKQfI5Dn86XfTNaoRsSa5ZoGCkiS8EFplAXHtX_SE8gaaN1jKUbMjo1SeHfRdvwNw2ZkXrphWm6f7M38rh7wUNmi6UCiXniwuW5o3KuRZoDQ64_V.jpg?r=a16",
            imgbig: "https://occ-0-7966-1433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZtheXTreDQbsj4ajCj9XU-G5OvAGbRMPtaqCu24JpYR3iGHFkja_xmjxUa8vDg0mkRsxgH3Dxmd-3_r1TuaoeZ_jm6o4gPhENKw.webp?r=8d9",
            description: "A deadly war for dominance turns a family into targets. Now, two brothers must face countless enemies — and wounds from the past — to protect their own."
        }

  return (
    <div id='default-main'>
      <HeaderBrowse></HeaderBrowse>
      <div>
        <Banner
          backgroundImage="https://occ-0-7319-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX-atCPXF_6B5mi0hSUe6pDyKNlmDpy3U0ol7STcuZ3juQSr0q_TmIPo0QI5DkjyYGIKETbNkGgB3HLohPj6M59ByKbsxrNoppnc.webp?r=501"
          title="The Brothers Sun"
          description="Created by Byron Wu and Emmy winner Brad Falchuk, this irreverent action series follows an immigrant family with criminal ties and deadly enemies in LA."
          ageLimit="16+"
          img={sample.imgsmall} imgbig={sample.imgbig} genres={["Action", "Adventure", "Sci-Fi"]} year="2013" maturity="16+" length="5 Seasons" additional="violence, language, substances" descriptionModal={sample.description} feature={'HD'}
        />
      </div>
      <div className='slider-main-wrap'>
        <Slider items={getRandomMovies(18)} title='Drama Movies' />
        <Slider items={getRandomMovies(12)} title='Your Next Watch' />
        <Slider items={getRandomMovies(12)} title='My List' />
        <Slider items={getRandomMovies(18)} title='Award-Winning TV Shows' />
        <Slider items={getRandomMovies(12)} title='New on Netflix' />
        <Slider items={getRandomMovies(12)} title='Romantic Movies' />
        <Slider items={getRandomMovies(12)} title='Familiar TV Favorites' />
        <Slider items={getRandomMovies(12)} title='Chilling TV Shows' />
      </div>
      <Footer></Footer>
    </div>

  );

}