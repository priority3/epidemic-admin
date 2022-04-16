export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      const { params, query } = route
      const { path } = params
      console.log(path);
      router.replace({ path: '/' + path, query })
    })
    return () => <div> </div>
  }
})
