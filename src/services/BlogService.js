import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        // logger.log(res.data)
        const newBlogs = res.data.map(blogs => new Blog(blogs))
        AppState.blogs = newBlogs
        logger.log(AppState.blogs)
    }

    async getBlogById(blogId) {
        AppState.activeBlog = null;
        const res = await api.get(`api/blogs/${blogId}`)
        AppState.activeBlog = new Blog(res.data)
        logger.log(AppState.activeBlog)
    }
}

export const blogService = new BlogService()
