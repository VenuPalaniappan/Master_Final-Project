
import { useContext } from 'react'
import { AuthContext} from "../../context/authContext"
import './stories.scss' 


const Stories =() => {
    const {currentUser}=useContext(AuthContext)
    
//Temporary
const stories=[
{
    id: 1,
    name: "Venu",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
},
{
    id: 2,
    name: "Venu",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
},
{
    id: 3,
    name: "Venu",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
},
{
    id: 4,
    name: "Venu",
    img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
},


]


return (
<div className="stories">
    <div className="story">
        <img src={currentUser.profilePic} alt=""/>
        <span>{currentUser.name}</span>
        <button>+</button>
        </div>

    {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt=""/>
            <span>{story.name}</span>
        </div>
    ))}

    </div>
    
)
    
}

export default Stories