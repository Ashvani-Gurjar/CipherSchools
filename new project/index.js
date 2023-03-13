const express =  require('express')
const app = express();
const fs = require('fs');


const videoFileMap = {
      'ash'  :  'videos/ash.mp4',
      'ash1' : 'videos/ash1.mp4',
      'ash2' : 'videos/ash2.mp4',
}

app.get("/videos/:filename", async(req,res)=>{
     const fileName = req.params.filename;
     const filePath = videoFileMap[fileName];
     if(!filePath){
       return res.status(404).send('That file not found');
     }
     const stat = fs.statSync(filePath);
     const fileSize = stat.size;
     const range = req.headers.range;
     if(range){
          const parts = range.replace(/bytes=/,"").split('-');
          const start = parseInt(parts[0],10);
          const end = parts[1] ? parseInt(parts[1],10) : fileSize -1;
          const chunksize = end - start +1;
          const file = await fs.createReadStream(filePath,{start,end});
          const head = {
               'Content-Range' : `bytes ${start}-${end}/${fileSize}`,
               'Accept-Ranges' : 'bytes',
               'Content-Length' : chunksize,
               'Content-Type' :  'video/mp4'
          };
           res.writeHead(206,head);
           file.pipe(res); 
          }
           else{
               const head = {
                     'Content-Length' : fileSize,
                     'Content-Type' : 'video/mp4'
               }
                res.writeHead(200,head);
                fs.createReadStream(filePath).pipe(res);
           }
})

app.listen(3000,()=>{
     console.log("the server is lisstion in http://localhost:3000");
})