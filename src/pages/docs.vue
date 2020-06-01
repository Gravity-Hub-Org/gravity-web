<template>
  <div></div>
</template>

<script>
import { sections, getDocsLink } from '../global/links';

export default {
  fetch(params) {
    const { redirect } = params;
    redirect(301, getDocsLink(sections).link);
  },
};
</script>
