const fs=  require('fs');
const fsPromises= require('fs/promises')
// fs.readFile('./demo_files_for_practice/one.txt','utf8',(err,data)=>{
//     console.log(data);
// })
// fs.rename("./demo_files_for_practice/one.txt","intro.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("name changed succesfully");
//     }
// })

// const fileName = "./demo_files_for_practice/answer.txt";
// const edit="this is the first edit in the document"
// fs.writeFile(fileName,"hi this is the answer and with the last edit file",err=>console.log(err));
// fs.readFile(fileName,"utf8",(err,ans)=>{
//     console.log(ans);
// })

// fs.appendFile(fileName,"/this is the second edit in the answer file ",(err,ans)=>{
//     console.log(ans);
// })
// fs.readFile(fileName,"utf8",(err,ans)=>{
//     console.log(ans);
// })

// to avoid large number of callbacks we use async await


async function answer(){

    const fileName ="./demo_files_for_practice/answer.txt"
    const editText = "this it the final edit"
    try{
    const ans  = await fsPromises.readFile(fileName,"utf8");
    console.log(ans);

    const ans2 = await fsPromises.appendFile(fileName,editText);
    const ans3  = await fsPromises.readFile(fileName,"utf8");
    console.log(ans3);
        
    }catch(err){
        console.log(err);
    }

}

answer();