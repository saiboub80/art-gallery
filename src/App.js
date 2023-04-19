import { useState , useEffect} from "react"
import ButtonBar from "./components/ButtonBar"
import Frame from "./components/Frame"

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(res => res.json())
    .then(resData => setData(resData))
}, [artId])
// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}
const displayImage=() =>{
  if(!data.primaryImage){
    return(
      <h2>No Image!</h2>
    )
  }
  return(
    <Frame objectImg={data.primaryImage} title={data.title}/>
  )
}

return ( 
  <div className="App">
    <h1>{data.title}</h1>
    <div style={{'width': '100%',}}>
      {displayImage()}
    </div>
    <ButtonBar handleIterate={handleIterate}/>
  </div>
  )
}

export default App;
