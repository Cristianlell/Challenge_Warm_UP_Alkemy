
let postsServices = require("../services/postsService")
let messages = require("../messages/messages")
const { validationResult } = require("express-validator");

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
             if (data.data == null) {
                throw new Error()
             } else { 
                 res.status(200).json(data)
             }   
            
        } catch (error) {
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
    delete: async (req,res)=>{

        let id = req.params.id

        try {
            
            postsServices.deletePost(id)
            res.status(200).json(messages.OK)

        } catch (error) {

            console.log(error);
            res.status(400).json(messages.BAD_REQUEST)
            
        }    
    },
}