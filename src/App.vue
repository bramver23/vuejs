<template>
  <div class="container">
   <SearchBar @termChange1="onTermChange"></SearchBar>
   <div class="row">
     <VideoDetail v-bind:video="selectedVideo"></VideoDetail>
     <VideoList @videoSelect="onVideoSelect" v-bind:videosArray="videos"></VideoList>\
   </div>
   {{ videos.length }}
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyA5ugfF5e-CM3FBcfEJAyZTw0Mp-Ru4lVU'

export default{
  name:'App',
  components: {
  SearchBar,
  VideoList,
  VideoDetail
},
data:function(){
  return {
    videos:[],
    selectedVideo:null
  }
},
methods:{
  onVideoSelect:function(video1){
    this.selectedVideo = video1;
    //console.log("--->", video);
  },
  onTermChange:function(searchTerm){
    //console.log(searchTerm);
    axios.get('https://www.googleapis.com/youtube/v3/search',{
      params:{
        key:API_KEY,
        type:'video',
        part:'snippet', //what type of info we need for video just an small part
        q:searchTerm //query
      }
    }).then(response => {
     this.videos = response.data.items
     // console.log(response)
    });
  }
}
};
</script>

<style scoped>
#app{
  background-color:#20262e;
}
.container{
    box-shadow: 8px 4px 15px grey;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}
</style>