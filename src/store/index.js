import { likesModule } from '@/store/likesModule';
import { createStore } from 'vuex';

export default createStore({
  modules: { likes: likesModule },
});
