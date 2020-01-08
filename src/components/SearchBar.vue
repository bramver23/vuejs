<template>
  <div class="inputDiv">
    <input @input="onInput" type="text" placeholder="Search anything "/>
  </div>
</template>

<script>
export default {
  name:'SearchBar',
  methods:{
    onInput:function(event){
    this.$emit('termChange1', event.target.value);
    }
  }
};
</script>

<style scoped>
.inputDiv{
  padding-top:20px;
}
input[type="text"]{
  text-align: center;
}
input{
  width: 75%;
  border-radius: 5px;
  border: 1px solid #ddd;
}
div{
  text-align: center;
  margin: 20px;
}
</style>
