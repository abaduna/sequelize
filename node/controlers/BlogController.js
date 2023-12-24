import blogModel  from "../models/BlogModel.js";


/*
metodos para CRUD
*/ 
//mostrar todos los registros
export const getAllBlogs=async(req,res)=>{
    try {
     const blogs = await blogModel.findAll()
     res.json(blogs)
    } catch (error) {
        res.json({ message:error.message})
    }
}
//mostrar un registro
export const getBlog = async(req,res)=>{
    try {
       const blog = blogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog)
    } catch (error) {
        res.json({ message:error.message})
    }
}
//crear un registro
export const createBlog =async(req,res)=>{
    try {
      await  blogModel.create(req.body)
      res.json({
        "message": "menssaje creado correctamente"
      })
    } catch (error) {
        res.json({ message:error.message})
    }
}
//update a register 
export const upDateBlog = async(req,res)=>{
    try {
       await blogModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message": "registro actualizado   correctamente"
          })
    } catch (error) {
        res.json({ message:error.message})
    }
}
//deleted a register
export const deletedBlog = async (req,res)=>{
    try {
        await blogModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message": "eliminado corectamente"
          })
    } catch (error) {
        res.json({ message:error.message})
    }
}