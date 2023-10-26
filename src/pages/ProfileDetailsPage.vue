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
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { profileService } from '../services/ProfileService';
import { AppState } from '../AppState';


export default {
    setup() {

        onMounted(() => [
            getProfile()
        ]);

        const route = useRoute();

        async function getProfile() {
            try {
                const profileId = route.params.profileId;
                await profileService.getProfile(profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            profile: computed(() => AppState.profile)
        }
    }
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