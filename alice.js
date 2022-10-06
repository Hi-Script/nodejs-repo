const {writeFile, readFile} = require("fs")

writeFile('./vio/index.txt', 'Hello this is index file page', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
})

writeFile('./vio/style.txt', 'and this is the section of styling', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result
})

readFile('./vio/index.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const index = result
    readFile('./vio/style.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const style = result

        writeFile('./writings/index-style.txt', `This is combination of index and style: ${index}, ${style}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

 