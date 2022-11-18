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
        imageLink(path){
          return this.$imageUrl+path
        },
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
        _createFilterParams(filters,old_params=true){
          let params = "";
          for (const item in filters){
              // if(filters[item])
                  if(filters[item]!=null){
                      params = params + '&' + item + '=' + filters[item]
                  }
          }
          if (old_params) return params;
          else return params.substring(1)

      },
      _createParams(params,old_params) {
        let param = "";
        let sortby
        let sorttype
        // let sortby = params.sortBy[0];
        // let sorttype = params.sortDesc[0];
        if (params.sortBy && params.sortBy[0]) sortby = params.sortBy[0];
        if (params.sortDesc && params.sortDesc[0]) sorttype = params.sortDesc[0];
        let page = params.page;
        let perpage = params.itemsPerPage;

        param += `page=${page}&per_page=${perpage}`;
        if (sortby) {
            param += `&sortBy=${sortby}/${sorttype ? "asc" : "desc"}`;
        }
        if (old_params) param+=`&${old_params}`
        return param;
    },
    }
})
