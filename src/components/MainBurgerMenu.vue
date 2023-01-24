<template>
  <div id="burger" :class="{ active: isBurgerActive }" @click="toggle">
    <button type="button" class="burger-button" title="Menu">
      <span class="burger-bar burger-bar--1"></span>
      <span class="burger-bar burger-bar--2"></span>
      <span class="burger-bar burger-bar--3"></span>
    </button>
  </div>
  <main-side-bar :is-panel-open="isBurgerActive" @close="closePanel"><slot></slot></main-side-bar>
</template>

<script>
import MainSideBar from '@/components/MainSideBar';
import router from '@/router';
export default {
  name: 'MainBurgerMenu',
  components: { MainSideBar },
  data() {
    return {
      isBurgerActive: false,
    };
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    closePanel() {
      this.isBurgerActive = false;
    },
  },
  watch: {
    isBurgerActive: function () {
      if (this.isBurgerActive) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    },
    $route(to, from) {
      this.closePanel();
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 29px;
  width: 31px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: black;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  border-radius: 3px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: black;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
  background-color: #443e3e;
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
  background-color: #443e3e;
}
</style>
