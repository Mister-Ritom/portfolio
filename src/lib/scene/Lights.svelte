<script lang="ts">
	import { T } from '@threlte/core';
</script>

<!-- High-intensity studio lighting -->
<T.AmbientLight intensity={0.2} />

<!-- Key light -->
<T.DirectionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />

<!-- Cool Fill/Side lights -->
<T.DirectionalLight position={[-10, 5, 10]} intensity={3} color="#0066ff" />
<T.DirectionalLight position={[5, -2, 5]} intensity={1.5} color="#00ffff" />

<!-- Strong Rim light for silhouette -->
<T.DirectionalLight position={[0, 5, -12]} intensity={5} color="#0044ff" />

<!-- Dynamic focal points for the bike components -->
<T.PointLight position={[2, 1, 2]} intensity={10} distance={5} color="#00ffff" />
<T.PointLight position={[-2, 1, -2]} intensity={8} distance={5} color="#0066ff" />

<T.HemisphereLight groundColor="#000000" intensity={0.2} color="#0066ff" />
