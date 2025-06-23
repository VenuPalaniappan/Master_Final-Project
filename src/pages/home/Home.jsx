
import { Share } from '@mui/icons-material'
import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import './home.scss'

const home = () => {
  return (
    <div className='home'>
      <Stories/>
       <Share/>
      <Posts/>
     </div>
  )
}

export default home