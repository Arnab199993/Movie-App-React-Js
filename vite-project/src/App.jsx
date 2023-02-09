import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieComponent from './Components/MovieComponent'
import axios from 'axios'
import MlList from './Components/MlList'
import Info from './Components/Info'
const API_KEY = "d737904a"
function App() {

  const [count, setCount] = useState(0)
  const [timeoutId, updateTimeoutId] = useState();
  const [search, setsearch] = useState()
  const [movielist, setmovielist] = useState([])
  const [selectedmovie, setselectedmovie] = useState()


  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    console.log(response)
    setmovielist(response.data.Search)

  };
  const change = (event) => {
    clearTimeout(timeoutId);
    setsearch(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  }

  return (
    <div className="App" >
      <div className='div'>

        <input style={{ boxSizing: "border-box", width: "800px", height: "44px", marginLeft: "24px", marginTop: "24px", background: "#rgba(255, 255, 255, 0.06)", border: "1px solid rgba(0, 0, 0, 0.26)", borderRadius: "5px" }} onChange={change} type={"text"} className={"text"} placeholder={"Search Movie"} value={search}></input>
        <button style={{ marginLeft: "20px", padding: "10px" }} className='btn'>Button</button>
      </div>
      {
        selectedmovie && <Info selectedmovie={selectedmovie} />

      }

      {
        movielist.map((movie, i) => <MovieComponent key={i} movie={movie} setselectedmovie={setselectedmovie} />)
      }
      <MlList />
      <Info />
    </div>
  )
}

export default App





