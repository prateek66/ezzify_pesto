// will move to common package
import express from "express";
import jwt from "jsonwebtoken";
import  User from "../database/repository/users/user.model";

interface decodedJWT {
  _id: string
}
const auth = (roles: any) => async (req:any, res: express.Response, next:express.NextFunction) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const {_id} = jwt.verify(token, 'ezzify') as decodedJWT;
    
     var user = await User.findOne({ _id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    
    if (req.user) { 
      
      if (roles.indexOf(req.user.roles) !== -1) next(); 
      
      else res.status(403).send({ message: "you are unauthorized to use this API!" }); 
      
    } else {
      
      res.status(401).send({ message: "unauthorized" });
      
    }

    //next();
  } catch (e) {
    res.status(401).send({
      success: true,
      data: null,
      message: "Please authenticate.",
      error: null,
    });
  }
};

export default auth;
