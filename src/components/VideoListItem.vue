<template>

  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" v-bind:src="thumbnailURL"/>
  <div class="media-body">
    {{ video.snippet.title }}

  </div>
  </li>

</template>

<script>
export default{
  name:"VideoListItem",
  props:["video"], //// <-- props passed from the parent ?
  computed:{
    thumbnailURL(){ /// <-- name of function that goes into <img> URL
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods:{
    onVideoSelect(){
      this.$emit('videoSelect', this.video);
    }
  }
}
</script>

<style scoped>
li{
  display: flex;
}
li:hover{
  background-color: #ccc;
}
</style>
