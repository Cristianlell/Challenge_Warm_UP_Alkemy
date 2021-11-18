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

    body("title")
    .custom((value,{req}) =>{
        if (value) {
            if (value.length <= 2) {
                throw new Error("Mínimo 2 maximo 255");
            }
      
        }
        return true
    }),

    body("category_id")
    .custom((value,{req}) =>{
        if (value) {
            console.log(value);
            let category_id = parseInt(value)
            if (category_id !== 1 || category_id !== 2 || category_id !== 3) {
                throw new Error("Debe ser un Número del 1 al 3");
            }
        }
        return true
    }),

    body("content")
    .custom((value,{req}) =>{
        if (value) {
            if (value.length() <= 50) {
                throw new Error("Mínimo 50 maximo 500");
            }
      
        }
        return true
    })

]