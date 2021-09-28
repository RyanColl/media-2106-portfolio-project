import './App.css';
import React, { useEffect, useState } from 'react';
import firebaseHandler from '../firebase/firebaseHandler';
import Tools from '../components/Tools/Tools';
import NavBar from '../components/NavBar/NavBar';
import '../components/Tooltips/Tooltips.css'
import { Switch, Route } from 'react-router-dom';
import {setBackground} from '../Services/FrontEndServices'
import { toolArray } from '../Services/Data';
const App = () => {
  const [tools, setTools] = useState([])
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [load, setLoad] = useState(false)
  const initializeApp = () => {
    //@ts-ignore
    setTools([...toolArray])
    console.log(window.location.pathname.substring(1))
    setBackgroundUrl(setBackground(window.location.pathname.substring(1)))
  }
  // parralax
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
  // components did mount
  useEffect(() => {
    initializeApp();
  }, []);
  // backround setting as per page
  const setBackgroundToPage = (pageName: string) => {
    setBackgroundUrl(setBackground(pageName))
  }
  // setting height of body div
  const height = window.innerHeight;
  return (
    <div className='body' style={{height}}>
      <nav>
        <NavBar bgChange={setBackgroundToPage} />
      </nav>
      <div className="App" style={{backgroundImage: `url(./img/${backgroundUrl})`, transform: `translateY(${offset* -0.3}px)` }}>
          <Switch>
            <Route path='/' exact>

            </Route>
            <Route path='/Apps'>

            </Route>
            <Route path='/Tools'>
              <Tools
              tools={tools}
              load={load} />
            </Route>
            <Route path='/About'>

            </Route>
          </Switch>
      </div>
    </div>
  );
};

export default App;
