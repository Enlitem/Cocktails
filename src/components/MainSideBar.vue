<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="$emit('close')" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MainSideBar',
  props: {
    isPanelOpen: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50px;
  left: 0;
  cursor: pointer;
  z-index: 999;
}
.sidebar-panel {
  overflow-y: auto;
  background-color: #ffffff;
  border-top: 1px solid #cccccc;
  position: fixed;
  right: 0;
  top: 50px;
  height: 100vh;
  z-index: 999;
  padding-top: 36px;
  padding-right: 24px;
  padding-left: 30px;
  width: 230px;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
