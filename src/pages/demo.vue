<template>
  <div></div>
</template>

<script>
import { getDemoMM, sections } from '../global/links';
export default {
  fetch(params) {
    const { redirect } = params;
    redirect(301, getDemoMM(sections))
  },
};
</script>