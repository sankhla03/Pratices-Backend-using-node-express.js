const fs = require('fs')
const fsPromises = require('fs').promises


const fileOps = async () => {
  try{
    await fsPromises.rename('./file System/info.txt', './file System/temp.txt','temp Rename successfully');
   
    const data = await fsPromises.readFile('./file System/temp.txt', 'utf8');
    console.log(data);
    await fsPromises.writeFile('./file System/newPromise.txt', data);
    await fsPromises.appendFile('./file System/newPromise.txt', '\n\n it is respond file');
    await fsPromises.rename('./file System/newPromise.txt', './file System/Info.txt','Rename successfully');
   

    const newData = await fsPromises.readFile('./file System/Info.txt', 'utf8');
    console.log(newData);
    await fsPromises.unlink('./file System/reply.txt');
  }
  catch(err){
    console.error(err)
  }
}
fileOps()

// fs.readFile('./file System/temp.txt', (err, data) =>{
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.readFile('./file System/temp.txt', 'utf8', (err, data) =>{
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile('./file System/reply.txt','it is respond file', (err) =>{
//   if (err) throw err;
//   console.log('write complete');
// });

// fs.appendFile('./file System/Example.txt','\n\n it is respond file', (err) =>{
//   if (err) throw err;
//   console.log('write complete');
// });