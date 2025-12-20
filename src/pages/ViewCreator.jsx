import { useParams } from "react-router"
import {supabase} from '../client.js'
import {useEffect,useState} from 'react'
import {Link} from "react-router"

function ViewCreator() {
  const {id}=useParams()
  const [creator,setCreator]=useState([])

  useEffect(()=>{
    const fetchCreator=async ()=>{
      const { data, error } = await supabase
                  .from('creators')
                  .select()
                  .eq('id',id)
      if(error){
        console.log(error)
        return;
      }      
      setCreator(data[0])
    }
    fetchCreator();
  },[id])

  return (
    <div>
      ViewCreator
      {
        creator &&
          <ul>
            <li>{creator.id}</li>
            <li>{creator.description}</li>
            <li>{creator.imageURL}</li>
            <li>{creator.name}</li>          
            <Link to={`/view/${creator.id}`} key={creator.id}>View</Link>
            <Link to={`/edit/${creator.id}`} key={creator.id}>Edit</Link>
            <Link to={`/delete/${creator.id}`} key={creator.id}>Delete</Link>
          </ul>
      }
    </div>
  )
}

export default ViewCreator
