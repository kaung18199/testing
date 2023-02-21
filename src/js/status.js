export default {
    name: 'StatusView',
    data() {
        return {
            key: true,
        }
    },
    methods: {
        homePage() {
            this.$router.push({
                name: 'home'
            })
        }
    },
    mounted() {
        console.log('ehsljkf');
    }
}