<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-3">
        <button class="btn btn-outline-dark" type="button" title="Create House" data-bs-toggle="modal"
          data-bs-target="#blogFormModal">
          <i class="mdi mdi-plus"></i>
        </button>
      </div>
    </section>
    <section v-for="blog in blogs" :key="blog.id"
      class="row align-items-center justify-content-center shadow blog-card m-3">
      <BlogCard :blog="blog"></BlogCard>
    </section>
  </div>

  <BlogForm></BlogForm>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { blogService } from '../services/BlogService';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';
import BlogForm from '../components/BlogForm.vue';
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
  components: { BlogCard, BlogForm }
}
</script>

<style scoped lang="scss"></style>
