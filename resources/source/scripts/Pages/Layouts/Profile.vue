<template>
    <div class="relative hidden sm:flex items-center">
        <div class="civer-gold font-hairline">{{ $page.nav.user.name }}</div>
        <button @click="isOpen = !isOpen" >
        <div
            class="mx-2 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none hover:border-white focus:border-white"
        >
            <img
                class="h-full w-full object-cover"
                :src="image"
                :alt="$page.nav.user.name"
            />
        </div>
        </button>
        <div :class="isOpen ? 'block' : 'hidden'" >
            <profile-link v-bind="getTextLink()"></profile-link>
        </div>
    </div>
</template>

<script>
import Avatar from "./../../../../../public/images/avatar.svg";
import ProfileLink from "./../Links/TextLink"

export default {
    components: {
        ProfileLink
    },
    props: {},
    data() {
        return {
            image: Avatar,
            isOpen: false,
        };
    },
    methods: {
        getTextLink: function() {
            return {
                stylus: {
                    container: "absolute top-0 right-0  list-reset flex-1 items-center mt-12 w-48 border-2 border-t-4 border-gold",
                    li: "py-2 px-2 bg-civer-blue"
                },
                nav: this.getProfileNavigation()
            };
        },
        getProfileNavigation: function() {
            return [
                {
                    desc: "Logout",
                    href: "entree",
                    method: "Register",
                }
            ];
        }

    }
};
</script>
