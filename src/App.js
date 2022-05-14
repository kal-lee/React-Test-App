import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Loading from './components/loading';
  

function App() {
  
  const NewList = Loading(List);
  const [appState, setAppState] = useState({
    loading: false,
    info: "",
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "products.json";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((item) => {
        console.log(item);
        setAppState({ loading: false, info: item.vouchers });
      });
  }, []);

  

  return (
    <div className="text-white text-center overflow-hidden" style={{backgroundColor: "#0F3460"}}>
      <div className='text-5xl sm:text-4xl text-center'>
        <h1 className='p-5 pb-0 pt-20 font-extrabold text-6xl sm:text-8xl'>Vouchers</h1>
   
     
      </div>
      <div className=''>
        <NewList isLoading={appState.loading} info={appState.info} />
      </div>
    </div>
  );
}

export default App;
