<template>
    <div class="container-fluid">
        <section v-if="blog" class="row">
            <div class="col-12">
                <div>
                    <p>{{ blog.title }}</p>
                    <p>{{ blog.body }}</p>
                    <p>{{ blog.createdAt }}</p>
                </div>
                <div>
                    <img :src="blog.imgUrl" alt="blog image">
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { blogService } from '../services/BlogService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js';


export default {
    setup() {

        onMounted(() => {
            getBlogById()
        })

        const route = useRoute()

        async function getBlogById() {
            try {
                const blogId = route.params.blogId;
                await blogService.getBlogById(blogId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            blog: computed(() => AppState.activeBlog)
        }
    }
};
</script>


<style lang="scss" scoped></style>