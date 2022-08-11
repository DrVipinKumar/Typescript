interface info{
    msg1:string,
    msg2:string,
    totalmsg:number
}
const displayMsg=(msg:info, key:keyof info)=>{
        console.log(`Value of key ${key} is ${msg[key]}`)
}
const infoValue:info ={
    msg1:"This is message 1",
    msg2:"This is message 2",
    totalmsg:2
}
displayMsg(infoValue,"msg2")