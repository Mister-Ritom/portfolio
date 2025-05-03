<script>
  let { fill } = $props();
</script>

<svg
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  height="100%"
  preserveAspectRatio="xMidYMid meet"
>
  <defs>
    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
      <stop stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
      <stop stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
    </linearGradient>
  </defs>

  <path
    d="M11.1,-22.3C14.3,-17.5,16.5,-14.1,21.9,-10.7C27.3,-7.2,35.9,-3.6,36.6,0.4C37.3,4.4,30.1,8.8,26.1,14.7C22.1,20.6,21.2,27.9,17.4,33.6C13.6,39.2,6.8,43.2,-0.2,43.5C-7.1,43.8,-14.3,40.5,-19.8,35.8C-25.3,31.1,-29.2,25.1,-31.5,18.9C-33.8,12.8,-34.5,6.4,-34.4,0C-34.4,-6.3,-33.7,-12.7,-31.1,-18.4C-28.5,-24.1,-24.1,-29.1,-18.6,-32.6C-13.2,-36,-6.6,-37.8,-1.3,-35.6C4,-33.4,8,-27.1,11.1,-22.3Z"
    transform="translate(50 50)"
    fill={fill ? "url(#sw-gradient)" : "none"}
    stroke={fill ? "none" : "white"}
    stroke-width="1"
    style="transition: 0.3s;"
  />
</svg>
