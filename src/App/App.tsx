import './App.css';
import React, { useEffect, useState } from 'react';
import firebaseHandler from '../firebase/firebaseHandler';
import Tablet from '../components/Tablet/Tablet';
import LandingPage from '../components/LandingPage/LandingPage';
const {grabData, getImgUrl, getTools} = firebaseHandler;

export interface Tool {
  title: string;
  description: string;
  url: string;
  backgroundColor: string;
}

const App = () => {
  const landingPageEnter = () => {

  }
  
const [tools, setTools] = useState([])
  const initializeApp = () => {
    const toolSet = (tools: any) => {
      let t: Tool[] = tools.data;
      //@ts-ignore
      setTools(t)
    }
    let tools = getTools();
    tools.then((tools) => {
      toolSet(tools)
    })
  }
  useEffect(() => {
    initializeApp()
  }, []);
  console.log(tools)
  return (
    <div className="App">
        <header>
          <LandingPage
          tools={tools}
          buttonPress={landingPageEnter} />
        </header>
    </div>
  );
};

export default App;
