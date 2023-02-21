import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: 'HomeView',
    data() {
        return {
            name: '',
            dmessage: false,
            message: false,
            data: {},
            editData: {
                name: ''
            },
            id: ''
        }
    },
    computed: {
        ...mapGetters(["storageToken"]),
    },
    methods: {
        goStatus() {
            this.$router.push({
                name: 'status',
            })
        },
        goLogin() {
            this.$router.push({
                name: 'loginPage'
            })
        },
        getData() {
            axios.get("jobs", {
                headers: {
                    Authorization: 'Bearer' + ' ' + this.storageToken,
                    "Content-Type": 'application/json'
                }
            }).then(response => {
                this.data = response.data.result.data
            })
        },
        create() {
            let data = {
                name: this.name
            }
            axios.post("jobs", data, {
                headers: {
                    Authorization: 'Bearer' + ' ' + this.storageToken,
                }
            }).then(response => {
                if (response.data.success == true) {
                    this.getData();
                    this.message = true;
                    this.name = ''
                }
            }).catch(error => console.log(error))
        },
        edit(id) {
            this.id = id
            axios.get("jobs/" + this.id, {
                headers: {
                    Authorization: 'Bearer' + ' ' + this.storageToken,
                }
            }).then(response => {
                this.editData = response.data.result;
            })
        },
        deleteAction(id) {
            this.id = id
            axios.delete("jobs/" + this.id, {
                headers: {
                    Authorization: 'Bearer' + ' ' + this.storageToken,
                }
            }).then(response => {
                console.log(response.data.success);
                if (response.data.success == true) {
                    this.dmessage = true
                }
                this.getData();

            }).catch(error => console.log(error))
        },
        update(id) {
            this.id = id;
            let data = {
                name: this.editData.name
            }
            axios.put("jobs/" + this.id, data, {
                headers: {
                    Authorization: 'Bearer' + ' ' + this.storageToken,
                }
            }).then(response => {
                console.log(response.data);
                this.getData();
            }).catch(error => console.log(error))
        }
    },
    mounted() {
        console.log(this.storageToken);
        this.getData();
    }
}