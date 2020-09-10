<template lang="pug">
.sponsor-item
  <img class='click' src='~static/img/icons/info-1.svg'>
  <img class='img-sponsors' :src="item.imagePath", :alt="item.imageAlt">
  .container-about
    .about-sponsor
      <img class='img-sponsors' :src="item.imagePath", :alt="item.imageAlt">
      .text-about {{ item.text }}
      .status Status:
        .status-type &nbsp; {{ item.status }} &nbsp; <img src='~static/img/icons/Vector.svg'>
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
