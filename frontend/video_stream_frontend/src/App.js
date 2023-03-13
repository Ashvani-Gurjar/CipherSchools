import './App.css';
import VideoPlayer from './componects/VideoPlayer';

import {useState} from 'react';
   
function App() {
  const [videoId, setVideoId] = useState(null);
 
   function playVideo(e,videoId){
    e.preventDefault();
    setVideoId(videoId);
   }
  
  return (
     <div className="App">
     {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br/>
     <button onClick={(e)=>{playVideo(e,'ash')}}>Play Video 1</button>
     <button onClick={(e)=>{playVideo(e,'ash1')}}>Play Video 2</button>
     <button onClick={(e)=>{playVideo(e,'ash2')}}>Play Video 3</button>
     </div>
  );
}

export default App;
