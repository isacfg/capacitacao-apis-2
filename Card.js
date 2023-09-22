export default {
  data() {
    return {
      
    }
  },
  props: {
    album: {
    }
  },
  template: `
  <div  class="flex flex-col items-center shadow border-2 p5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">

  <a :href="album.artistViewUrl" target="_blank" class="flex flex-col items-center">
    <h3 class="font-bold text-xl">{{album.collectionName}}</h3>
    <img :src="album.artworkUrl100" alt="" class="w-52 mt-5" srcset="">
  </a>
</div>
  `
}