import UsersModel from "../models/usersModel.js";
import crypto from 'crypto';
const generateApiKey = (userId, email) => {
    const randomString = crypto.randomUUID();  
    return `mern-${userId}-${email}-${randomString}`;
}
const usersController = {
    register: async (req,res)=>{
        try{
            const {email,password,userName} = req.body;
            if(!email || !password || !userName){
                res.status(400).send({
                    message: 'điền đầy đủ thông tin đăng ký'
                })
            }
            const findEmail = await UsersModel.findOne({email});
            if(findEmail){
                res.send('tài khoản đã tồn tại');
            }
            const createUser = await UsersModel.create({
                email:email,
                password:password,
                userName:userName
            })
             res.status(200).send({
                message:'create success',
                createUser
            })
        }catch(err){
             res.status(500).send({
                message: err.message,
                data:null
            })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'nhập đầy đủ email và password' });
            }

            const user = await UsersModel.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Email không tồn tại.' });
            }

            if (user.password !== password) {
                return res.status(400).json({ message: 'Mật khẩu không đúng.' });
            }

            const apiKey = generateApiKey(user._id, user.email);
          
            user.apiKey = apiKey;
            await user.save();

            return res.status(200).json({
                message: 'Đăng nhập thành công.',
                apiKey: apiKey
            });

        } catch (err) {
            return res.status(500).json({ message: 'Đã xảy ra lỗi: ' + err.message });
        }
    }
}

export default usersController;