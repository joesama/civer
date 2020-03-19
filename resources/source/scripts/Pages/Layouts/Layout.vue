<template>
    <div class="h-screen w-screen">
        <banner v-show="$page.nav.banner !== undefined" />
        <navigation />
        <page-content>
            <slot/>
        </page-content>
    </div>
</template>
<script>
import Navigation from "./Navigation";
import Banner from "./Banner";
import PageContent from "./Content"

export default {
    components: {
        Navigation,
        Banner,
        PageContent
    },
    props: {},
    data: function() {
        return {};
    },
    methods: {}
};
</script>
