let db = require("../database/models/")

module.exports={
    getPostAll: async (order = "create_date",style="DESC")=>{
        try {
            
            let posts = await db.Post.findAll({
                attributes:["id","title","image","create_date"],
                include:{ association: "category", attributes: ["id", "name"] },
                order:[
                    [order != "create_date"? order : "create_date",style.toUpperCase() != "ASC" ? "DESC": "ASC"]
                ],
                
            })
            return posts
        } catch (error) {
            throw new Error(error)
        }
        
    },
    getPostById: async (id)=>{

        try {
        
            let posts = await db.Post.findByPk(+id,{
                include:{ association: "category", attributes: ["id", "name"] }
            })
            return posts
        } catch (error) {
            throw new Error(error)
        }
        
    },
    createPost: async (body)=>{
        if (body.imagen == null) {
            imagen = "https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=20";
        }

        try {

            await db.Post.create({
                ...body,
            })
        } catch (error) {
            throw Error(error)
        }
        
    },
    updatePost: async (id,body)=>{

        try {
            
            await db.Post.update(
                {
                    ...body,
                },
                {
                    where:{
                        id:+id
                    }
                }
                
            )
            
        } catch (error) {
            throw Error(error)
        }
        
    },
    deletePost: async (id)=>{
        try {
            
            await db.Post.destroy({
                where: { id: +id },
            })

        } catch (error) {
            throw Error(error)
        }
        
    },
    
}