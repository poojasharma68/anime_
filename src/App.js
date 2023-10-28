import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Anime from './Anime';
import Header from './Header';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
          <Anime/>
      </BrowserRouter>
    </div>
  );
}

export default App;
