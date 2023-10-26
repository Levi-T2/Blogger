<template>
    <div class="modal fade" id="blogFormModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createBlog()">
                        <div class="mb-3">
                            <label for="blogTitle" class="form-label">Blog Title</label>
                            <input v-model="editable.title" type="text" class="form-control" id="blogTitle"
                                name="blogTitle">
                        </div>
                        <div class="mb-3">
                            <label for="blogBody" class="form-label">Blog Body</label>
                            <input v-model="editable.body" type="text" class="form-control" id="blogBody" name="blogBody">
                        </div>
                        <div class="mb-3">
                            <label for="blogImg" class="form-label">Blog Image</label>
                            <input v-model="editable.imgUrl" type="url" class="form-control" id="blogImg" name="blogImg">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Blog</button>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { blogService } from '../services/BlogService';
import { Modal } from 'bootstrap';


export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            async createBlog() {
                try {
                    const blogData = editable.value
                    await blogService.createBlog(blogData)
                    Modal.getOrCreateInstance('#blogFormModal').hide()
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>