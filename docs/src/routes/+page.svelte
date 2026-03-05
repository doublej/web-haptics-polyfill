<script lang="ts">
  import { base } from '$app/paths';

  const features = [
    {
      title: 'iOS Safari Haptics',
      description: 'Real haptic feedback on iPhone via the hidden <input switch> checkbox exploit — no native app required.'
    },
    {
      title: 'Android PWM Vibration',
      description: 'Variable intensity on Android using pulse-width modulation patterns through navigator.vibrate().'
    },
    {
      title: 'Audio Fallback',
      description: 'Bandpass-filtered white noise bursts through AudioContext for desktop development and testing.'
    },
    {
      title: 'Framework Bindings',
      description: 'First-class hooks for React, Svelte, and Vue with automatic cleanup on unmount.'
    },
    {
      title: 'Preset Patterns',
      description: '11 built-in haptic presets — success, error, warning, selection, light, medium, heavy, and more.'
    },
    {
      title: 'Zero Dependencies',
      description: 'Tiny footprint with no runtime dependencies. Tree-shakeable ESM and CJS builds.'
    }
  ];

  const steps = [
    {
      title: 'Install',
      description: 'Add the package to your project.',
      code: 'npm install web-haptics-polyfill'
    },
    {
      title: 'Import',
      description: 'Use the default singleton or create a custom instance.',
      code: `import { haptics } from 'web-haptics-polyfill'`
    },
    {
      title: 'Trigger',
      description: 'Fire haptic feedback with a preset name, duration, or custom pattern.',
      code: `haptics.trigger('success')\nhaptics.trigger(100)\nhaptics.trigger([{ duration: 30, intensity: 0.5 }])`
    }
  ];

  const reactCode = [
    "import { useHaptics } from 'web-haptics-polyfill/react'",
    "",
    "function Button() {",
    "  const { trigger } = useHaptics()",
    "  return <button onClick={() => trigger('success')}>Tap</button>",
    "}"
  ].join('\n');

  const svelteCode = [
    "<!-- script -->",
    "import { createHaptics } from 'web-haptics-polyfill/svelte'",
    "const { trigger } = createHaptics()",
    "",
    "<!-- template -->",
    '<button onclick={() => trigger("success")}>Tap</button>'
  ].join('\n');

  const vueCode = [
    "<!-- script setup -->",
    "import { useHaptics } from 'web-haptics-polyfill/vue'",
    "const { trigger } = useHaptics()",
    "",
    "<!-- template -->",
    '<button @click="trigger(\'success\')">Tap</button>'
  ].join('\n');

  const frameworks = [
    { name: 'React', code: reactCode },
    { name: 'Svelte', code: svelteCode },
    { name: 'Vue', code: vueCode }
  ];

  let copied = $state(false);

  function copyInstall() {
    navigator.clipboard.writeText('npm install web-haptics-polyfill');
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<svelte:head>
  <title>web-haptics-polyfill — Haptic feedback for mobile web</title>
</svelte:head>

<main>
  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <div class="badge">Open Source</div>
      <h1>web-haptics-polyfill</h1>
      <p class="description">
        Cross-platform haptic feedback for mobile web apps. Real haptics on iOS Safari,
        vibration with intensity control on Android, and an audio fallback for desktop.
      </p>
      <div class="hero-actions">
        <a href="https://github.com/doublej/web-haptics-polyfill" class="btn btn-primary" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="#getting-started" class="btn btn-secondary">Get Started</a>
      </div>
    </div>
  </section>

  <!-- Install -->
  <section class="install">
    <div class="container">
      <button class="install-box" onclick={copyInstall}>
        <code>npm install web-haptics-polyfill</code>
        <span class="copy-hint">{copied ? 'Copied!' : 'Click to copy'}</span>
      </button>
    </div>
  </section>

  <!-- How It Works -->
  <section class="how-it-works">
    <div class="container">
      <h2>How It Works</h2>
      <div class="engine-grid">
        <div class="engine-card" style="animation-delay: 0ms">
          <div class="engine-label">iOS Safari 17.4+</div>
          <h3>Switch Checkbox Exploit</h3>
          <p>Toggles a hidden <code>&lt;input type="checkbox" switch&gt;</code> element to trigger Safari's built-in haptic feedback.</p>
        </div>
        <div class="engine-card" style="animation-delay: 200ms">
          <div class="engine-label">Android Chrome</div>
          <h3>PWM Vibration</h3>
          <p>Converts intensity values into rapid on/off pulse-width modulation patterns via <code>navigator.vibrate()</code>.</p>
        </div>
        <div class="engine-card" style="animation-delay: 400ms">
          <div class="engine-label">Desktop</div>
          <h3>Audio Engine</h3>
          <p>Plays bandpass-filtered white noise bursts through <code>AudioContext</code> so you can feel the patterns while developing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="features">
    <div class="container">
      <h2>Features</h2>
      <div class="grid">
        {#each features as feature, i}
          <div class="feature-card" style="animation-delay: {i * 150}ms">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Presets -->
  <section class="presets">
    <div class="container">
      <h2>Presets</h2>
      <p class="section-description">Built-in patterns tuned for common interaction feedback.</p>
      <div class="preset-grid">
        {#each ['success', 'error', 'warning', 'selection', 'light', 'medium', 'heavy', 'soft', 'rigid', 'nudge', 'buzz'] as preset}
          <div class="preset-chip">
            <code>{preset}</code>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Getting Started -->
  <section class="getting-started" id="getting-started">
    <div class="container">
      <h2>Getting Started</h2>
      <div class="steps">
        {#each steps as step, i}
          <div class="step" style="animation-delay: {i * 200}ms">
            <div class="step-number">{i + 1}</div>
            <div class="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {#if step.code}
                <pre><code>{step.code}</code></pre>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Framework Integrations -->
  <section class="frameworks">
    <div class="container">
      <h2>Framework Integrations</h2>
      <div class="framework-grid">
        {#each frameworks as fw, i}
          <div class="framework-card" style="animation-delay: {i * 200}ms">
            <h3>{fw.name}</h3>
            <pre><code>{fw.code}</code></pre>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>
        Inspired by <a href="https://haptics.lochie.me/" target="_blank" rel="noopener">Haptics</a> by <a href="https://github.com/lochie" target="_blank" rel="noopener">Lochie</a>
      </p>
      <p class="footer-links">
        <a href="https://github.com/doublej/web-haptics-polyfill" target="_blank" rel="noopener">GitHub</a>
        <span class="sep">&middot;</span>
        MIT License
      </p>
    </div>
  </footer>
</main>

<style>
  main {
    min-height: 100vh;
  }

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  /* Hero */
  .hero {
    padding: 80px var(--container-padding) 40px;
    text-align: center;
    animation: fadeSlideUp 0.5s ease-out forwards;
  }

  .badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--text-tertiary);
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: 4px 14px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 16px;
  }

  .description {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 620px;
    margin: 0 auto 32px;
    line-height: 1.7;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }

  .btn-primary {
    background: var(--accent);
    color: #fff;
  }

  .btn-primary:hover {
    background: #333;
  }

  .btn-secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border);
  }

  .btn-secondary:hover {
    background: var(--bg-code);
  }

  /* Install */
  .install {
    padding: 0 var(--container-padding) 48px;
    text-align: center;
    animation: fadeSlideUp 0.5s ease-out 0.1s forwards;
    opacity: 0;
  }

  .install-box {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 24px;
    cursor: pointer;
    transition: border-color 0.2s;
    font-family: inherit;
    font-size: inherit;
  }

  .install-box:hover {
    border-color: var(--accent);
  }

  .install-box code {
    font-size: 0.95rem;
    color: var(--text-primary);
  }

  .copy-hint {
    font-size: 0.8rem;
    color: var(--text-tertiary);
  }

  /* Sections */
  section {
    padding: var(--section-padding) var(--container-padding);
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    margin-bottom: 12px;
  }

  .section-description {
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  /* How It Works */
  .engine-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
    margin-top: 32px;
  }

  .engine-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 28px;
    animation: fadeSlideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .engine-label {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-tertiary);
    margin-bottom: 8px;
  }

  .engine-card h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .engine-card p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .engine-card code {
    font-size: 0.85rem;
    background: var(--bg-code);
    padding: 2px 6px;
    border-radius: 4px;
  }

  /* Features Grid */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
    margin-top: 32px;
  }

  .feature-card {
    background: var(--bg-secondary);
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 8px;
    animation: fadeSlideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .feature-card h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .feature-card p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  /* Presets */
  .preset-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .preset-chip {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 16px;
  }

  .preset-chip code {
    font-size: 0.9rem;
  }

  /* Getting Started */
  .steps {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .step {
    display: flex;
    gap: 20px;
    animation: fadeSlideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .step-number {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background: var(--accent);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .step-content {
    flex: 1;
  }

  .step-content h3 {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .step-content p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 12px;
  }

  pre {
    background: var(--bg-code);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 16px 20px;
    overflow-x: auto;
    font-size: 0.88rem;
    line-height: 1.6;
  }

  /* Frameworks */
  .framework-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
    margin-top: 32px;
  }

  .framework-card {
    animation: fadeSlideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .framework-card h3 {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .framework-card pre {
    font-size: 0.82rem;
  }

  /* Footer */
  footer {
    padding: 48px var(--container-padding);
    text-align: center;
    border-top: 1px solid var(--border);
    margin-top: 40px;
  }

  footer p {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  footer a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
  }

  footer a:hover {
    text-decoration: underline;
  }

  .footer-links {
    margin-top: 8px;
  }

  .sep {
    margin: 0 8px;
    color: var(--text-tertiary);
  }

  /* Responsive */
  @media (max-width: 1000px) {
    .grid, .engine-grid, .framework-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }

    .grid, .engine-grid, .framework-grid {
      grid-template-columns: 1fr;
    }

    .hero {
      padding: 48px var(--container-padding) 24px;
    }

    .hero-actions {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
