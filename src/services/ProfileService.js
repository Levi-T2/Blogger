import { AppState } from "../AppState"
import { Blog } from "../models/Blog";
import { Profile } from "../models/Profile";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";
class ProfileService {

    async getProfile(profileId) {
        AppState.profile = null;
        const res = await api.get(`api/profiles/${profileId}`);
        logger.log('Profile Service Getter:', res.data)
        AppState.profile = new Profile(res.data)
    }

    async getBlogsByProfileId(profileId) {
        const res = await api.get(`api/blogs?creatorId=${profileId}`);
        // logger.log(res.data)
        AppState.blogs = res.data.map((blog) => new Blog(blog))
    }

}

export const profileService = new ProfileService()