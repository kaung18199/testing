import axios from "axios";

export default {
    name: 'LoginPage',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            message: false
        }
    },
    methods: {
        loginAction() {
            let data = {
                'email': this.user.email,
                'password': this.user.password
            }
            axios.post("login", data).then(response => {
                // console.log(response.data);
                if (response.data.success == true) {
                    this.$store.dispatch("setToken", response.data.result.token);
                    this.message = true;
                }
            }).catch(error => console.log(error))
        },
        goHome() {
            this.$router.push({
                name: 'home'
            })
        }
    }
}