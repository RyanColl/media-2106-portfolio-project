import './App.css';
import React, { useEffect, useState } from 'react';
import firebaseHandler from '../firebase/firebaseHandler';
import Tools from '../components/Tools/Tools';
import NavBar from '../components/NavBar/NavBar';
import '../components/Tooltips/Tooltips.css'
import { Switch, Route } from 'react-router-dom';
const {grabData, getImgUrl, getTools, getTime} = firebaseHandler;

export interface Tool {
  title: string;
  description: string;
  url: string;
  backgroundColor: string;
  sideColor: string;
}

// set backgorund based on time
const setBackground = async () => {
    let time: string = (await getTime()).data
    let index = time.search(':')
    let hour = parseInt(time.substr(0, index))
    console.log(`heres our time: ${time}, our index: ${index}, and our hour: ${hour}`)
    switch(hour % 3) {
      case 0: return 'lake'
      case 1: return 'river'
      case 2: return 'deer'
      case 3: return 'sky'
      default: return 'river'
    }
    
}

const toolArray: Tool[] = [
  {
    title: 'HTML',
    description: 'Expert at DOM manipulation through both native javascript and React',
    url: 'https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/html-white.png?alt=media&token=7c8f9e89-bcbc-4ee6-b1c3-2dcb7b744ebe',
    backgroundColor: '#119FFA',
    sideColor: '#B54E62'
  },
  {
    title: 'React',
    description: 'Proficient in the production of web apps using the language React',
    url: 'https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/react-white.png?alt=media&token=d395d16d-7bed-4da6-8e1e-a81cb794f06d',
    backgroundColor: '#5B5658',
    sideColor: '#3AADBE'
  },
  {
    title: 'TypeScript',
    description: 'Learned the foundations of typescript. Class based object oriented javascript programming',
    url: 'https://firebasestorage.googleapis.com/v0/b/fullstack-dev-f9c5a.appspot.com/o/typescript.png?alt=media&token=36a74ac8-d284-4fd0-a470-65d320b3b853',
    backgroundColor: '#ffb703',
    sideColor: '#3C4084'
  }
]

const App = () => {
  
const [tools, setTools] = useState([])
const [url, setUrl] = useState('river')
const [load, setLoad] = useState(false)
  const initializeApp = () => {
    //@ts-ignore
    setTools([...toolArray])
    setBackground().then(url => {
      setUrl(url)
    })
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
  return (
    <div className='body'>
      <nav>
        <NavBar />
      </nav>
      <div className="App" style={{backgroundImage: `url(./img/${url}.jpeg)`, transform: `translateY(${offset* -0.3}px)` }}>
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
