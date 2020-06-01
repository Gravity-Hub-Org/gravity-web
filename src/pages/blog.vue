<template>
  <div></div>
</template>

<script>
import { sections, getFAQLink } from '../global/links';

export default {
  fetch (params) {
    redirect(301, getFAQLink(sections).link)
  }
};
</script>