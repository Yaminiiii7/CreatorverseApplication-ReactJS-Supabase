import Card from '../components/Card'
import { Link } from 'react-router-dom'
import '../App.css'
function ShowCreators({creators}) {

  return (
    <div>
      <h1>Creator List</h1>
      {/* <Card /> */}
      <Link to='/'>
      <button>View All Creators</button>      
      </Link>
      <Link to='/add'>
      <button>Add ContentCreator</button>      
      </Link>
      
      {creators.length===0?(
        <p>No Creators yet</p>
      ):
      (
        creators &&
          creators.map((creator)=>(
            <Card key={creator.id} {...creator} />
          ))      
      )}
    </div>
  )
}

export default ShowCreators
