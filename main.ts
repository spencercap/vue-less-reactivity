import { computed, reactive, toRefs } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch'; // necessary

console.log('welcome');

// reactive obj
const reactivo = reactive({
	count: 0,
	hello: 'world',
	//
	// both: computed(() => `its-${reactive.count}`) // works but fucks up TS typing
});

const computo = {
	both: computed(() => `its-${reactivo.count * 2}`)
};

// combine reactivo + computo
const state = reactive({
	...toRefs(reactivo),
	// ...toRefs(computo) // works but to get around warning do below:
	...toRefs(reactive(computo))
});

// modifying data
setInterval(() => {
	console.log('boop');
	// console.log(state.count);
	// console.log(state.both);

	reactivo.count++;
}, 500);

// watcher reactivo
watch(
	() => state.count,
	(x) => {
		console.log('ding', x);
	}
);

// watcher computo
watch(
	() => state.both,
	(b) => {
		console.log('beep:', b);
	}
);
