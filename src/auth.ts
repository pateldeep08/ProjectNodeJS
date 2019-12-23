import { NextFunction } from "express";

module.exports = {
    ensureAuthenticated : function(req : any, res : any, next: NextFunction){
        if(req.isAuthenticated()){
            return next();
        }

        res.redirect('/users/login')
    }
}
