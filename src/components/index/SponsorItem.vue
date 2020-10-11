<template lang="pug">
.sponsor-item
  <img class='click' src='/img/icons/info-1.svg'>
  <img class='img-sponsors' :src="item.imagePath", :alt="item.imageAlt">
  .container-about
    .about-sponsor
      //<img class='close' src='/img/icons/close.svg'>
      //form
        <button class='closeItem' @click='active = !isActive'>x</button>  
      //<img class='img-sponsors' :src="item.imagePath", :alt="item.imageAlt">
      .sponsor-wrap 
        <img class='img-spn' v-bind:src=item.imagePath>
      .text-about {{ item.text }}
      .status Status:
        .status-type &nbsp; {{ item.status }} &nbsp; <img src='/img/icons/Vector.svg'>
      a.link(:href='item.url', target='_blank') {{ item.url }}
</template>
<script>
export default {
  name: 'SponsorItem',
  props: {
    item: Object,
  },
};
</script>


<style lang="scss"></style>
