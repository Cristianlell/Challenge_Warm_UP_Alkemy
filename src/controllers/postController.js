
let postsServices = require("../services/postsService")
let messages = require("../messages/messages")
const { validationResult } = require("express-validator");
let fetch = require('node-fetch')
// 200 OK	
// 201 CREATED
// 204 NO CONTENT
// 400 BAD REQUEST	
// 401 UNAUTHORIZED	
// 403 FORBIDDEN	
// 404 NOT FOUND	
// 405 METHOD NOT ALLOWED	
// 406 NOT ACCEPTABLE	
// 409 CONFLICT	
// 415 UNSUPPORTED MEDIA TYPE	
// 500 INTERNAL SERVER ERRO

module.exports={
    list:async (req,res)=>{
        try {
            
            let post = await postsServices.getPostAll();
            
            let data = {
                messages : messages.OK,
                data: await post
            }
            res.status(200).json(data)

        } catch (error) {
            res.status(500).json(messages.INTERNAL_SERVER_ERROR)            
            
        }
    },
    detail: async (req,res)=>{
        let id = req.params.id;
        try {

            let post = postsServices.getPostById(id);
         
            let data = {
                messages : messages.OK,
                data: await post
            }
             res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.status(400).json(messages.BAD_REQUEST)            
        }
    },
    create: async (req,res)=>{
        let errores = validationResult(req);
       
      if (errores.isEmpty()) {
          
        let body = {
            ...req.body,
            create_date: new Date
        }
        try {
           await postsServices.createPost(body)
            res.status(201).json(messages.CREATED)
        } catch (error) {
            console.log(error)
            res.status(500).json(messages.INTERNAL_SERVER_ERROR)
        }
      } else {
          console.log(errores.mapped());
        res.status(400).json(messages.BAD_REQUEST)
      }
        
    },
    update: async (req,res)=>{
            let id = req.params.id
           
            let errores = validationResult(req);
       
            if (errores.isEmpty()) {
                
                try {
                    await postsServices.updatePost(id,req.body)
                    res.status(200).json(messages.OK)

                } catch (error) {
                    console.log(error)
                    res.status(400).json(messages.BAD_REQUEST)
                }
                
        }else{
            console.log(errores.mapped());
            res.status(400).json(messages.BAD_REQUEST)
          
        }


    },
    // delete: async (req,res)=>{
        
    // },
}