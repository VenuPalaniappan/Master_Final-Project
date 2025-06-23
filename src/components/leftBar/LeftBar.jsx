import './leftBar.scss'
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Video from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fundraiser from "../../assets/11.png";
import Tutorials from "../../assets/12.png";
import Courses from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from 'react';



const LeftBar = () => {
   const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
           <img 
           src={currentUser.profilePic}
           alt=""
           />
                <span>{currentUser.name}</span>
            </div>
                  <div className="friends">
                  <img src={Friends} alt='Friends'/>
                  <span>Friends</span>
            </div>
                    <div className="groups">
                    <img src={Groups} alt='Groups'/>
                    <span>Groups</span>
            </div>         
                      <div className="marketplace">
                      <img src={Marketplace} alt='Marketplace'/>
                      <span>Marketplace</span>
            </div>
                    <div className="watch">
                   <img src={Watch} alt='Watch'/>
                    <span>Watch</span>
            </div>
                    <div className="memories">
                    <img src={Memories} alt='Memories'/>
                    <span>Memories</span>
                    
        </div>

      </div>
      <hr/>
      <div className="menu">
        <span>Your Shortcut</span>
        <div className="Events">
                  <img src={Events} alt='Events'/>
                  <span>Events</span>
            </div>
                    <div className="Gaming">
                    <img src={Gaming} alt='Gaming'/>
                    <span>Gaming</span>
            </div>         
                      <div className="Gallery">
                      <img src={Gallery} alt='Gallery'/>
                      <span>Gallery</span>
            </div>
                    <div className="Video">
                   <img src={Video} alt='Video'/>
                    <span>Video</span>
            </div>
                    <div className="Messages">
                    <img src={Messages} alt='Messages'/>
                    <span>Messages</span>
             </div>  
          </div>
          <hr/>
        <div className="menu">
        <span>Others</span>
        <div className="Fundraiser">
                  <img src={Fundraiser} alt='Fundraiser'/>
                  <span>Fundraiser</span>
            </div>
                    <div className="Tutorials">
                    <img src={Tutorials} alt='Tutorials'/>
                    <span>Tutorials</span>
            </div>         
                      <div className="Courses">
                      <img src={Courses} alt='Courses'/>
                      <span>Courses</span>
            </div>
          </div>
        </div>
    </div>
   
  );

}

export default LeftBar;