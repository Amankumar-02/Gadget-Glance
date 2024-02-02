import { useEffect, useState } from 'react';
import './App.css'
import { Header, Footer } from './components';

function App() {
  let [fetchData, setFetchData] = useState({});
  useEffect(()=>{
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch("https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage");
        const data = await res.json();
        setFetchData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromAPI();
  }, [])
  return (
    <>
    <Header />
    cds
    <Footer />
    </>
  )
}

export default App
