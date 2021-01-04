<template>
  <div>
    <h1>vuexxx</h1>
    <h3>state中的数据--------{{ this.$store.state.aaa }}</h3>
    <h3>语法糖-----{{val}}</h3>

    <h3>使用模块化中的数据 -------{{ this.$store.state.user.bread }}</h3>
    <h3>语法糖使用模块化中的数据-------{{ bread }}</h3>

    <h3>getters中的数据 {{this.$store.getters.newSum}}</h3>
    <h3>getters中的数据语法糖 {{newSum}}</h3>
    <button @click="change">点击同步修改</button>
    <button @click="change1">点击异步修改</button>
    <button @click="change2">点击修改模块化的数据</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations, createNamespacedHelpers } from "vuex";
const { mapState: mapStateuser, mapMutations: mapMutationsuser } = createNamespacedHelpers('user')
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 模块中的mutations方法
    ...mapMutationsuser({
      setBread:"setBread"
    }),
    change() {
      // console.log(123456)
      // 调用mutations中的方法 commit
      this.$store.commit("setData", "我同步改变啦");
    },
    // 调用actions中的方法 dispatch
    change1() {
      this.$store.dispatch("set", "我异步改变啦");
    },
    // 修改user模块中数据
    change2() {
      this.setBread("我修改的是模块化中的数据")
    },
  },
  computed: {
    // 根目录中的state
    ...mapState({
      // aaa:'aaa',
      val:"aaa"
    }),
    // ...mapState("user", {
    //   bread: "bread",
    // }),

    // user模块中的state
    ...mapStateuser({
      bread:"bread"
    }),


    // 根目录中的getters
    ...mapGetters({
      newSum:"newSum"
    })
  },
};
</script>

<style scoped>
</style>
