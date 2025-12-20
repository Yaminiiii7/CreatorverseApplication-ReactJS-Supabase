import { useParams } from "react-router-dom";
import {supabase} from '../client.js'
import { useNavigate } from "react-router-dom";



function DeleteCreator() {
  const {id}=useParams()
  const navigate = useNavigate();

  const handleDelete=async ()=>{
      const { error } = await supabase
                  .from('creators')
                  .delete()
                  .eq('id',id)
      if(error){
        console.log(error)
        return;
      } 
      navigate("/", { replace: true, state: { refresh: true } });     
    }
    const handleNo=()=>{
      // navigate home
      navigate("/", { replace: true, state: { refresh: true } });
    }



  return (
    <div>
      <p>Are you sure you want to delete the creator??</p>
      <button type='submit' onClick={handleDelete}>Yes</button>
      <button type='submit' onClick={handleNo}>No</button>
    </div>
  )
}

export default DeleteCreator
