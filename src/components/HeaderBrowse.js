import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { Slider } from './Slider';
import { Footer } from './Footer';
import './HeaderBrowse.css';

export function HeaderBrowse() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hideTimeout = useRef(null);
  const [loading, setLoading] = useState(false);
const [loadingImage, setLoadingImage] = useState(null);


  const initialAccounts = [
    {
      name: 'Oleh',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABctYlCzOlqC1hdCkR_KU5IQx82pDkgFTrIrCcmcwE_Bnxjnbt8YdgfiASj0RhaTddAo0oIItoLHO-DXJK3teuJKhvILRhpJVVg.png?r=6a6'
    },
    {
      name: 'Ada',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXFZnMq0aIUsTd1J4Zy10TaPi4Ulx3VRyT_ZN1p9XYcE1KAon0Ndskx0e2tTr9hajESYNDSnSrbDexSXvmYSBiI8gVqOF9SORA.png?r=b39'
    },
    {
      name: 'Vira',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTIZOev-u19Mt_7c0K1XCwCzdTwmEIeOnSktsLHUugSaqg3NEdm7_UwQT61sGtccTocB8YP980t_te4iEfcglFxEHPXxO0WGPA.png?r=7c7'
    },
    {
  name :'Arina', 
  img:'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201'
  }
  ];
  const reminder=[
    {
      name:'Movie1',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaCeX9pBjFKlrduLRkRWQ4f80pitQIS-xzatRqYKCdqUD01wQb6rMOHu9JF-PaG823pVO5g3aQWIRJi3bODsagAYei3mg3Ri650xwCdtze4vRqkt1MDvrU2TFazuu9XhxayB.jpg?r=85e',
      description:'New arrival',
      date:'3 days'
    },
     {
      name:'Movie2',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe7XeJY2KMQsKSsqbma44jNQ0Ti3YZnEjfmuU9SSqwdDDoycCh8Aq_oTVLwFjK1s2DDg91O5qvFipog3A_Jkxd6l34KY47WK8kC36pMwrNGiFHatPSMoTJU9mQ4El30-IeBy.jpg?r=ada',
      description:'Coming soon',
      date:'5days'
    }, {
      name:'Movie3',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfV4GDYuGev-DTIleeym6kqjUGh4WhwLxzA0R6QcJ_SV47GmlZ9zUDB-HJ2qTAXPuIaSUZk-0yI5FTOgVPASTaw-UikycJQSsANDGpSilgcqCqC3oi1jpsrCvA_RrsJ-15sy.jpg?r=11b',
      description:'Don`t miss on ',
      date:'5 days'
    }, {
      name:'Movie4',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABceMCEN7Ib36ksOPWbDyTfLtd3eevkroezJr162K2ZDVGLlgfZLiJo0BOnGnxZrmh7Hdq5v_LBDmZ4GrRtZgl91FWc0rdrHpHluQUq1EeHwBGkKpHZKg-rJ2Cxuwg4M6DC4u.jpg?r=6d6',
      description:'New arrival',
      date:'1 week'
    }, {
      name:'Movie5',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdSKbJ5OnYLOGMTPNIs5OKQfI5Dn86XfTNaoRsSa5ZoGCkiS8EFplAXHtX_SE8gaaN1jKUbMjo1SeHfRdvwNw2ZkXrphWm6f7M38rh7wUNmi6UCiXniwuW5o3KuRZoDQ64_V.jpg?r=a16',
      description:'Now availiable',
      date:'1 week'
    }, {
      name:'Movie6',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRlhkUU82etBWmhqpfdfnl0SiXTvwHgp_PVt1t0XVcIcXFqtEiuGz6XO2lb2_FLOimewHZbk0gZ4jHtaDNEEZtWBdmaDh4xmAdOPLVv3QuPjEXafzr3Tc2veY4vbnhFJ4FB7.jpg?r=e66',
      description:'Coming soon',
      date:'2 weeks'
    },
    {
      name:'Movie7',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTxgMNIB_r74WbvP_CROouBoMH8Z_-rnA9k0Y4GZ0wch_uFN6S3ZOgfWcUtFf5kqseGG3TlurhxvO_D_r6S-0Zb3ZSTk7d4EY93PEVSjqfpacwXPFhomFM_GCgcpODoLzJzT.jpg?r=a81',
      description:'Coming soon on Netflix',
      date:'3 weeks'
    },
    {
      name:'Movie8',
      img: 'https://occ-0-7319-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABapOTiTnXdP5tCcdv_jhZglanfeCG-Ej9hxz_e2QxL43fR6KUgHDEoRTdvkNwKBreq-nzIFLEc1eI5AMj0cxxno-uJtJxnMfYrcfOZtfd34vAHsVV7Yt3xWxeQ8G1YxdASTe.jpg?r=a76',
      description:'New season coming soon',
      date:'3 weeks'
    },
  ]
const movies = [
        {
            title: "Movie 1",
            src: "sample1.jpg",
            genres: ["Action", "Adventure", "Sci-Fi"]
        },
        {
            title: "Movie 2",
            src: "sample2.jpg",
            genres: ["Drama", "Romance", "History"]
        },
        {
            title: "Movie 3",
            src: "sample3.jpg",
            genres: ["Comedy", "Family", "Fantasy"]
        },
        {
            title: "Movie 4",
            src: "sample4.jpg",
            genres: ["Horror", "Thriller", "Mystery"]
        },
        {
            title: "Movie 5",
            src: "sample5.jpg",
            genres: ["Animation", "Adventure", "Family"]
        },
        {
            title: "Movie 6",
            src: "sample6.jpg",
            genres: ["Action", "Crime", "Thriller"]
        },
        {
            title: "Movie 7",
            src: "sample7.jpg",
            genres: ["Sci-Fi", "Drama", "Mystery"]
        },
        {
            title: "Movie 8",
            src: "sample8.jpg",
            genres: ["Fantasy", "Adventure", "Action"]
        },
        {
            title: "Movie 9",
            src: "sample9.jpg",
            genres: ["Comedy", "Romance", "Drama"]
        },
        {
            title: "Movie 10",
            src: "sample10.jpg",
            genres: ["History", "Drama", "War"]
        },
        {
            title: "Movie 11",
            src: "sample11.jpg",
            genres: ["Crime", "Mystery", "Thriller"]
        },
        {
            title: "Movie 12",
            src: "sample12.jpg",
            genres: ["Adventure", "Fantasy", "Family"]
        }
      ]
  const [accounts, setAccounts] = useState(initialAccounts);
const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState('');
const [filteredMovies, setFilteredMovies] = useState([]);

const handleSearchChange = (e) => {
  const value = e.target.value;
  setSearchText(value);

  if (value.trim() === '') {
    setFilteredMovies([]);
    return;
  }

  const results = movies.filter(movie =>
    movie.title.toLowerCase().includes(value.toLowerCase()) ||
    movie.genres.some(genre => genre.toLowerCase().includes(value.toLowerCase()))
  );

  setFilteredMovies(results);
};



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showDropdown = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setDropdownOpen(true);
  };

  const hideDropdownWithDelay = () => {
    hideTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
      hideTimeout.current = null;
    }, 1000); // 1 second delay
  };

  const toggleDropdown = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setDropdownOpen((prev) => !prev);
  };

const switchProfile = (index) => {
  const selected = accounts[index];
  const newAccounts = [selected, ...accounts.filter((_, i) => i !== index)];
  setAccounts(newAccounts);
  setDropdownOpen(false);
  
  setLoadingImage(selected.img);  // Set image for animation
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setLoadingImage(null);
  }, 2000); // Duration of animation
};


  return (
    <div id='header-browse' className={scrolled ? 'scrolled' : ''}>
      <div className='browse-logo'>
        <Logo />
      </div>

      <nav className='browse-nav'>
        <NavLink to='/browse'>Home</NavLink>
        <NavLink to='/tvshows'>TV Shows</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        <NavLink to='/latest'>New & Popular</NavLink>
        <NavLink to='/my-list'>My List</NavLink>
        <NavLink to='/original-audio'>Browse by Languages</NavLink>
      </nav>

      <div className='browse-right'>
   <div className='search-container'>
  <img
    src='/search.png'
    alt='Search'
    className='browse-icon'
    onClick={() => setSearchOpen((prev) => !prev)}
  />

  <input
    type='text'
    className={`search-input ${searchOpen ? 'show' : ''}`}
    placeholder='Titles, people, genres'
    value={searchText}
    onChange={handleSearchChange}
  />
</div>


{filteredMovies.length > 0 && (
  <div className="search-results-overlay">
    
    <Slider title="Search Results" items={filteredMovies} />
    <Footer />
  </div>
)}


       
       
       <div
  className='bell-container'
  onMouseEnter={() => setDropdownOpen('bell')}
  onMouseLeave={() => setDropdownOpen(null)}
>
  <img src='/bell.png' alt='Notifications' className='browse-icon' />
<div className='profileblock' style ={{right:'7.5rem'}}></div>

  {dropdownOpen === 'bell' && (
    <div className='bell-dropdown'>
      {reminder.map((item, index) => (
  <div key={index} className='reminder-item-container'>
    <div className='reminder-item'>
      <img src={item.img} alt='' className='reminder-img' />
      <div className='reminder-item-text-container'>
        <div className='reminder-desc'>{item.description}</div>
        <div className='reminder-name'>{item.name}</div>
        <div className='reminder-date'>{item.date}</div>
      </div>
    </div>
    <hr />
  </div>
))}

    </div>
  )}
</div>


       <div
  className='browse-profile-container'
  onMouseEnter={showDropdown}
  onMouseLeave={hideDropdownWithDelay}
  onClick={toggleDropdown}
>
  <img src={accounts[0].img} className='browse-profile' alt={accounts[0].name} />
  <img src='/bottom.png' alt='Dropdown' className='browse-profile-arrow' />
  
  <div className='profileblock'></div>

  <div
    className={`profile-dropdown ${dropdownOpen ? 'show' : ''}`}
    onMouseEnter={showDropdown}
    onMouseLeave={hideDropdownWithDelay}
  >
    {accounts.slice(1).map((account, index) => (
      <div
        key={account.name}
        className='profile-item'
        onClick={() => switchProfile(index + 1)}
      >
        <img src={account.img} alt='' className='profile-pic' />
        {account.name}
      </div>
    ))}
    <hr />
    <div className='profile-item' style={{ justifyContent: 'center' }}>
      Sign out of Netflix
    </div>
  </div>
</div>

      </div>
      {loading && (
  <div className="loading-overlay">
    <div className="spinner">
      <img src={loadingImage} alt="Switching" className="spinner-icon" />
    </div>
  </div>
)}

    </div>

  );
}
