import {supabase} from './client.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import DeleteCreator from './pages/DeleteCreator'
import {useEffect,useState} from 'react'


function App() {
  const [creators,setCreators]=useState([]);
  //const location = useLocation();

  useEffect(()=>{
    const fetchCreator=async ()=>{
      const db=await supabase
                  .from('creators')
                  .select('*')
      console.log(db)
      setCreators(db.data)

    }
    //if (location.pathname === "/" && location.state?.refresh) {
      fetchCreator();
    //}
  },[])


  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ShowCreators creators={creators}/>}/>
          <Route path="/view/:id" element={<ViewCreator/>}/>
          <Route path="/add" element={ <AddCreator/> }/>
          <Route path="/edit/:id" element={ <EditCreator/> }/>
          <Route path="/delete/:id" element={ <DeleteCreator/> }/>   
      </Routes>    
    </BrowserRouter>
      
    </div>
  )
}

export default App
