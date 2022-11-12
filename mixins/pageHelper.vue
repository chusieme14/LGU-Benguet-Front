<script>
import moment from "moment";
moment.locale('en');
export default {
    data() {
        return {
            active_route: "/",
            footerPages: {
                "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100,-1],
            },
            selected: [],
            statuses: [
                {value:0,text:'closed'},
                {value:1,text:'available'},
                {value:2,text:'reserved'},
            ],
            weeks: [
                {
                    id:1,
                    name:'monday'
                },
                {
                    id:2,
                    name:'tuesday'
                },
                {
                    id:3,
                    name:'wednesday'
                },
                {
                    id:4,
                    name:'thursday'
                },
                {
                    id:5,
                    name:'friday'
                },
                {
                    id:6,
                    name:'saturday'
                },
                {
                    id:0,
                    name:'sunday'
                },
            ],
            // colors: [
            //     {
            //         name:'#7B7B7B',
            //         value:'#7B7B7B',
            //     },
            //     {
            //         name:'#BD9D56',
            //         value:'#BD9D56',
            //     },
            //     {
            //         name:'#D52323',
            //         value:'#D52323',
            //     },
            //     {
            //         name:'#000000',
            //         value:'#000000',
            //     },
            //     {
            //         name:'#B2B2B2',
            //         value:'#B2B2B2',
            //     },
            //     {
            //         name:'#FFFFFF',
            //         value:'#FFFFFF',
            //     },
            // ]
        };
    },
    methods: {
        _24(time,format=false) {
            if (format) return moment(time, "hh").format('LT')
            else return moment(time,'hh').format('h A')
        },
        _addDay(curr_day=null,days=0) {
            let newDate
            if (curr_day) {
                newDate=new Date(curr_day)
                newDate.setDate(newDate.getDate()+days)
            } else {
                newDate=new Date()
                newDate.setDate(newDate.getDate())
            }

            return newDate.toISOString().substr(0, 10)
        },
        _amountFormat(amount) {
            return parseFloat(amount).toFixed(2)+' €'
        },
        _asset(file) {
            return window.asset + "/" + file;
        },
        _betweenTime(start_time,end_time,selected_time,format='hh:mm') {
            start_time=moment(start_time,format)
            end_time=moment(end_time,format)
            selected_time=moment(selected_time,format)
            if (start_time === end_time) return true
            else return selected_time.isBetween(start_time,end_time)
        },
        _clear() {
            this._commit('errors',[])
        },
        _commit(key, value) {
            this.$store.commit(key, value);
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
        _createHash(item) {
            return this.$root.$hash(item)
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
        _display(content) {
            if (content == "" || content == null || content == undefined) {
                return "...";
            }

            return content;
        },
        _displayImage(file, dir = "storage") {
            if (!file) return

            if (this._isUrl(file)) return file;

            let img=[]
            let base_url = window.location.origin;

            if (typeof file === 'string') img = file.split("/")

            if (dir=='public') {
                if (typeof file === 'object') return `${base_url}/${file.path}/${file.filename}`
                else if (img.length==2) return `${base_url}/${img[0]}/${img[1]}`
                else return `${base_url}/${img[0]||file}`
            } else {
                if (typeof file === 'object') return `${base_url}/${dir}/${file.path}/${file.filename}`
                else if (img.length==2) return `${base_url}/${dir}/${img[0]}/${img[1]}`
                else return `${base_url}/${dir}/${img[0]||file}`
            }
        },
        _displayThumb(file, dir = "storage") {
            if (!file) return

            if (this._isUrl(file)) return file;

            let img=[]
            let base_url = window.location.origin;

            if (typeof file === 'string') img = file.split("/")

            if (dir=='public') {
                if (typeof file === 'object') return `${base_url}/${file.path}/thumb_${file.filename}`
                else if (img && img.length==2) return `${base_url}/${img[0]}/thumb_${img[1]}`
                else return `${base_url}/thumb_${img[0]||file}`
            } else {
                if (typeof file === 'object') return `${base_url}/${dir}/${file.path}/thumb_${file.filename}`
                else if (img && img.length==2) return `${base_url}/${dir}/${img[0]}/thumb_${img[1]}`
                else return `${base_url}/${dir}/thumb_${img[0]||file}`
            }

            // if (dir=='public') {
            //     if (typeof str === 'string') img = file.split("/")
            //     else img = file.filename.split("/")

            //     if (img.length==2) return `${base_url}/${file.path}/${img[0]}`
            //     return `${base_url}/${file.path}/thumb_${file.filename}`
            // } else {
            //     let img = file.split("/");
            //     if (img.length==2) return `${base_url}/${dir}/${img[0]}/thumb_${img[1]}`;
            //     return `${base_url}/${dir}/thumb_${img[0]}`;
            // }
        },
        _displayImages(file, type = "", dir = "storage") {
            let base_url = window.location.origin;
            let path = `${base_url}/${dir}/`;

            if (this._isUrl(file.url)) return file.url;
            if (type == 'thumbnail') return path+file.thumbnail;
            if (type == 'original') return path+file.original;
            if (type == 'compressed') return path+file.compressed;
        },
        // async _duplicate(){
        //     return await this.duplicateRecord()
        // },
        _filter(value, filter,all=false) {
            if (!this._isValidFilter(filter)) return value;

            return this.$options.filters[filter](value);
        },
        _formatDate(value, format = "Do MMMM YYYY") {
            if (value) {
                if (Array.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        value[i] = moment(value[i]).format(format);
                    }
                    return value;
                } else {
                    return moment(value).format(format);
                }
            }
        },
        _dateName(){
            const enmoment = moment().locale('en');
            return enmoment.format('dddd');
        },
        _formatDateTime(value, format = "Do MMMM YYYY h:mm a") {
            if (value) {
                if (Array.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        value[i] = moment(value[i]).format(format);
                    }
                    return value;
                } else {
                    return moment(value).format(format);
                }
            }
        },
        _formatNumber(number, format = "fr") {
            if (!isNaN(number)) {
                let formatter = new Intl.NumberFormat(format, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                return formatter.format(number);
            } else {
                return 0;
            }
        },
        _formatTime(n) {
            return `0${n ^ 0}`.slice(-2);
        },
        _getDayofWeek(date1,date2,unique=true) {
            let days = []
            for (var d = moment(date1); d <= moment(date2); d.add(1,'days')) {
                days.push(moment(d,'YYYY-MM-DD').isoWeekday())
            }
            if (unique) return days.filter(this._onlyUnique)
            else return days
        },
        _getIndex(column, target, value) {
            return target.findIndex(ind => ind[column] == value);
        },
        _getters(key) {
            return this.$store.getters[key];
        },
        _getToday(format='YYYY-MM-DD') {
            return moment().format(format)
        },
        _isToday(date,format='YYYY-MM-DD') {
            let today=moment().format(format)
            date=moment(date).format(format)
            return today==date
        },
        _inArray(needle, haystack,column='id') {
            var length = haystack.length;
            for(var i = 0; i < length; i++) {
                if (column) {
                    if(haystack[i][column] == needle) return true;
                } else {
                    if(haystack[i] == needle) return true;
                }
            }
            return false;
        },
        _infoToast() {
            this.$toast.info(this._lang("record_cannot_be_deleted"));
        },
        _invertColor(hex) {
            return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
        },
        _isBase64(str) {
            if (!str || str ==='' || str.trim() ===''){ return false; }
            try {
                return btoa(atob(str)) == str;
            } catch (err) {
                return false;
            }
        },
        _isValidFilter(filter) {
            return !!this.$options.filters[filter];
        },
        _isValidMethod(method) {
            return !!this.$options.methods[method];
        },
        _isUrl(str) {
            if (typeof str === 'string') return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
        },
        _lang(value, filter, explode = false) {
            if (!isNaN(value) || !value) return value;

            let arr = [];
            let res = [];

            if (explode) arr = value.split(" ");
            else arr = value;

            if (arr.length > 1 && explode) {
                if (this._isValidFilter(filter)) {
                    res = arr.map(item => {
                        return this.$options.filters[filter](this.$t(item));
                    });
                } else {
                    res = arr;
                }
                return res.toString().replace(/\,/g, " ");
            } else {
                if (this._isValidFilter(filter)) {
                    return this.$options.filters[filter](this.$t(value));
                } else {
                    return this.$t(value);
                }
            }
        },
        _minTime(time,key=false,returnKey=false) {
            if (time.length == 0 || !time) return
            if (time.length == 1) return key ? time[0][key] : time[0]
            return time.reduce( function(prev,curr) {
                if (key) return prev[key] < curr[key] ? (returnKey?prev[key]:prev) : (returnKey?curr[key]:curr)
                return prev < curr ? prev : curr
            })
        },
        _maxTime(time,key=false,returnKey=false) {
            if (time.length == 0 || !time) return
            if (time.length == 1) return key ? time[0][key] : time[0]
            return time.reduce( function(prev,curr) {
                if (key) return prev[key] > curr[key] ? (returnKey?prev[key]:prev) : (returnKey?curr[key]:curr)
                return prev > curr ? prev : curr
            })
        },
        _num2time(num){
            var h,m="00";
            if(num<100)
                h=num;
            else {
                h=Math.floor(num/100);
                m=("0"+(num%100)).slice(-2);
            }
            h=h%24;
            return ("0"+h).slice(-2)+":"+m;
        },
        _onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        },
        _padZero(str, len) {
            len = len || 2;
            var zeros = new Array(len).join('0');
            return (zeros + str).slice(-len);
        },
        _parse(val) {
            return JSON.parse(val);
        },
        _parseString(val) {
            return JSON.parse(JSON.stringify(val));
        },
        _pluck(items, key) {
          return items.map(item => item[key]);
        },
        _push(child, params = {}) {
            let link = this.$router.resolve({
                name: child,
                params: params
            });

            let path = link.route.path;
            if (this.$route.path == path) return;

            this.$router.push({ path: path }).catch(err => {});
        },
        _range(start, end) {
            end = Math.round(end)
            return Array(end - start + 1).fill().map((_, idx) => start + idx)
        },
        _removeEmpty(obj) {
            const finalObj = {};
            Object.keys(obj).forEach((key) => {
            if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                const nestedObj = this._removeEmpty(obj[key]);
                if (Object.keys(nestedObj).length) {
                finalObj[key] = nestedObj;
                }
            } else if (Array.isArray(obj[key])) {
                if (obj[key].length) {
                obj[key].forEach((x) => {
                    const nestedObj = this._removeEmpty(x);
                    if (Object.keys(nestedObj).length) {
                    finalObj[key] = finalObj[key] ? [...finalObj[key], nestedObj] : [nestedObj];
                    }
                });
                }
            } else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
                finalObj[key] = obj[key];
            }
            });
            return finalObj;
        },
        _rnd (a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
        _secondsToHms(d, formatted) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor((d % 3600) / 60);
            var s = Math.floor((d % 3600) % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay =
                m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            if (formatted)
                return (
                    this._formatTime(h) +
                    ":" +
                    this._formatTime(m) +
                    ":" +
                    this._formatTime(s)
                );
            return hDisplay + mDisplay + sDisplay;
        },
        _status_update(status) {
            if (!status)
                this.$toast.error(this._lang("status_updated_failed"), {
                    position: "bottom"
                });
            else
                this.$toast.success(this._lang("status_updated_successfully"), {
                    position: "bottom"
                });
        },
        _string(val) {
            return JSON.stringify(val);
        },
        _stringParse(val) {
            return JSON.stringify(JSON.parse(val));
        },
        _strtodatetime(time) {
            return moment(new Date("1970-01-01 " + time))
        },
        _strtotime(time) {
            return moment(time, 'HH:mm')
        },
        _subTime(mtime,stime,add=false) {
            moment.locale('fr')
            var duration = moment.duration({hours: stime})
            if (add) return moment(mtime, 'HH:mm').add(duration).format('LT')
            else return moment(mtime, 'HH:mm').subtract(duration).format('LT')
        },
        _timeDiff(startTime,end) {
            startTime=this._strtodatetime(startTime)
            end=this._strtodatetime(end)
            var duration = moment.duration(end.diff(startTime));
            return duration.asHours();
        },
        _timeNow(to24=false) {
            if (to24) return moment().format('HH:mm')
            else return moment().format('h A')
        },
        _timePast(date) {
            let now=moment(new Date())
            date=moment(new Date(date))
            return now>date
        },
        _toValidDate(mdate) {
            mdate=moment(mdate)
            if (mdate.isValid()) return mdate
            else return this._getToday('YYYY-MM-DD HH:mm:ss')
        },
        _truncate(string, length) {
            if (!string) return;
            if (string.length <= length) return string;
            return string.substring(0, Math.min(length, string.length)) + "...";
        },
        _notExist(val) {
            if (val == "") return true;
            if (val == null) return true;
            if (val == undefined) return true;

            return false;
        },
        _checkExpired(date) {
            var date = new Date(date);
            var today = new Date();
            if (date.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)) {
                return true;
            }
            return false;
        },
        _validateHhMm(value) {
            return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
        },
        _test() {
            console.log('test')
        },
        _checkMoneticoData(value) {
            // && value.texte-libre
            if(value.MAC && value.TPE && value.contexte_commande && value.date && value.lgue && value.mail && value.montant && value.reference && value.societe
                 && value.url_retour_err && value.url_retour_ok && value.version) {
                    return true;
                }
            // console.log(value, 'pansok')
        }
    },
    computed: {
        isFetching() {
            return this._getters('fetching')
        },
        is_submitted() {
            return this._getters('is_submitted')
        },
    },
    filters: {
        camelize(str) {
            return str
                .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                    return index === 0
                        ? word.toLowerCase()
                        : word.toUpperCase();
                })
                .replace(/\s+/g, "");
        },
        capitalize(value) {
            if (!value) return value;
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        lcase(value) {
            if (value) return value.toLowerCase();
        },
        titleCase(str) {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr.join(' ');
        },
        ucase(value) {
            if (value) return value.toUpperCase();
        }
    },

};
</script>
