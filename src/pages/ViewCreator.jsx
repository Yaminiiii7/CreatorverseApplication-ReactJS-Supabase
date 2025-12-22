import { useParams, Link } from "react-router-dom"
import { supabase } from '../client.js'
import { useEffect, useState } from 'react'
import { FaTrash, FaEdit, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

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
      setCreator(data?.[0] ?? null)
    }
    fetchCreator();
  },[id])
  
  return (
    <div>

      {creator ? (
        <ul>

          {creator.description}
          <img src={creator.imageURL} alt={creator.name || "creator image"} height="200" width="200"/>
          {creator.name}
          
            <a href={creator.Youtubeurl} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          
          
            <a href={creator.Instagramurl} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          
          
            <a href={creator.Twitterurl} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          
          
            <Link to={`/edit/${creator.id}`}><FaEdit/></Link>
            <Link to={`/delete/${creator.id}`}><FaTrash/></Link>
          
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ViewCreator
