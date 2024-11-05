import UsersModel from "../models/usersModel.js";

const checkMiddleware = {
    // checkLogin : async (req, res, next) => {
    //     const apiKey = req.header('Authorization');
    
    //     if (!apiKey) {
    //         return res.status(401).json({ message: 'không tìm thấy apiKey' });
    //     }
    //     try {
    //         const user = await UsersModel.findOne({ apiKey });
    //         if (!user) {
    //             return res.status(401).json({ message: 'apiKey không hợp lệ' });
    //         }
    
    //         req.user = user;
    //         next();
    //     } catch (err) {
    //         res.status(500).json({ message: 'lỗi' });
    //     }
    // },
    checkCreatePost: async (req, res, next) => {
        const apiKey = req.query.apiKey;
    
        if (!apiKey) {
            return res.status(401).json({ message: 'thiếu apiKey' });
        }
    
        try {
            const user = await UsersModel.findOne({ apiKey });
            if (!user) {
                return res.status(401).json({ message: 'apiKey không hợp lệ' });
            }
    
            req.user = user;
            next();
        } catch (err) {
            res.status(500).json({ message: 'lỗi khi xác thực apiKey' });
        }
    },
    checkUpdatePosts: async (req, res, next) => {
        const apiKey = req.query.apiKey;
    
        if (!apiKey) {
            return res.status(401).json({ message: 'thiếu apiKey trong yêu cầu' });
        }
    
        try {
            const user = await UsersModel.findOne({ apiKey });
            if (!user) {
                return res.status(401).json({ message: 'apiKey không hợp lệ' });
            }
            req.user = user;
            next();
        } catch (err) {
            res.status(500).json({ message: ' lỗi khi xác thực apiKey' });
        }
    }
    
}


export default checkMiddleware;
