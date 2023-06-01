import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import BlogDetailsFull from './components/BlogDetailsFull/BlogDetailsFull';
import Ngb from './components/Ngb/Ngb';

export const OnionContext = createContext();
export const BlogContext = createContext();

function App() {
  const [onion, setOnion] = useState(OnionContext);
  const [blogs, setBlogs] = useState(OnionContext);

  return (
    <div>
      <OnionContext.Provider value={[onion, setOnion]}>
        <BlogContext.Provider value={[blogs, setBlogs]}>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/ngb' element={<Ngb></Ngb>}></Route>
            <Route path='/blog-details/:blogId' element={<BlogDetailsFull></BlogDetailsFull>}></Route>
          </Routes>
        </BlogContext.Provider>
      </OnionContext.Provider>
    </div>
  );
}

export default App;
