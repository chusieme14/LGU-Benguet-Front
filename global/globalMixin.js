import Vue from 'vue'
Vue.mixin({
    methods: {
        // getIds(items) {
        //     return items.map((item) => {
        //             return item.id;
        //         })
        //         .join(",");
        // },
        // successNotification(items = [], action = '', suffixSingular = '', suffixPlural = '', key = '') {
        //     if (items.length > 1) {
        //         this.$awn.success(`Successfully ${action} <strong>${items.length}</strong> ${suffixPlural}`)
        //     } else {
        //         let selectedItem = items.constructor === Array ? items[0] : items
        //         this.$awn.success(`Successfully ${action} ${suffixSingular} <strong>${selectedItem[key]}</strong>.`)
        //     }
        // },
        // successNotification2(items = [], action = '', suffixSingular = '', suffixPlural = '') {
        //     this.$awn.success(`Successfully ${action} ${suffixSingular}`)
        // },
        // errorNotification(error) {
        //     this.$awn.alert(`Failed: ${error}`)
        // },
        // fullNotification(message) {
        //     this.$awn.success(`${message}`)
        // },
        goTo(name, params = {}) {
            this.$router.push({ name: name, params: params })
        },
        cloneVariable(value) {
            if (typeof value != 'object') return
            return JSON.parse(JSON.stringify(value))
        },
        isEmpty(obj) {
            return Object.keys(obj).length === 0;
        },
        download(data, payload) {

            const url = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', payload.file_name);
            document.body.appendChild(link);

            link.click();
        },
    }
})
