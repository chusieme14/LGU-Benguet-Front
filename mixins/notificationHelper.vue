<script>
export default {
  methods:{
       successNotification(message) {
            this.$awn.success(`message`)
        },
        errorNotification(message) {
            this.$awn.warning(`message`)
        },
  }
}
</script>
