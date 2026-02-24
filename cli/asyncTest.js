const wait =(time , cb)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        cb()
        resolve()
    },time)
    })
}


wait(1000,()=>console.log('1s')).then(()=>{
    console.log('1s')
})