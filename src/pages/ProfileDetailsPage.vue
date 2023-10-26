<template>
    <div class="container-fluid">
        <section v-if="profile" class="row">
            <div class="col-12">
                <div>
                    <img :src="profile.coverImg" alt="profile cover image" class="img-fluid">
                </div>
                <div class="text-center p-3">
                    <img :src="profile.picture" alt="profile avatar picture" class="creator-img rounded-circle">
                    <p>{{ profile.name }}</p>
                    <p>{{ profile.bio }}</p>
                </div>
            </div>
        </section>
        <section v-for="blog in blogs" :key="blog.id"
            class="row align-items-center justify-content-center shadow blog-card m-3">
            <BlogCard :blog="blog"></BlogCard>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profileService } from '../services/ProfileService';
import { AppState } from '../AppState';
import BlogCard from '../components/BlogCard.vue';



export default {
    setup() {
        onMounted(() => {
            getProfile();
            getBlogsByProfileId();
        });
        const route = useRoute();
        async function getProfile() {
            try {
                const profileId = route.params.profileId;
                await profileService.getProfile(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getBlogsByProfileId() {
            try {
                const profileId = route.params.profileId;
                await profileService.getBlogsByProfileId(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            profile: computed(() => AppState.profile),
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogCard }
};
</script>


<style lang="scss" scoped>
.creator-img {
    height: 5rem;
    width: 5rem;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
}
</style>