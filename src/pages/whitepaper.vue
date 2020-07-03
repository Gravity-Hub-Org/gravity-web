<template>
  <div></div>
</template>

<script>
export default {
  fetch(params) {
    const { redirect } = params;
    redirect(301, 'https://arxiv.org/abs/2007.00966');
  },
};
</script>
