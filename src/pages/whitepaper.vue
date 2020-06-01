<template>
  <img src='/static/docs/whitepaper.pdf' v-show="false"/>
</template>

<script>
export default {
  fetch(params) {
    const { redirect } = params;
    redirect(301, `/static/docs/whitepaper.pdf`);
  },
};
</script>
