<template>
  <div></div>
</template>

<script>
import { sections, getDocsLink } from '../global/links';

export default {
  fetch (params) {
    redirect(301, getDocsLink(sections).link)
  }
};
</script>