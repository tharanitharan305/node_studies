const wait =(time , cb)=>{
    setTimeout(()=>{
        cb()
    },time)
}


wait(1000,()=>{
    wait(1000,()=>{
        wait(1000,()=>{
            console.log('done')
        })       
    })
})