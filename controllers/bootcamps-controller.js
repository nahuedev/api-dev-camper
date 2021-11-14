const Bootcamp = require('../models/Bootcamp');

const getAll = async (req,res,next) => {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({
        succes : true,
        data:{
            bootcamps
        }
    })
}

const getById = async(req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            res.status(400).json({
                success:false
            })
            
        }
        res.status(200).json({
            succes:true,
            data:{
                bootcamp
            }
        })
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }


}

const create = async(req,res,next) => {
    //console.log(req.body)
    try {
     const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
        success:true,
        data:{
            bootcamp
        }
        })
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }

    
}

const updateById = async (req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators: true
            
        })
        if (!bootcamp) {
            return res.status(400).json({
                success:false
            })
            
        }
           res.status(200).json({
               succes:true,
               data:{
                   bootcamp
               }
           })
        
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
}

const deleteById = async (req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        console.log(bootcamp)
        if (!bootcamp) {
            return res.status(400).json({
                succes: false
            })
        }
        res.status(200).json({
            succes:true,
            data:{}
        })

    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};
