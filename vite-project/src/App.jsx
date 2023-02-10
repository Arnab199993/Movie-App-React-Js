import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieComponent from './Components/MovieComponent'
import axios from 'axios'
import MlList from './Components/MlList'
import Info from "./Components/Info"

const API_KEY = "d737904a"
function App() {

  const [count, setCount] = useState(0)
  const [timeoutId, updateTimeoutId] = useState();
  const [search, setsearch] = useState()
  const [movielist, setmovielist] = useState([])
  const [select, onMovieselect] = useState()

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

        <input style={{ padding: "10px", boxSizing: "border-box", width: "800px", height: "44px", marginLeft: "350px", marginTop: "24px", background: "#rgba(255, 255, 255, 0.06)", border: "1px solid rgba(0, 0, 0, 0.26)", borderRadius: "5px" }} onChange={change} type={"text"} className={"text"} placeholder={"Search Movie"} value={search}></input>

      </div>

      <div className='movielistcontainer'>
        {
          movielist?.length ? movielist.map((movie, i) => (<MovieComponent key={i} movie={movie} />)) : <div style={{ color: "white", textAlign: "center" }}>"No Movie Search"</div>
        }
      </div>
      <MlList onMovieselect={onMovieselect} />
      {select}
    </div>
  )
}

export default App





