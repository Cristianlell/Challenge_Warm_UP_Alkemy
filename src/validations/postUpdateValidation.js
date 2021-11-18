const {body} = require("express-validator");
const path = require("path");
var validUrl = require('valid-url');
  


module.exports = [

    body("image")
    .custom((value,{req}) =>{
        if (value != undefined) {
            if (validUrl.isUri(value)){
                let imagen = req.body.image;
                let ext = [".jpg",".png",".jpeg",".gif",".webp"]
        
                if(!imagen && req.method != "POST"){
    
                    throw new Error("Tienes que subir una imagen");
    
                }else{
    
                    let extencion = path.extname(imagen);
        
                  if (!ext.includes(extencion)) {
                    throw new Error(`Error: Las extensiones de archivo permitidas son
                            ${extensiones.join(", ")}`);
                  }
                  
                }
             
            } else {
                throw new Error("invalid URL");
            }        
    
        }
        
        
        return true
    }),
]