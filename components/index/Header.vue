<template lang="pug">
  header(v-bind:class="{ 'header-fixed' : fixHeader }")
    div.container
      span.logo
      div.nav
        span.button.button-login(v-on:click="openLogin = !openLogin") Join us
        div.language-select-block
          div.language-select
            span.language-selected(v-on:click="openedLngList = !openedLngList", v-bind:class="{ opened: openedLngList }") {{ currLanguage }}
            div.language-select-list(v-if="openedLngList")
              span.language-select-list-title(v-for="lng in languagesList", v-if="!lng['active']", v-on:click="setLanguage(lng)") {{ lng['title'] }}
        div.menu-toggle(v-bind:class="{ 'opened-menu' : openingMenu }", v-on:click="openingMenu = !openingMenu")
          span.menu-toggle-line
          span.menu-toggle-line
      <Menu v-bind:open-menu="openingMenu" />
      <login-section @close-login="openLogin = !openLogin" v-bind:open-login="openLogin" />
</template>

<script>
import Menu from "./Menu.vue";
import LoginSection from "./LoginSection.vue";

export default {
  data: function() {
    return {
      openLogin: false,
      fixHeader: false,
      currLanguage: "Eng",
      openedLngList: false,
      openingMenu: false,
      languagesList: [
        {
          lng: "en",
          title: "Eng",
          active: true
        },
        {
          lng: "it",
          title: "Ita",
          active: false
        },
        {
          lng: "vie",
          title: "Vie",
          active: false
        },
        {
          lng: "deu",
          title: "Deu",
          active: false
        }
      ]
    };
  },
  components: {
    Menu,
    LoginSection
  },
  mounted() {
    window.addEventListener("scroll", event => {
      window.scrollY > 55 ? (this.fixHeader = true) : (this.fixHeader = false);
    });

    this.$root.$on("modalLogin", function(state) {
      this.openLogin = false;
      console.log("open login 1", this.openLogin);
      this.openLogin = true;
      console.log("open login 2", this.openLogin);
    });
  },
  head() {
    return {
      bodyAttrs: {
        class: this.openLogin ? "modal-open" : ""
      }
    };
  },
  methods: {
    setLanguage: function(event) {
      this.currLanguage = event["title"];
      this.openedLngList = false;

      this.languagesList.map(lang => {
        if (lang["lng"] === event["lng"]) {
          lang["active"] = true;
        } else {
          lang["active"] = false;
        }
      });
      this.languagesList.sort((a, b) => {
        return b.active ? 1 : -1;
      });
    }
    // loginModal: function(state) {
    //   // this.$root.$emit("modalOpen", state);
    //   this.openLogin = state;
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 10px;
  z-index: 3;

  @include bb(endmobile, 0) {
    padding: 10px 0;
  }

  &.header-fixed {
    position: fixed;
    padding: 0;
    background-color: #181a29;
  }

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 1300px;
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-toggle {
    margin-left: 10px;
    width: 35px;
    cursor: pointer;

    &.opened-menu {
      .menu-toggle-line:nth-child(1) {
        transform: rotate(-45deg);
        margin: 0;
        margin-bottom: -2px;
      }

      .menu-toggle-line:nth-child(2) {
        transform: rotate(45deg);
        margin: 0;
        max-width: 100%;
      }

      &:hover {
        .menu-toggle-line {
          margin-left: 0px !important;
          background-color: #ff8d1f;
        }
      }
    }

    &:hover {
      .menu-toggle-line:nth-child(2) {
        margin-left: 10px;
        background-color: #ff8d1f;
      }
    }

    &-line {
      width: 100%;
      display: block;
      height: 2px;
      border-radius: 10px;
      background-color: var(--text-color);
      margin-bottom: 5px;
      transition: 0.4s ease;

      &:nth-child(2) {
        max-width: 25px;
      }
    }
  }

  .button {
    margin-right: 10px;
    margin-top: -5px;
    font-size: 14px;
  }
}

.language-selected {
  color: white;
  font-size: 14px;
  display: block;
  margin-top: 2px;

  &:hover {
    color: #ff8d1f;
    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: white;
    transform: rotate(135deg);
    position: absolute;
    top: 4px;
    right: -5px;
    transition: 0.2s ease;
  }

  &:not(.opened) {
    &:hover {
      color: #ff8d1f;
    }
  }

  &.opened {
    &:after {
      transform: rotate(-45deg);
      top: 8px;
    }
  }
}

.language-select-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: rgba(18, 18, 25, 0.98);
  padding: 10px 30px;
  position: absolute;
  top: 30px;
  left: -15px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: inherit; /* !importanté */
    background: linear-gradient(to right top, #82868f, #775338, #0b2591);
    margin: -1px;
  }

  &-title {
    font-size: 14px;
    color: white;
    margin-bottom: 5px;
    width: 100%;
    display: block;
    cursor: pointer;

    &:hover {
      color: #ff8d1f;
    }
  }
}

.language-select-block {
  position: relative;
  margin: 0 30px 0 20px;
  margin-top: -5px;

  @include b(900) {
    margin: -5px 10px 0 5px;
  }
}

.language-select {
  position: relative;
  padding-right: 10px;
}
</style>
