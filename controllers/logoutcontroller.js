const logoutcontroller=(req,res)=>{
    res.clearCookie('jwttokens',{path:'/'});
    res.status(200).send();
}
module.exports=logoutcontroller;