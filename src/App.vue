<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family:
    Kumbh Sans,
    Avenir,
    Helvetica,
    Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  overflow-y: auto !important;
}

html,
body,
#app {
  height: 100%;
}

@font-face {
  font-family: 'Kumbh Sans';
  src:
    url('./assets/fonts/KumbhSans-Bold.woff2') format('woff2'),
    url('./assets/fonts/KumbhSans-Bold.woff') format('woff');
  font-weight: bold;
}

@font-face {
  font-family: 'Kumbh Sans';
  src:
    url('./assets/fonts/KumbhSans-Regular.woff2') format('woff2'),
    url('./assets/fonts/KumbhSans-Regular.woff') format('woff');
  font-weight: normal;
}

@font-face {
  font-family: 'Kumbh Sans';
  src:
    url('./assets/fonts/KumbhSans-Light.woff2') format('woff2'),
    url('./assets/fonts/KumbhSans-Light.woff') format('woff');
  font-weight: 300;
}

.img-pixelated {
  image-rendering: pixelated;
}
</style>
