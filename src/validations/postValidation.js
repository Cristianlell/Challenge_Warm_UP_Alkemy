const {body} = require("express-validator");
const path = require("path");
var validUrl = require('valid-url');
  


module.exports = [

    body("image")
    .custom((value,{req}) =>{
        
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

        
        return true
    }),

    body("title")
    .notEmpty().withMessage("Requerido").bail()
    .isLength({min:2,max : 255}).withMessage("Mínimo 2 maximo 255"),

    body("category_id")
    .notEmpty().withMessage("Requerido").bail()
    .isInt().withMessage("Debe ser un Número del 1 al 3"),

    body("content")
    .notEmpty().withMessage("Requerido").bail()
    .isLength({min:50,max : 500}).withMessage("Mínimo 50 maximo 500"),

]