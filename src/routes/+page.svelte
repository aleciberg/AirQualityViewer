<script>
	import FloatingBox from '../components/FloatingBox.svelte';
	import { Body } from 'svelte-body';

	let airQuality;

	const gradientMap = {
		1: 'linear-gradient(135deg, #00ff00 0%, #33ff33 25%, #66ff66 50%, #99ff99 75%, #ccffcc 100%)',
		2: 'linear-gradient(135deg, #ffff00 0%, #ffff33 25%, #ffff66 50%, #ffff99 75%, #ffffcc 100%)',
		3: 'linear-gradient(135deg, #ffa500 0%, #ffad33 25%, #ffb966 50%, #ffc599 75%, #ffccbc 100%)',
		4: 'linear-gradient(135deg, #ff4500 0%, #ff6633 25%, #ff9966 50%, #ffcc99 75%, #ffe6cc 100%)',
		5: 'linear-gradient(135deg, #8b0000 0%, #a83333 25%, #cc6666 50%, #e69999 75%, #ffcccc 100%)',
		6: 'linear-gradient(135deg, #800080 0%, #993399 25%, #b366b3 50%, #cc99cc 75%, #e6cce6 100%)'
	};

	$: style = {
		background: `${gradientMap[airQuality]}`
	};
</script>

<Body {style} />
<FloatingBox bind:airQuality />
