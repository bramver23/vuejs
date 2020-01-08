<template>
  <ul class="list-group col-md-4">
    <VideoListItem v-for ="video in videosArray" v-bind:video = "video" v-bind:key="video.etag"
    @videoSelect="onVideoSelect" >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
  name:'VideoList',
  components:{
    VideoListItem
  },
  props:['videosArray'], // is not array it will trigger an error
  methods:{
    onVideoSelect(video){
      this.$emit('videoSelect', video);
    }
  }
};
</script>

<style>
</style>
