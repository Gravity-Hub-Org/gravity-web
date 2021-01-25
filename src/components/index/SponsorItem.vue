<template lang="pug">
.sponsor-item(
       @click='showInfo = !showInfo'
      )
  <img class='click' src='/img/icons/info-1.svg'>
  <img class='img-sponsors' :src="item.imagePath", :alt="item.imageAlt">
  .container-about(v-if="showInfo")
    .about-sponsor
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
  data: function () {
    return {
      showInfo: true,
    }
  },
};
</script>


<style lang="scss"></style>
