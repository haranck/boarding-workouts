const Auth = (req,res,next) => {
    if(req.method === "GET"){
        console.log('get req not allowed')
        return res.send('get should block ')
    }
    next()
}
module.exports = Auth