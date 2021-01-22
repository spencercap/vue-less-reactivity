// main
import { reactive } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch'; // necessary
console.log('init');

// vue reactivity obj
const state = reactive({
	count: 0,
	hello: 'world'
});

// modifying data
setInterval(() => {
	console.log('boop');
	console.log(state.count);

	state.count++;
}, 500);

// watcher
watch(
	() => state.count,
	(x) => {
		console.log('ding', x);
	}
);
