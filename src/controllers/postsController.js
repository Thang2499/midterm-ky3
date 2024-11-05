import PostsModel from "../models/postsModel.js";

const postsController = {
    createPost: async (req, res) => {
        try {
            const { content } = req.body;

            if (!content) {
                return res.status(400).json({ message: 'bài viết không được để trống' });
            }

            const newPost = await PostsModel.create({
                userId: req.user._id,
                content: content
            });

            return res.status(201).json({
                message: 'thành công',
                data: newPost
            });
        } catch (err) {
            return res.status(500).json({ message: 'lỗi khi tạo bài viết' });
        }
    },
    updatePost: async (req, res) => {
        try {
            const postId = req.params.id;
            const { content } = req.body;

            if (!content) {
                return res.status(400).json({ message: 'nội dung cập nhật không được để trống' });
            }

            const post = await PostsModel.findById(postId);
            if (!post) {
                return res.status(404).json({ message: 'không tìm thấy bài viết' });
            }

            if (post.userId.toString() !== req.user._id.toString()) {
                return res.status(403).json({ message: 'không có quyền cập nhật bài viết này' });
            }

            post.content = content;
            post.updatedAt = Date.now();
            const updatedPost = await post.save();

            return res.status(200).json({
                message: 'cập nhật thành công',
                data: updatedPost
            });
        } catch (err) {
            return res.status(500).json({ message: 'lỗi cập nhật' });
        }
    }
}
export default postsController;