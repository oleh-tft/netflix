import Banner from './Banner';
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import './Home.css'

export function Home() {
    return (
        <div>
            <HeaderBrowse></HeaderBrowse>
        <div>
      <Banner
        backgroundImage="https://occ-0-7319-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX-atCPXF_6B5mi0hSUe6pDyKNlmDpy3U0ol7STcuZ3juQSr0q_TmIPo0QI5DkjyYGIKETbNkGgB3HLohPj6M59ByKbsxrNoppnc.webp?r=501" 
        title="The Brothers Sun"
        description="Created by Byron Wu and Emmy winner Brad Falchuk, this irreverent action series follows an immigrant family with criminal ties and deadly enemies in LA."
        ageLimit="16+"
        year ="2023"
      />
    </div>
    <Footer></Footer>
        </div>

    );

}