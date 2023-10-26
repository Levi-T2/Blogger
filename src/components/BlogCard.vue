<template>
    <div class="col-6 g-2 p-2 text-center">
        <RouterLink :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
            <img :src="blog.creator.picture" alt="avatar" class="creator-img rounded-circle">
            <p>{{ blog.creator.name }}</p>
        </RouterLink>
        <p class="fs-4">{{ blog.title }}</p>
        <RouterLink :to="{ name: 'Blog', params: { blogId: blog.id } }">
            <p role="button" class="bg-dark rounded-pill">Open Blog</p>
        </RouterLink>
    </div>
    <div class="col-6 g-2 p-2 text-center">
        <img :src="blog.imgUrl" alt="blog image" class="blog-img">
    </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import { Blog } from '../models/Blog';


export default {
    props: {
        blog: { type: Blog, required: true }
    },
    setup() {
        return {};
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.blog-img {
    height: 12rem;
    width: 12rem;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
}

.creator-img {
    height: 5rem;
    width: 5rem;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
}
</style>