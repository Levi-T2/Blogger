<template>
  <div class="container-fluid">
    <section v-for="blog in blogs" :key="blog.id"
      class="row align-items-center justify-content-center shadow blog-card m-3">
      <BlogCard :blog="blog"></BlogCard>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { blogService } from '../services/BlogService';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';
export default {
  setup() {
    async function getBlogs() {
      try {
        await blogService.getBlogs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.blog-card {
  border-radius: 8px;
  background-color: aliceblue;
  border: 2px solid black;
}
</style>
