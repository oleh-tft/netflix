import Banner from './Banner';
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import './TVShows.css'

export function TVShows() {
     return (
        <div>
            <HeaderBrowse></HeaderBrowse>
        <div>
      <Banner
        backgroundImage="https://occ-0-7319-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYSLAD580dzUMcQstXVMUnfhM_DzufoXAjAqohKhB6qgfI2WoO0k5s4OWP-x6QhlwB3wEngEfGzmZiTyo7w4lvQA2Gej9dD_5tRH.webp?r=eaa" 
        title="My little pony"
        description="Follow Twilight Sparkle and her pony pals in this series The A.V. Club callsFollow Twilight Sparkle and her pony pals in this series The A.V. Club calls relentlessly cute, relentlessly happy, and relentlessly entertaining."
        ageLimit="All"
      />
    </div>
    <Footer></Footer>
        </div>
    );
}