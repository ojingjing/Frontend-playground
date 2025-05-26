<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator,
  },
};
</script>

<template>
  <div class="app-container">
    <Calculator />
  </div>
</template>

<style>
:root {
  --primary-color: #ff9f0a;
  --bg-light: #f2f2f7;
  --bg-dark: #1c1c1e;
  --text-light: #000000;
  --text-dark: #ffffff;
}

/* Apply dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.app-container {
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  font-size: 2rem;
}

footer {
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 480px) {
  .app-container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
