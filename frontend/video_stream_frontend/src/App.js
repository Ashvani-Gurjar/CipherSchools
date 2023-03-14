import './App.css';
import VideoPlayer from './componects/VideoPlayer';
import {useState} from 'react';
import Commit from './Comment/Hooks';
import Counter from './count/Hooks';

function App() {
  const [videoId, setVideoId] = useState(null);
   function playVideo(e,videoId){
    e.preventDefault();
    setVideoId(videoId);
   }
  
  return (
    <> 
      <div className='alli'>
     <Commit />
     <div className="App">
     {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br/>
     <button onClick={(e)=>{playVideo(e,'ash')}}> Play Video 1 </button>
     <button onClick={(e)=>{playVideo(e,'ash1')}}> Play Video 2 </button>
     <button onClick={(e)=>{playVideo(e,'ash2')}}> Play Video 3 </button>
     </div>
      <Counter />
      </div>
     </>
  );
}

export default App;
