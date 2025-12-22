
import {supabase} from '../client.js'
import {useEffect,useState} from 'react'
import { useParams,useNavigate } from "react-router-dom";

function EditCreator() {
  const {id}=useParams()
  const navigate = useNavigate();
  const [formData, setFormData]=useState({
    name: "",
    description: "",
    imageURL: "",
    Youtubeurl: "",
    Instagramurl: "",
    Twitterurl: ""

  })

  useEffect(()=>{
      const fetchCreator=async ()=>{
        const {data ,error }=await supabase
              .from('creators')
              .select()
              .eq('id',id)
        if(error){
          console.log(error)
        }
        setFormData(data[0])
      }
      fetchCreator()
  },[id])

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>{
      return{
      ...prev,
      [name]:value
  }})
  }


  const handleSubmit=async (e)=>{
    e.preventDefault();
    const { error }=await supabase
              .from('creators')
              .update(formData)
              .eq('id',id)
        if(error){
          console.log(error)
        }
    // navigate home
    navigate("/", { replace: true, state: { refresh: true } });
  }

  return (
    <div>
      EditCreator
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />        
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}/>
        <label>imageURL</label>
        <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange} />
        <label> Youtube URL</label>
        <input type="text" name="Youtubeurl" value={formData.Youtubeurl} onChange={handleChange} />
        <label> Instagram URL</label>
        <input type="text" name="Instagramurl" value={formData.Instagramurl} onChange={handleChange} />
        <label> Twitter URL</label>
        <input type="text" name="Twitterurl" value={formData.Twitterurl} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditCreator
