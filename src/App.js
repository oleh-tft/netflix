import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Landing } from './components/Landing';
import { Error } from './components/Error';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { TVShows } from './components/TVShows';
import { Movies } from './components/Movies';
import { NewPopular } from './components/NewPopular';
import { MyList } from './components/MyList';
import { Browse } from './components/Browse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='login' element={<Login/>} />
        <Route path='browse' element={<Home/>} />
        <Route path='tvshows' element={<TVShows/>} />
        <Route path='movies' element={<Movies/>} />
        <Route path='latest' element={<NewPopular/>} />
        <Route path='my-list' element={<MyList/>} />
        <Route path='original-audio' element={<Browse/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
