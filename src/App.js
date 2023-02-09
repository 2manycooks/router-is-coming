import { BrowserRouter, Routes, Route } from 'react-router-dom';
import House from './components/House';
import Houses from './components/Houses';
import Member from './components/Member';
import gameOfThrones from './gameOfThrones';
import './App.css';
import Header from './partial/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/houses' element={<Houses gameOfThrones={gameOfThrones}/>}/>
          <Route path='/houses/:id' element={<House gameOfThrones={gameOfThrones}/>}/>
          <Route path='/houses/:houseid/member/:memberid' element={<Member gameOfThrones={gameOfThrones}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
