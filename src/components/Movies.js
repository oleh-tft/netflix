import Banner from './Banner';
import { Footer } from "./Footer";
import { HeaderBrowse } from './HeaderBrowse';
import './Movies.css'

export function Movies() {
    return (
        <div>
            <HeaderBrowse></HeaderBrowse>
            <div>
                <Banner
                    backgroundImage="https://occ-0-7319-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeUp1ZkTGUJMG8nyn9Hj_QXrV7VUjkl5ZBq8mgmJ-ut_FnIHpbhjeqQRcTUTlcGLGVaJop1Cl_SoMkqQEfKmTNZGw-Tn4R09vHjQ.webp?r=c00"
                    title="Forgotten"
                    description="When his abducted brother returns seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the kidnapping."
                    ageLimit="16+"
                />

            </div>
            <Footer></Footer>
        </div>
    );
}