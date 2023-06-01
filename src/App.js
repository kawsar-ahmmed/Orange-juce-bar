import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import BlogDetailsFull from './components/BlogDetailsFull/BlogDetailsFull';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';


export const OnionContext = createContext();
export const BlogContext = createContext();

function App() {
  const [onion, setOnion] = useState(OnionContext);


  return (
    <div>
      <OnionContext.Provider value={[onion, setOnion]}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/signup' element={<Register></Register>}></Route>
          <Route path='/blog-details/:blogId' element={<BlogDetailsFull></BlogDetailsFull>}></Route>
        </Routes>
      </OnionContext.Provider>
    </div>
  );
}

export default App;
