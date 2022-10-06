const {readFile, writeFile} = require("fs")

writeFile('./writings/first-write.txt', `This is my first writtings`, (err, result)=>{
    if(err) {
        console.log(err)
        return
    }

    
})

writeFile('./writings/second-write.txt', `This is second writtings`, (err, result)=>{
    if(err){
        console.log(err)
        return
    }
})

readFile('./writings/first-write.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./writings/second-write.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./writings/jointed-write.txt', `This is the combination of both writings: ${first}, ${second}`,
        (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)

        })
    
    })
})