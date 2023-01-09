const {spawn}=require('child_process')
let child = spawn('find',['cd','-type','f'])
child.stdout.on('data',(data,err)=>{
    console.log(`child stdout:\n${data}`);
    console.log(`child stdout:\n${err}`);
})
child.stdout.on('data',data=>{
    console.error(`child stdout:\n${data}`);
})
child.stdout.on('exit',function(code,signal){
    console.log(`data is process with ${code},and signal ${signal}`);
})