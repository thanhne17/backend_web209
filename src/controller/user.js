const User = require('../models/user');

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            return res.status(400).json({
                message: "Không tìm thấy user"
            })
        }

        req.profile = user;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error);
    }
}