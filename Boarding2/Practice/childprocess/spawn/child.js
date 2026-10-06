let sum = 0

for(let i = 1;i<1e9;i++){
    sum+=i
}
process.stdout.write(`Sum: ${sum}`) 

process.stdin.on("data",(data)=>{
    let arr = JSON.parse(data)
    let sum  = arr.reduce((acc,curr)=>acc+curr,0)
    console.log(`${sum}`)
})