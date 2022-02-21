import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import components from '@/ui';
import directives from '@/directives';

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component);
});

directives.forEach(directive => {
	app.directive(directive.name, directive);
});

app.use(router).use(store).mount('#app');
