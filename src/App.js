import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';

export const OnionContext = createContext();

function App() {
  const [onion, setOnion] = useState(OnionContext);
  // console.log(onion)
  return (
    <div>
      <OnionContext.Provider value={[onion, setOnion]}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </OnionContext.Provider>
    </div>
  );
}

export default App;
