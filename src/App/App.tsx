import './App.css';
import React, { useEffect, useState } from 'react';
import firebaseHandler from '../firebase/firebaseHandler';
import LandingPage from '../components/LandingPage/LandingPage';
import NavBar from '../components/NavBar/NavBar';
import '../components/Tooltips/Tooltips.css'
const {grabData, getImgUrl, getTools, getTime} = firebaseHandler;

export interface Tool {
  title: string;
  description: string;
  url: string;
  backgroundColor: string;
  sideColor: string;
}

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

const App = () => {
  const landingPageEnter = () => {

  }
  
const [tools, setTools] = useState([])
const [url, setUrl] = useState('river')
const [load, setLoad] = useState(true)
  const initializeApp = () => {
    const toolSet = (tools: any) => {
      let t: Tool[] = tools.data;
      //@ts-ignore
      setTools(t)
      setLoad(false)
    }
    let tools = getTools();
    tools.then((tools) => {
      toolSet(tools)
    })
  }

  // parralax
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);



  // components did mount
  useEffect(() => {
    setBackground().then(url => {
      setUrl(url)
    })
    initializeApp();
  }, []);
  return (
    <body>
      <nav>
        <NavBar />
      </nav>
      <div className="App" style={{backgroundImage: `url(./img/${url}.jpeg)`, transform: `translateY(${offset* -0.2}px)` }}>
          <header style={{paddingTop: 1200}}>
            
            <LandingPage
            tools={tools}
            load={load}
            buttonPress={landingPageEnter} />

          </header>
          <main>

          </main>
          <footer>

          </footer>
      </div>
    </body>
  );
};

export default App;
