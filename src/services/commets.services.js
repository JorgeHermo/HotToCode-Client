import axios from "axios"

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${proces.env.REACT_APP_API_URL}/commets`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createComment(commentData) {
        return this.api.post(`/create/${post_id}`, commentData)
    }

    getComment(post_id) {
        return this.api.get(`/${post_id}`)
    }

    editComment(comment_id) {
        return this.api.put(`/edit/${comment_id}`)
    }

    deleteComment(comment_id) {
        return this.api.delete(`delete/${comment_id}`)
    }
}

const commentService = new CommentService()

export default commentService