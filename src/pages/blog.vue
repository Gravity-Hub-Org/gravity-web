<template>
  <div></div>
</template>

<script>
import { sections, getBlogLink } from '../global/links';

export default {
  fetch(params) {
    const { redirect } = params;
    redirect(301, getBlogLink(sections).link);
  },
};
</script>
