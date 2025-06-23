
import { useContext } from 'react'
import { AuthContext} from "../../context/authContext"
import './posts.scss' 
import Post from '../post/Post';


const Posts =() => {
    const {currentUser}=useContext(AuthContext)
    
//Temporary
const stories=[
{
    id: 1,
    name: "Venu",
    userId:1,
    profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
    desc:"Hello JustClick Worlds, lets begin to rock the world",
    img: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=800",
},
{
    id: 2,
    name: "Venu",
    userId:2,
    profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
    desc:"Hello JustClick Worlds, lets begin to rock the world",
    img: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
    id: 3,
    name: "Venu",
    userId:3,
    profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
    desc:"Hello JustClick Worlds, lets begin to rock the world",
    img: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=800"
}

]


return (
  <div className="posts">
    {stories.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);
}
export default Posts