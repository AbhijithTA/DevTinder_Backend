const adminAuth = (req, res, next) => {
  console.log("Admin auth middleware is checked");
  const token = "xyzasdf";
  if (!token) {
    res.status(404).send("You are not logged in");
  }
  const tokenAuthenticated = token === "xyz";
  if (!tokenAuthenticated) {
    res.status(401).send("You are not authenticated");
  } else {
    next();
  }
};

const userAuth = (req,res,next) =>{
    console.log("User auth middleware is checked");
    const token = "xyza";
    if(!token){
        res.status(404).send("You are not logged in");
    }
    const tokenAuthenticated = token === "xyz"
    if(!tokenAuthenticated){
        res.status(401).send("You are not authenticated");
    }
    else{
        next();
    }
}

module.exports = {adminAuth,userAuth};
