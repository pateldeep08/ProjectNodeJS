import { NextFunction } from "express";
import { request } from "http";

module.exports = function (req:any, res:any, next:NextFunction){

    if(req.session.flash){
        res.locals.flash = req.session.flash
        req.session.flash = undefined
    }
    res.flash = function(type:any, content:any){
        if (req.session.flash===undefined){
            req.session.flash = {}
        }

        req.session.flash[type] = content  

    }

    next()
}