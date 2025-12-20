// This component should contain the content creator's 
// information (name, url, description, and imageURL (optional)) 
// so it can be displayed on the main page. 
import {Link} from "react-router-dom"

function Card(props) {
  console.log("showcreators")
  console.log(props)

  return (
    <div>
      {
        props && (
          <ul>
          
            <li>{props.name}</li>
            <li>{props.url}</li>
            <li>{props.description}</li>
            <li>{props.imageURL}</li>
          <Link to={`/view/${props.id}`} key={props.id}>View</Link>
          <Link to={`/edit/${props.id}`} key={props.id}>Edit</Link>
          <Link to={`/delete/${props.id}`} key={props.id}>Delete</Link>
          </ul>
        )        
      }      
    </div>
  )
}

export default Card
