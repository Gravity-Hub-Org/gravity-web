<template lang="pug">
  div.container.container-registration(v-if="openRegistration")
    div.close-section(v-on:click="close()")
      span.close-section-item
      span.close-section-item
    div.registration-block
      h3.registration-block-title Welcome to the Gravity Hub!
      hr
      transition(name="fade")
        registration-steps(v-bind:step="step")
      hr
      div.registration-block-buttons
        span.button.button-registration(v-on:click="step--", v-if="step != 0") Back
        span.button.button-registration(v-if="step === 0")
        span.button.button-registration(v-on:click="step++", v-if="step != 3") Next
        span.button.button-registration(v-if="step === 3",v-on:click="close()") Got it
</template>

<script>
import RegistrationSteps from "./RegistrationSteps.vue";

export default {
  transitions: "fade",
  props: ["openRegistration"],
  data: function() {
    return {
      step: 0
    };
  },
  components: {
    RegistrationSteps
  },
  methods: {
    close() {
      this.step = 0;
      this.$emit("close-registration");
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/scss/mixins/media";

.close-section {
  @include bb(endmobile, 0) {
    top: 20px;
    right: 10px;
  }
}

.registration-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;

  hr {
    width: 100%;
    border-color: #747684;
  }

  &-title {
    text-align: center;
    display: block;
    margin-bottom: 30px;
    font-size: 24px;
    color: white;
    font-weight: bold;

    @include bb(endmobile, 0) {
      font-size: 16px;
      margin-bottom: 1px;
    }
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    @include bb(endmobile, 0) {
      margin-top: 1px;
    }
  }

  .button {
    margin-bottom: 10px;
    color: white;
    text-align: center;
    font-size: 16px;

    &:hover {
      opacity: 0.6;
    }
  }
}

.container-registration {
  max-width: 1150px;
  background-color: #2d3044;
  padding: 80px 100px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @include bb(tablet, 0) {
    padding: 40px 20px;
  }

  @include b(mobile) {
    padding: 20px 20px;
  }

  @include bb(endmobile, 0) {
    padding: 20px 20px;
    height: 90vh;
    overflow: hidden;
  }
}
</style>