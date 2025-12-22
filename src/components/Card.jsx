// This component should contain the content creator's 
// information (name, url, description, and imageURL (optional)) 
// so it can be displayed on the main page. 
import {Link} from "react-router-dom"
import { FaInfoCircle, FaEdit, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import '../App.css'
      
function Card(props) {
  console.log("showcreators")
  console.log(props)

  return (
    <div className='cards'>
      {
        props && (
          <div className="card" style={{ backgroundImage: `url(${props.imageURL})` }}>

          <div className="topRow">
            <h2 className='title'>{props.name}</h2>
              <div className="actions">
                <Link to={`/view/${props.id}`} key={props.id}><FaInfoCircle /></Link>
                <Link to={`/edit/${props.id}`} key={props.id}><FaEdit/></Link>
              </div>
            </div>
            <div className='icons'>
                    <a href={props.Youtubeurl} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href={props.Instagramurl} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>                  
                    <a href={props.Twitterurl} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
            <p className="desc">{props.description}</p>              
          </div>
        )        
      }      
    </div>
  )
}

export default Card
