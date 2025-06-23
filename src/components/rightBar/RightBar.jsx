import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>

          {/* User 1 */}
          <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
              <span>Venu</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          {/* User 2 */}
          <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
              <span>Venu</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

        </div>

         <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
              <p>
                  <span>Venu</span> change cover picture
              </p>
            </div>
           <span>1 minute ago</span>
          </div>

           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
              <p>
                  <span>Hot Mama</span> change cover picture
              </p>
            </div>
           <span>1 minute ago</span>
          </div>

           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
              <p>
                  <span>Sugar Baby</span> change cover picture
              </p>
            </div>
           <span>1 minute ago</span>
          </div>

           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
              <p>
                  <span>Honey</span> change cover picture
              </p>
            </div>
           <span>1 minute ago</span>
          </div>

        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=20" 
                alt=""
              />
            <div className="online"/>
                  <span>Venu</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RightBar
