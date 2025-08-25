# Runtime Diagnostics

## dev:debug on current environment

```
$ npm run dev:debug
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.
npm error Missing script: "dev:debug"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /root/.npm/_logs/2025-08-25T01_01_26_984Z-debug-0.log
```


## dev --debug on current environment

```
$ npm run dev -- --debug
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> vite_react_shadcn_ts@0.0.0 dev
> vite --debug

sh: 1: vite: not found
```

## dev --debug (pre-audit)

```
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> vite_react_shadcn_ts@0.0.0 dev
> vite --debug

2025-08-25T21:55:43.969Z vite:config bundled config file loaded in 65.70ms
2025-08-25T21:55:43.981Z vite:config using resolved config: {
  server: {
    preTransformRequests: true,
    host: '::',
    port: 8080,
    sourcemapIgnoreList: [Function: isInNodeModules$1],
    middlewareMode: false,
    fs: {
      strict: true,
      allow: [Array],
      deny: [Array],
      cachedChecks: undefined
    }
  },
  plugins: [
    'vite:optimized-deps',
    'vite:watch-package-data',
    'vite:pre-alias',
    'alias',
    'vite:react-babel',
    'vite:react-refresh',
    'vite:modulepreload-polyfill',
    'vite:resolve',
    'vite:html-inline-proxy',
    'vite:css',
    'vite:esbuild',
    'vite:json',
    'vite:wasm-helper',
    'vite:worker',
    'vite:asset',
    'vite:wasm-fallback',
    'vite:define',
    'vite:css-post',
    'vite:worker-import-meta-url',
    'vite:asset-import-meta-url',
    'vite:dynamic-import-vars',
    'vite:import-glob',
    'vite:client-inject',
    'vite:css-analysis',
    'vite:import-analysis'
  ],
  resolve: {
    mainFields: [ 'browser', 'module', 'jsnext:main', 'jsnext' ],
    conditions: [],
    extensions: [
      '.mjs',  '.js',
      '.mts',  '.ts',
      '.jsx',  '.tsx',
      '.json'
    ],
    dedupe: [],
    preserveSymlinks: false,
    alias: [ [Object], [Object], [Object] ]
  },
  optimizeDeps: {
    holdUntilCrawlEnd: true,
    force: undefined,
    esbuildOptions: { preserveSymlinks: false, jsx: 'automatic' },
    include: [
      'react',
      'react-dom',
      'react/jsx-dev-runtime',
      'react/jsx-runtime'
    ]
  },
  esbuild: { jsxDev: true, jsx: 'automatic', jsxImportSource: undefined },
  build: {
    target: [ 'es2020', 'edge88', 'firefox78', 'chrome87', 'safari14' ],
    cssTarget: [ 'es2020', 'edge88', 'firefox78', 'chrome87', 'safari14' ],
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: { onwarn: [Function: onwarn] },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    copyPublicDir: true,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    ssrEmitAssets: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] },
    modulePreload: { polyfill: true },
    cssMinify: true
  },
  configFile: '/workspace/Synapse/vite.config.ts',
  configFileDependencies: [ '/workspace/Synapse/vite.config.ts' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    optimizeDeps: { force: undefined },
    server: { host: undefined }
  },
  root: '/workspace/Synapse',
  base: '/',
  decodedBase: '/',
  rawBase: '/',
  publicDir: '/workspace/Synapse/public',
  cacheDir: '/workspace/Synapse/node_modules/.vite',
  command: 'serve',
  mode: 'development',
  ssr: {
    target: 'node',
    optimizeDeps: { noDiscovery: true, esbuildOptions: [Object] }
  },
  isWorker: false,
  mainConfig: null,
  bundleChain: [],
  isProduction: false,
  css: { lightningcss: undefined },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: '::',
    allowedHosts: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined,
    headers: undefined
  },
  envDir: '/workspace/Synapse',
  env: { BASE_URL: '/', MODE: 'development', DEV: true, PROD: false },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(1) {
    'fnpd_/workspace/Synapse' => {
      dir: '/workspace/Synapse',
      data: [Object],
      hasSideEffects: [Function: hasSideEffects],
      webResolvedImports: {},
      nodeResolvedImports: {},
      setResolvedCache: [Function: setResolvedCache],
      getResolvedCache: [Function: getResolvedCache]
    },
    set: [Function (anonymous)]
  },
  createResolver: [Function: createResolver],
  worker: { format: 'iife', plugins: '() => plugins', rollupOptions: {} },
  appType: 'spa',
  experimental: { importGlobRestoreExtension: false, hmrPartialAccept: false },
  webSocketToken: 'A_NFzmdWFpjX',
  additionalAllowedHosts: [ '::', '::' ],
  getSortedPlugins: [Function: getSortedPlugins],
  getSortedPluginHooks: [Function: getSortedPluginHooks]
}
2025-08-25T21:55:44.002Z vite:deps removing old cache dir /workspace/Synapse/node_modules/.vite/deps
2025-08-25T21:55:44.013Z vite:resolve 1.47ms react -> /workspace/Synapse/node_modules/react/index.js
2025-08-25T21:55:44.014Z vite:resolve 0.49ms react-dom -> /workspace/Synapse/node_modules/react-dom/index.js
2025-08-25T21:55:44.014Z vite:resolve 0.22ms react/jsx-dev-runtime -> /workspace/Synapse/node_modules/react/jsx-dev-runtime.js
2025-08-25T21:55:44.015Z vite:resolve 0.13ms react/jsx-runtime -> /workspace/Synapse/node_modules/react/jsx-runtime.js
2025-08-25T21:55:44.017Z vite:deps scanning for dependencies...

  VITE v5.4.19  ready in 318 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://172.30.1.98:8080/
  ➜  press h + enter to show help
2025-08-25T21:55:44.060Z vite:deps Crawling dependencies using entries: 
  /workspace/Synapse/index.html
2025-08-25T21:55:44.374Z vite:resolve 0.36ms /src/main.tsx -> /workspace/Synapse/src/main.tsx
2025-08-25T21:55:44.377Z vite:resolve 0.66ms react-dom/client -> /workspace/Synapse/node_modules/react-dom/client.js
2025-08-25T21:55:44.378Z vite:resolve 0.13ms ./App.tsx -> /workspace/Synapse/src/App.tsx
2025-08-25T21:55:44.379Z vite:resolve 0.24ms react/jsx-runtime -> /workspace/Synapse/node_modules/react/jsx-runtime.js
2025-08-25T21:55:44.381Z vite:resolve 0.34ms /workspace/Synapse/src/components/ui/toaster -> /workspace/Synapse/src/components/ui/toaster.tsx
2025-08-25T21:55:44.382Z vite:resolve 0.58ms @/components/ui/toaster -> /workspace/Synapse/src/components/ui/toaster.tsx
2025-08-25T21:55:44.382Z vite:resolve 0.14ms /workspace/Synapse/src/components/ui/sonner -> /workspace/Synapse/src/components/ui/sonner.tsx
2025-08-25T21:55:44.382Z vite:resolve 0.23ms @/components/ui/sonner -> /workspace/Synapse/src/components/ui/sonner.tsx
2025-08-25T21:55:44.383Z vite:resolve 0.08ms /workspace/Synapse/src/components/ui/tooltip -> /workspace/Synapse/src/components/ui/tooltip.tsx
2025-08-25T21:55:44.383Z vite:resolve 0.17ms @/components/ui/tooltip -> /workspace/Synapse/src/components/ui/tooltip.tsx
2025-08-25T21:55:44.383Z vite:resolve 0.45ms @tanstack/react-query -> /workspace/Synapse/node_modules/@tanstack/react-query/build/modern/index.js
2025-08-25T21:55:44.384Z vite:resolve 0.31ms react-router-dom -> /workspace/Synapse/node_modules/react-router-dom/dist/index.js
2025-08-25T21:55:44.385Z vite:resolve 0.44ms next-themes -> /workspace/Synapse/node_modules/next-themes/dist/index.mjs
2025-08-25T21:55:44.385Z vite:resolve 0.11ms ./components/layout/AppLayout -> /workspace/Synapse/src/components/layout/AppLayout.tsx
2025-08-25T21:55:44.386Z vite:resolve 0.11ms ./pages/Dashboard -> /workspace/Synapse/src/pages/Dashboard.tsx
2025-08-25T21:55:44.386Z vite:resolve 0.11ms ./pages/Documents -> /workspace/Synapse/src/pages/Documents.tsx
2025-08-25T21:55:44.387Z vite:resolve 0.19ms ./pages/Meetings -> /workspace/Synapse/src/pages/Meetings.tsx
2025-08-25T21:55:44.387Z vite:resolve 0.13ms ./pages/Proposals -> /workspace/Synapse/src/pages/Proposals.tsx
2025-08-25T21:55:44.387Z vite:resolve 0.09ms ./pages/Knowledge -> /workspace/Synapse/src/pages/Knowledge.tsx
2025-08-25T21:55:44.388Z vite:resolve 0.13ms ./pages/Settings -> /workspace/Synapse/src/pages/Settings.tsx
2025-08-25T21:55:44.389Z vite:resolve 0.14ms ./pages/Workflows -> /workspace/Synapse/src/pages/Workflows.tsx
2025-08-25T21:55:44.389Z vite:resolve 0.09ms ./pages/Analytics -> /workspace/Synapse/src/pages/Analytics.tsx
2025-08-25T21:55:44.390Z vite:resolve 0.13ms ./pages/Collaboration -> /workspace/Synapse/src/pages/Collaboration.tsx
2025-08-25T21:55:44.391Z vite:resolve 0.11ms ./pages/Security -> /workspace/Synapse/src/pages/Security.tsx
2025-08-25T21:55:44.392Z vite:resolve 0.14ms ./pages/NotFound -> /workspace/Synapse/src/pages/NotFound.tsx
2025-08-25T21:55:44.392Z vite:resolve 0.09ms /workspace/Synapse/src/hooks/use-auth -> /workspace/Synapse/src/hooks/use-auth.tsx
2025-08-25T21:55:44.392Z vite:resolve 0.16ms @/hooks/use-auth -> /workspace/Synapse/src/hooks/use-auth.tsx
2025-08-25T21:55:44.393Z vite:resolve 0.06ms /workspace/Synapse/src/hooks/use-audit-log -> /workspace/Synapse/src/hooks/use-audit-log.tsx
2025-08-25T21:55:44.393Z vite:resolve 0.13ms @/hooks/use-audit-log -> /workspace/Synapse/src/hooks/use-audit-log.tsx
2025-08-25T21:55:44.401Z vite:resolve 0.47ms react -> /workspace/Synapse/node_modules/react/index.js
2025-08-25T21:55:44.403Z vite:resolve 1.71ms /workspace/Synapse/src/hooks/use-toast -> /workspace/Synapse/src/hooks/use-toast.ts
2025-08-25T21:55:44.403Z vite:resolve 1.80ms @/hooks/use-toast -> /workspace/Synapse/src/hooks/use-toast.ts
2025-08-25T21:55:44.404Z vite:resolve 1.14ms ./AppSidebar -> /workspace/Synapse/src/components/layout/AppSidebar.tsx
2025-08-25T21:55:44.404Z vite:resolve 1.14ms @radix-ui/react-tooltip -> /workspace/Synapse/node_modules/@radix-ui/react-tooltip/dist/index.mjs
2025-08-25T21:55:44.409Z vite:resolve 0.96ms ./AppHeader -> /workspace/Synapse/src/components/layout/AppHeader.tsx
2025-08-25T21:55:44.409Z vite:resolve 0.99ms sonner -> /workspace/Synapse/node_modules/sonner/dist/index.mjs
2025-08-25T21:55:44.409Z vite:resolve 1.13ms /workspace/Synapse/src/lib/utils -> /workspace/Synapse/src/lib/utils.ts
2025-08-25T21:55:44.409Z vite:resolve 1.37ms @/lib/utils -> /workspace/Synapse/src/lib/utils.ts
2025-08-25T21:55:44.410Z vite:resolve 0.35ms /workspace/Synapse/src/components/workflow/WorkflowManager -> /workspace/Synapse/src/components/workflow/WorkflowManager.tsx
2025-08-25T21:55:44.410Z vite:resolve 0.54ms @/components/workflow/WorkflowManager -> /workspace/Synapse/src/components/workflow/WorkflowManager.tsx
2025-08-25T21:55:44.411Z vite:resolve 0.40ms lucide-react -> /workspace/Synapse/node_modules/lucide-react/dist/esm/lucide-react.js
2025-08-25T21:55:44.412Z vite:resolve 0.29ms ./PWAPrompt -> /workspace/Synapse/src/components/layout/PWAPrompt.tsx
2025-08-25T21:55:44.413Z vite:resolve 0.09ms /workspace/Synapse/src/components/ui/card -> /workspace/Synapse/src/components/ui/card.tsx
2025-08-25T21:55:44.413Z vite:resolve 0.32ms @/components/ui/card -> /workspace/Synapse/src/components/ui/card.tsx
2025-08-25T21:55:44.417Z vite:resolve 0.18ms /workspace/Synapse/src/components/dashboard/KPICard -> /workspace/Synapse/src/components/dashboard/KPICard.tsx
2025-08-25T21:55:44.417Z vite:resolve 0.24ms /workspace/Synapse/src/hooks/use-mobile -> /workspace/Synapse/src/hooks/use-mobile.tsx
2025-08-25T21:55:44.417Z vite:resolve 0.55ms @/components/dashboard/KPICard -> /workspace/Synapse/src/components/dashboard/KPICard.tsx
2025-08-25T21:55:44.417Z vite:resolve 0.47ms @/hooks/use-mobile -> /workspace/Synapse/src/hooks/use-mobile.tsx
2025-08-25T21:55:44.418Z vite:resolve 0.37ms /workspace/Synapse/src/components/ui/toast -> /workspace/Synapse/src/components/ui/toast.tsx
2025-08-25T21:55:44.418Z vite:resolve 0.40ms /workspace/Synapse/src/components/collaboration/CollaborationHub -> /workspace/Synapse/src/components/collaboration/CollaborationHub.tsx
2025-08-25T21:55:44.418Z vite:resolve 0.41ms /workspace/Synapse/src/components/ui/button -> /workspace/Synapse/src/components/ui/button.tsx
2025-08-25T21:55:44.418Z vite:resolve 0.72ms @/components/ui/toast -> /workspace/Synapse/src/components/ui/toast.tsx
2025-08-25T21:55:44.418Z vite:resolve 0.71ms @/components/collaboration/CollaborationHub -> /workspace/Synapse/src/components/collaboration/CollaborationHub.tsx
2025-08-25T21:55:44.418Z vite:resolve 0.69ms @/components/ui/button -> /workspace/Synapse/src/components/ui/button.tsx
2025-08-25T21:55:44.422Z vite:resolve 0.09ms /workspace/Synapse/src/components/ui/tabs -> /workspace/Synapse/src/components/ui/tabs.tsx
2025-08-25T21:55:44.422Z vite:resolve 0.18ms @/components/ui/tabs -> /workspace/Synapse/src/components/ui/tabs.tsx
2025-08-25T21:55:44.423Z vite:resolve 0.13ms /workspace/Synapse/src/components/ui/badge -> /workspace/Synapse/src/components/ui/badge.tsx
2025-08-25T21:55:44.423Z vite:resolve 0.61ms @/components/ui/badge -> /workspace/Synapse/src/components/ui/badge.tsx
2025-08-25T21:55:44.425Z vite:resolve 0.12ms /workspace/Synapse/src/components/analytics/AnalyticsDashboard -> /workspace/Synapse/src/components/analytics/AnalyticsDashboard.tsx
2025-08-25T21:55:44.425Z vite:resolve 0.93ms @/components/analytics/AnalyticsDashboard -> /workspace/Synapse/src/components/analytics/AnalyticsDashboard.tsx
2025-08-25T21:55:44.427Z vite:resolve 0.73ms clsx -> /workspace/Synapse/node_modules/clsx/dist/clsx.mjs
2025-08-25T21:55:44.427Z vite:resolve 0.76ms /workspace/Synapse/src/components/ui/input -> /workspace/Synapse/src/components/ui/input.tsx
2025-08-25T21:55:44.427Z vite:resolve 1.20ms /workspace/Synapse/src/hooks/use-loading -> /workspace/Synapse/src/hooks/use-loading.ts
2025-08-25T21:55:44.428Z vite:resolve 1.23ms /workspace/Synapse/src/components/ui/checkbox -> /workspace/Synapse/src/components/ui/checkbox.tsx
2025-08-25T21:55:44.428Z vite:resolve 1.24ms /workspace/Synapse/src/components/analytics/ExportManager -> /workspace/Synapse/src/components/analytics/ExportManager.tsx
2025-08-25T21:55:44.428Z vite:resolve 1.61ms @/components/ui/input -> /workspace/Synapse/src/components/ui/input.tsx
2025-08-25T21:55:44.428Z vite:resolve 1.59ms @/hooks/use-loading -> /workspace/Synapse/src/hooks/use-loading.ts
2025-08-25T21:55:44.428Z vite:resolve 1.49ms @/components/ui/checkbox -> /workspace/Synapse/src/components/ui/checkbox.tsx
2025-08-25T21:55:44.428Z vite:resolve 1.45ms @/components/analytics/ExportManager -> /workspace/Synapse/src/components/analytics/ExportManager.tsx
2025-08-25T21:55:44.431Z vite:resolve 0.57ms tailwind-merge -> /workspace/Synapse/node_modules/tailwind-merge/dist/bundle-mjs.mjs
2025-08-25T21:55:44.431Z vite:resolve 0.50ms /workspace/Synapse/src/components/ui/table -> /workspace/Synapse/src/components/ui/table.tsx
2025-08-25T21:55:44.431Z vite:resolve 0.76ms @/components/ui/table -> /workspace/Synapse/src/components/ui/table.tsx
2025-08-25T21:55:44.431Z vite:resolve 0.22ms /workspace/Synapse/src/lib/error-handling -> /workspace/Synapse/src/lib/error-handling.ts
2025-08-25T21:55:44.431Z vite:resolve 0.25ms /workspace/Synapse/src/services/meeting-service -> /workspace/Synapse/src/services/meeting-service.ts
2025-08-25T21:55:44.432Z vite:resolve 0.26ms /workspace/Synapse/src/components/analytics/CustomDashboard -> /workspace/Synapse/src/components/analytics/CustomDashboard.tsx
2025-08-25T21:55:44.432Z vite:resolve 0.46ms @/lib/error-handling -> /workspace/Synapse/src/lib/error-handling.ts
2025-08-25T21:55:44.432Z vite:resolve 0.43ms @/services/meeting-service -> /workspace/Synapse/src/services/meeting-service.ts
2025-08-25T21:55:44.432Z vite:resolve 0.43ms @/components/analytics/CustomDashboard -> /workspace/Synapse/src/components/analytics/CustomDashboard.tsx
2025-08-25T21:55:44.439Z vite:resolve 2.67ms date-fns -> /workspace/Synapse/node_modules/date-fns/index.mjs
2025-08-25T21:55:44.439Z vite:resolve 2.53ms /workspace/Synapse/src/services/document-service -> /workspace/Synapse/src/services/document-service.ts
2025-08-25T21:55:44.439Z vite:resolve 2.56ms /workspace/Synapse/src/components/ui/chart -> /workspace/Synapse/src/components/ui/chart.tsx
2025-08-25T21:55:44.439Z vite:resolve 2.57ms /workspace/Synapse/src/components/ui/label -> /workspace/Synapse/src/components/ui/label.tsx
2025-08-25T21:55:44.439Z vite:resolve 2.98ms @/services/document-service -> /workspace/Synapse/src/services/document-service.ts
2025-08-25T21:55:44.439Z vite:resolve 2.97ms @/components/ui/chart -> /workspace/Synapse/src/components/ui/chart.tsx
2025-08-25T21:55:44.439Z vite:resolve 2.97ms @/components/ui/label -> /workspace/Synapse/src/components/ui/label.tsx
2025-08-25T21:55:44.440Z vite:resolve 0.92ms recharts -> /workspace/Synapse/node_modules/recharts/es6/index.js
2025-08-25T21:55:44.441Z vite:resolve 0.72ms /workspace/Synapse/src/components/dialogs/DocumentUploadDialog -> /workspace/Synapse/src/components/dialogs/DocumentUploadDialog.tsx
2025-08-25T21:55:44.441Z vite:resolve 1.22ms @/components/dialogs/DocumentUploadDialog -> /workspace/Synapse/src/components/dialogs/DocumentUploadDialog.tsx
2025-08-25T21:55:44.441Z vite:resolve 0.07ms /workspace/Synapse/src/components/ui/switch -> /workspace/Synapse/src/components/ui/switch.tsx
2025-08-25T21:55:44.441Z vite:resolve 0.13ms @/components/ui/switch -> /workspace/Synapse/src/components/ui/switch.tsx
2025-08-25T21:55:44.443Z vite:resolve 0.72ms ./CommentSystem -> /workspace/Synapse/src/components/collaboration/CommentSystem.tsx
2025-08-25T21:55:44.443Z vite:resolve 0.41ms /workspace/Synapse/src/components/ui/dropdown-menu -> /workspace/Synapse/src/components/ui/dropdown-menu.tsx
2025-08-25T21:55:44.443Z vite:resolve 0.43ms /workspace/Synapse/src/components/ui/confirm-dialog -> /workspace/Synapse/src/components/ui/confirm-dialog.tsx
2025-08-25T21:55:44.443Z vite:resolve 0.44ms /workspace/Synapse/src/components/ui/separator -> /workspace/Synapse/src/components/ui/separator.tsx
2025-08-25T21:55:44.443Z vite:resolve 1.04ms @/components/ui/dropdown-menu -> /workspace/Synapse/src/components/ui/dropdown-menu.tsx
2025-08-25T21:55:44.443Z vite:resolve 1.02ms @/components/ui/confirm-dialog -> /workspace/Synapse/src/components/ui/confirm-dialog.tsx
2025-08-25T21:55:44.443Z vite:resolve 0.71ms @/components/ui/separator -> /workspace/Synapse/src/components/ui/separator.tsx
2025-08-25T21:55:44.447Z vite:resolve 0.83ms @radix-ui/react-toast -> /workspace/Synapse/node_modules/@radix-ui/react-toast/dist/index.mjs
2025-08-25T21:55:44.447Z vite:resolve 0.84ms ./TeamManagement -> /workspace/Synapse/src/components/collaboration/TeamManagement.tsx
2025-08-25T21:55:44.448Z vite:resolve 0.78ms /workspace/Synapse/src/components/documents/DocumentPreviewDialog -> /workspace/Synapse/src/components/documents/DocumentPreviewDialog.tsx
2025-08-25T21:55:44.448Z vite:resolve 0.82ms /workspace/Synapse/src/components/ui/avatar -> /workspace/Synapse/src/components/ui/avatar.tsx
2025-08-25T21:55:44.448Z vite:resolve 0.84ms /workspace/Synapse/src/components/dialogs/AuditLogDialog -> /workspace/Synapse/src/components/dialogs/AuditLogDialog.tsx
2025-08-25T21:55:44.448Z vite:resolve 1.21ms @/components/documents/DocumentPreviewDialog -> /workspace/Synapse/src/components/documents/DocumentPreviewDialog.tsx
2025-08-25T21:55:44.448Z vite:resolve 1.20ms @/components/ui/avatar -> /workspace/Synapse/src/components/ui/avatar.tsx
2025-08-25T21:55:44.448Z vite:resolve 1.21ms @/components/dialogs/AuditLogDialog -> /workspace/Synapse/src/components/dialogs/AuditLogDialog.tsx
2025-08-25T21:55:44.449Z vite:resolve 1.06ms @radix-ui/react-tabs -> /workspace/Synapse/node_modules/@radix-ui/react-tabs/dist/index.mjs
2025-08-25T21:55:44.449Z vite:resolve 1.09ms class-variance-authority -> /workspace/Synapse/node_modules/class-variance-authority/dist/index.mjs
2025-08-25T21:55:44.449Z vite:resolve 1.11ms ./ActivityFeed -> /workspace/Synapse/src/components/collaboration/ActivityFeed.tsx
2025-08-25T21:55:44.450Z vite:resolve 1.10ms /workspace/Synapse/src/services/proposal-service -> /workspace/Synapse/src/services/proposal-service.ts
2025-08-25T21:55:44.450Z vite:resolve 1.12ms /workspace/Synapse/src/services/knowledge-service -> /workspace/Synapse/src/services/knowledge-service.ts
2025-08-25T21:55:44.450Z vite:resolve 1.12ms /workspace/Synapse/src/hooks/use-pwa -> /workspace/Synapse/src/hooks/use-pwa.ts
2025-08-25T21:55:44.450Z vite:resolve 1.12ms /workspace/Synapse/src/components/documents/DocumentVersionDialog -> /workspace/Synapse/src/components/documents/DocumentVersionDialog.tsx
2025-08-25T21:55:44.450Z vite:resolve 1.49ms @/services/proposal-service -> /workspace/Synapse/src/services/proposal-service.ts
2025-08-25T21:55:44.450Z vite:resolve 1.46ms @/services/knowledge-service -> /workspace/Synapse/src/services/knowledge-service.ts
2025-08-25T21:55:44.450Z vite:resolve 1.47ms @/hooks/use-pwa -> /workspace/Synapse/src/hooks/use-pwa.ts
2025-08-25T21:55:44.450Z vite:resolve 1.48ms @/components/documents/DocumentVersionDialog -> /workspace/Synapse/src/components/documents/DocumentVersionDialog.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.51ms ./CollaborationPresence -> /workspace/Synapse/src/components/collaboration/CollaborationPresence.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.49ms /workspace/Synapse/src/components/notifications/NotificationCenter -> /workspace/Synapse/src/components/notifications/NotificationCenter.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.52ms /workspace/Synapse/src/services/settings-service -> /workspace/Synapse/src/services/settings-service.ts
2025-08-25T21:55:44.451Z vite:resolve 0.53ms /workspace/Synapse/src/components/ui/progress -> /workspace/Synapse/src/components/ui/progress.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.53ms /workspace/Synapse/src/components/documents/DocumentFilters -> /workspace/Synapse/src/components/documents/DocumentFilters.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.86ms @/components/notifications/NotificationCenter -> /workspace/Synapse/src/components/notifications/NotificationCenter.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.86ms @/services/settings-service -> /workspace/Synapse/src/services/settings-service.ts
2025-08-25T21:55:44.451Z vite:resolve 0.79ms @/components/ui/progress -> /workspace/Synapse/src/components/ui/progress.tsx
2025-08-25T21:55:44.451Z vite:resolve 0.78ms @/components/documents/DocumentFilters -> /workspace/Synapse/src/components/documents/DocumentFilters.tsx
2025-08-25T21:55:44.456Z vite:resolve 2.92ms ./MobileNav -> /workspace/Synapse/src/components/layout/MobileNav.tsx
2025-08-25T21:55:44.456Z vite:resolve 0.28ms /workspace/Synapse/src/components/documents/DocumentTableSkeleton -> /workspace/Synapse/src/components/documents/DocumentTableSkeleton.tsx
2025-08-25T21:55:44.456Z vite:resolve 0.84ms @/components/documents/DocumentTableSkeleton -> /workspace/Synapse/src/components/documents/DocumentTableSkeleton.tsx
2025-08-25T21:55:44.467Z vite:resolve 0.82ms @radix-ui/react-slot -> /workspace/Synapse/node_modules/@radix-ui/react-slot/dist/index.mjs
2025-08-25T21:55:44.468Z vite:resolve 0.25ms /workspace/Synapse/src/components/ui/dialog -> /workspace/Synapse/src/components/ui/dialog.tsx
2025-08-25T21:55:44.468Z vite:resolve 0.34ms /workspace/Synapse/src/components/ui/select -> /workspace/Synapse/src/components/ui/select.tsx
2025-08-25T21:55:44.468Z vite:resolve 0.37ms /workspace/Synapse/src/components/ui/alert-dialog -> /workspace/Synapse/src/components/ui/alert-dialog.tsx
2025-08-25T21:55:44.468Z vite:resolve 0.38ms /workspace/Synapse/src/hooks/use-keyboard-shortcuts -> /workspace/Synapse/src/hooks/use-keyboard-shortcuts.ts
2025-08-25T21:55:44.468Z vite:resolve 0.94ms @/components/ui/dialog -> /workspace/Synapse/src/components/ui/dialog.tsx
2025-08-25T21:55:44.468Z vite:resolve 0.89ms @/components/ui/select -> /workspace/Synapse/src/components/ui/select.tsx
2025-08-25T21:55:44.468Z vite:resolve 0.87ms @/components/ui/alert-dialog -> /workspace/Synapse/src/components/ui/alert-dialog.tsx
2025-08-25T21:55:44.468Z vite:resolve 0.84ms @/hooks/use-keyboard-shortcuts -> /workspace/Synapse/src/hooks/use-keyboard-shortcuts.ts
2025-08-25T21:55:44.487Z vite:resolve 17.69ms @radix-ui/react-checkbox -> /workspace/Synapse/node_modules/@radix-ui/react-checkbox/dist/index.mjs
2025-08-25T21:55:44.489Z vite:resolve 0.17ms /workspace/Synapse/src/hooks/use-workflow -> /workspace/Synapse/src/hooks/use-workflow.ts
2025-08-25T21:55:44.489Z vite:resolve 0.93ms @/hooks/use-workflow -> /workspace/Synapse/src/hooks/use-workflow.ts
2025-08-25T21:55:44.490Z vite:resolve 0.37ms ./WorkflowCreateDialog -> /workspace/Synapse/src/components/workflow/WorkflowCreateDialog.tsx
2025-08-25T21:55:44.492Z vite:resolve 0.37ms ./WorkflowStepDialog -> /workspace/Synapse/src/components/workflow/WorkflowStepDialog.tsx
2025-08-25T21:55:44.492Z vite:resolve 0.32ms /workspace/Synapse/src/components/ui/date-range-picker -> /workspace/Synapse/src/components/ui/date-range-picker.tsx
2025-08-25T21:55:44.492Z vite:resolve 0.52ms @/components/ui/date-range-picker -> /workspace/Synapse/src/components/ui/date-range-picker.tsx
2025-08-25T21:55:44.500Z vite:resolve 0.59ms ./AdvancedChart -> /workspace/Synapse/src/components/analytics/AdvancedChart.tsx
2025-08-25T21:55:44.504Z vite:resolve 1.63ms @radix-ui/react-label -> /workspace/Synapse/node_modules/@radix-ui/react-label/dist/index.mjs
2025-08-25T21:55:44.504Z vite:resolve 1.59ms @radix-ui/react-separator -> /workspace/Synapse/node_modules/@radix-ui/react-separator/dist/index.mjs
2025-08-25T21:55:44.504Z vite:resolve 1.60ms @radix-ui/react-switch -> /workspace/Synapse/node_modules/@radix-ui/react-switch/dist/index.mjs
2025-08-25T21:55:44.505Z vite:resolve 1.09ms /workspace/Synapse/src/hooks/use-analytics -> /workspace/Synapse/src/hooks/use-analytics.ts
2025-08-25T21:55:44.505Z vite:resolve 1.59ms @/hooks/use-analytics -> /workspace/Synapse/src/hooks/use-analytics.ts
2025-08-25T21:55:44.506Z vite:resolve 0.62ms @radix-ui/react-dropdown-menu -> /workspace/Synapse/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
2025-08-25T21:55:44.506Z vite:resolve 0.61ms @radix-ui/react-avatar -> /workspace/Synapse/node_modules/@radix-ui/react-avatar/dist/index.mjs
2025-08-25T21:55:44.512Z vite:resolve 0.14ms /workspace/Synapse/src/components/ui/skeleton -> /workspace/Synapse/src/components/ui/skeleton.tsx
2025-08-25T21:55:44.512Z vite:resolve 0.24ms @/components/ui/skeleton -> /workspace/Synapse/src/components/ui/skeleton.tsx
2025-08-25T21:55:44.514Z vite:resolve 0.78ms @radix-ui/react-alert-dialog -> /workspace/Synapse/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
2025-08-25T21:55:44.514Z vite:resolve 0.16ms /workspace/Synapse/src/components/ui/textarea -> /workspace/Synapse/src/components/ui/textarea.tsx
2025-08-25T21:55:44.514Z vite:resolve 0.29ms @/components/ui/textarea -> /workspace/Synapse/src/components/ui/textarea.tsx
2025-08-25T21:55:44.516Z vite:resolve 0.18ms ./MetricsGrid -> /workspace/Synapse/src/components/analytics/MetricsGrid.tsx
2025-08-25T21:55:44.519Z vite:resolve 0.08ms /workspace/Synapse/src/components/ui/sheet -> /workspace/Synapse/src/components/ui/sheet.tsx
2025-08-25T21:55:44.519Z vite:resolve 0.31ms @/components/ui/sheet -> /workspace/Synapse/src/components/ui/sheet.tsx
2025-08-25T21:55:44.519Z vite:resolve 0.27ms ./ReportBuilder -> /workspace/Synapse/src/components/analytics/ReportBuilder.tsx
2025-08-25T21:55:44.521Z vite:resolve 0.20ms ./WorkflowAnalytics -> /workspace/Synapse/src/components/analytics/WorkflowAnalytics.tsx
2025-08-25T21:55:44.521Z vite:resolve 0.26ms /workspace/Synapse/src/components/ui/scroll-area -> /workspace/Synapse/src/components/ui/scroll-area.tsx
2025-08-25T21:55:44.521Z vite:resolve 0.38ms @/components/ui/scroll-area -> /workspace/Synapse/src/components/ui/scroll-area.tsx
2025-08-25T21:55:44.524Z vite:resolve 0.35ms /workspace/Synapse/src/hooks/use-collaboration -> /workspace/Synapse/src/hooks/use-collaboration.ts
2025-08-25T21:55:44.524Z vite:resolve 0.80ms @/hooks/use-collaboration -> /workspace/Synapse/src/hooks/use-collaboration.ts
2025-08-25T21:55:44.526Z vite:resolve 0.96ms @radix-ui/react-select -> /workspace/Synapse/node_modules/@radix-ui/react-select/dist/index.mjs
2025-08-25T21:55:44.526Z vite:resolve 1.12ms @radix-ui/react-dialog -> /workspace/Synapse/node_modules/@radix-ui/react-dialog/dist/index.mjs
2025-08-25T21:55:44.527Z vite:resolve 0.56ms @radix-ui/react-progress -> /workspace/Synapse/node_modules/@radix-ui/react-progress/dist/index.mjs
2025-08-25T21:55:44.528Z vite:resolve 0.39ms /workspace/Synapse/src/components/ui/popover -> /workspace/Synapse/src/components/ui/popover.tsx
2025-08-25T21:55:44.528Z vite:resolve 0.61ms @/components/ui/popover -> /workspace/Synapse/src/components/ui/popover.tsx
2025-08-25T21:55:44.529Z vite:resolve 0.26ms /workspace/Synapse/src/hooks/use-notifications -> /workspace/Synapse/src/hooks/use-notifications.ts
2025-08-25T21:55:44.529Z vite:resolve 0.56ms @/hooks/use-notifications -> /workspace/Synapse/src/hooks/use-notifications.ts
2025-08-25T21:55:44.536Z vite:resolve 0.55ms @radix-ui/react-scroll-area -> /workspace/Synapse/node_modules/@radix-ui/react-scroll-area/dist/index.mjs
2025-08-25T21:55:44.537Z vite:resolve 0.68ms @radix-ui/react-popover -> /workspace/Synapse/node_modules/@radix-ui/react-popover/dist/index.mjs
2025-08-25T21:55:44.539Z vite:resolve 0.12ms /workspace/Synapse/src/components/ui/calendar -> /workspace/Synapse/src/components/ui/calendar.tsx
2025-08-25T21:55:44.539Z vite:resolve 0.25ms @/components/ui/calendar -> /workspace/Synapse/src/components/ui/calendar.tsx
2025-08-25T21:55:44.544Z vite:resolve 0.43ms react-day-picker -> /workspace/Synapse/node_modules/react-day-picker/dist/index.esm.js
2025-08-25T21:55:44.585Z vite:deps Scan completed in 567.85ms: 
  @radix-ui/react-alert-dialog -> /workspace/Synapse/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
  @radix-ui/react-avatar -> /workspace/Synapse/node_modules/@radix-ui/react-avatar/dist/index.mjs
  @radix-ui/react-checkbox -> /workspace/Synapse/node_modules/@radix-ui/react-checkbox/dist/index.mjs
  @radix-ui/react-dialog -> /workspace/Synapse/node_modules/@radix-ui/react-dialog/dist/index.mjs
  @radix-ui/react-dropdown-menu -> /workspace/Synapse/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
  @radix-ui/react-label -> /workspace/Synapse/node_modules/@radix-ui/react-label/dist/index.mjs
  @radix-ui/react-popover -> /workspace/Synapse/node_modules/@radix-ui/react-popover/dist/index.mjs
  @radix-ui/react-progress -> /workspace/Synapse/node_modules/@radix-ui/react-progress/dist/index.mjs
  @radix-ui/react-scroll-area -> /workspace/Synapse/node_modules/@radix-ui/react-scroll-area/dist/index.mjs
  @radix-ui/react-select -> /workspace/Synapse/node_modules/@radix-ui/react-select/dist/index.mjs
  @radix-ui/react-separator -> /workspace/Synapse/node_modules/@radix-ui/react-separator/dist/index.mjs
  @radix-ui/react-slot -> /workspace/Synapse/node_modules/@radix-ui/react-slot/dist/index.mjs
  @radix-ui/react-switch -> /workspace/Synapse/node_modules/@radix-ui/react-switch/dist/index.mjs
  @radix-ui/react-tabs -> /workspace/Synapse/node_modules/@radix-ui/react-tabs/dist/index.mjs
  @radix-ui/react-toast -> /workspace/Synapse/node_modules/@radix-ui/react-toast/dist/index.mjs
  @radix-ui/react-tooltip -> /workspace/Synapse/node_modules/@radix-ui/react-tooltip/dist/index.mjs
  @tanstack/react-query -> /workspace/Synapse/node_modules/@tanstack/react-query/build/modern/index.js
  class-variance-authority -> /workspace/Synapse/node_modules/class-variance-authority/dist/index.mjs
  clsx -> /workspace/Synapse/node_modules/clsx/dist/clsx.mjs
  date-fns -> /workspace/Synapse/node_modules/date-fns/index.mjs
  lucide-react -> /workspace/Synapse/node_modules/lucide-react/dist/esm/lucide-react.js
  next-themes -> /workspace/Synapse/node_modules/next-themes/dist/index.mjs
  react -> /workspace/Synapse/node_modules/react/index.js
  react-day-picker -> /workspace/Synapse/node_modules/react-day-picker/dist/index.esm.js
  react-dom/client -> /workspace/Synapse/node_modules/react-dom/client.js
  react-router-dom -> /workspace/Synapse/node_modules/react-router-dom/dist/index.js
  react/jsx-runtime -> /workspace/Synapse/node_modules/react/jsx-runtime.js
  recharts -> /workspace/Synapse/node_modules/recharts/es6/index.js
  sonner -> /workspace/Synapse/node_modules/sonner/dist/index.mjs
  tailwind-merge -> /workspace/Synapse/node_modules/tailwind-merge/dist/bundle-mjs.mjs
2025-08-25T21:55:44.588Z vite:deps creating package.json in /workspace/Synapse/node_modules/.vite/deps_temp_c8c41e36
2025-08-25T21:55:44.648Z vite:resolve 0.38ms react-dom -> /workspace/Synapse/node_modules/react-dom/index.js
2025-08-25T21:55:44.649Z vite:resolve 0.41ms react -> /workspace/Synapse/node_modules/react/index.js
2025-08-25T21:55:44.658Z vite:resolve 0.46ms clsx -> /workspace/Synapse/node_modules/clsx/dist/clsx.mjs
2025-08-25T21:55:44.662Z vite:resolve 0.36ms react/jsx-runtime -> /workspace/Synapse/node_modules/react/jsx-runtime.js
2025-08-25T21:55:44.662Z vite:resolve 0.46ms @tanstack/query-core -> /workspace/Synapse/node_modules/@tanstack/query-core/build/modern/index.js
2025-08-25T21:55:44.687Z vite:resolve 1.26ms react -> /workspace/Synapse/node_modules/react/index.js
2025-08-25T21:55:44.757Z vite:resolve 2.02ms es-toolkit/compat/last -> /workspace/Synapse/node_modules/es-toolkit/compat/last.js
2025-08-25T21:55:44.757Z vite:resolve 2.12ms decimal.js-light -> /workspace/Synapse/node_modules/decimal.js-light/decimal.mjs
2025-08-25T21:55:44.772Z vite:resolve 3.62ms es-toolkit/compat/maxBy -> /workspace/Synapse/node_modules/es-toolkit/compat/maxBy.js
2025-08-25T21:55:44.776Z vite:resolve 7.26ms es-toolkit/compat/get -> /workspace/Synapse/node_modules/es-toolkit/compat/get.js
2025-08-25T21:55:44.776Z vite:resolve 6.95ms react-dom -> /workspace/Synapse/node_modules/react-dom/index.js
2025-08-25T21:55:44.776Z vite:resolve 6.94ms es-toolkit/compat/omit -> /workspace/Synapse/node_modules/es-toolkit/compat/omit.js
2025-08-25T21:55:44.783Z vite:resolve 0.71ms reselect -> /workspace/Synapse/node_modules/reselect/dist/reselect.mjs
2025-08-25T21:55:44.815Z vite:resolve 9.18ms @radix-ui/primitive -> /workspace/Synapse/node_modules/@radix-ui/primitive/dist/index.mjs
2025-08-25T21:55:44.815Z vite:resolve 8.50ms @radix-ui/react-context -> /workspace/Synapse/node_modules/@radix-ui/react-context/dist/index.mjs
2025-08-25T21:55:44.815Z vite:resolve 7.40ms @radix-ui/react-primitive -> /workspace/Synapse/node_modules/@radix-ui/react-primitive/dist/index.mjs
2025-08-25T21:55:44.815Z vite:resolve 7.15ms es-toolkit/compat/sortBy -> /workspace/Synapse/node_modules/es-toolkit/compat/sortBy.js
2025-08-25T21:55:44.815Z vite:resolve 6.85ms @radix-ui/react-compose-refs -> /workspace/Synapse/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
2025-08-25T21:55:44.815Z vite:resolve 5.21ms es-toolkit/compat/sumBy -> /workspace/Synapse/node_modules/es-toolkit/compat/sumBy.js
2025-08-25T21:55:44.824Z vite:resolve 3.86ms victory-vendor/d3-scale -> /workspace/Synapse/node_modules/victory-vendor/es/d3-scale.js
2025-08-25T21:55:44.824Z vite:resolve 3.90ms @radix-ui/number -> /workspace/Synapse/node_modules/@radix-ui/number/dist/index.mjs
2025-08-25T21:55:44.824Z vite:resolve 3.87ms @reduxjs/toolkit -> /workspace/Synapse/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs
2025-08-25T21:55:44.831Z vite:resolve 4.59ms victory-vendor/d3-shape -> /workspace/Synapse/node_modules/victory-vendor/es/d3-shape.js
2025-08-25T21:55:44.831Z vite:resolve 4.50ms date-fns -> /workspace/Synapse/node_modules/date-fns/index.mjs
2025-08-25T21:55:44.869Z vite:resolve 1.19ms @radix-ui/react-use-callback-ref -> /workspace/Synapse/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
2025-08-25T21:55:44.869Z vite:resolve 1.18ms react-router -> /workspace/Synapse/node_modules/react-router/dist/index.js
2025-08-25T21:55:44.872Z vite:resolve 2.12ms @radix-ui/react-presence -> /workspace/Synapse/node_modules/@radix-ui/react-presence/dist/index.mjs
2025-08-25T21:55:44.880Z vite:resolve 9.98ms es-toolkit/compat/throttle -> /workspace/Synapse/node_modules/es-toolkit/compat/throttle.js
2025-08-25T21:55:44.884Z vite:resolve 1.01ms es-toolkit -> /workspace/Synapse/node_modules/es-toolkit/dist/index.mjs
2025-08-25T21:55:44.884Z vite:resolve 0.95ms es-toolkit/compat/uniqBy -> /workspace/Synapse/node_modules/es-toolkit/compat/uniqBy.js
2025-08-25T21:55:44.889Z vite:resolve 0.22ms es-toolkit/compat/range -> /workspace/Synapse/node_modules/es-toolkit/compat/range.js
2025-08-25T21:55:44.898Z vite:resolve 1.17ms @radix-ui/react-roving-focus -> /workspace/Synapse/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
2025-08-25T21:55:44.899Z vite:resolve 1.20ms @radix-ui/react-dialog -> /workspace/Synapse/node_modules/@radix-ui/react-dialog/dist/index.mjs
2025-08-25T21:55:44.899Z vite:resolve 1.21ms es-toolkit/compat/minBy -> /workspace/Synapse/node_modules/es-toolkit/compat/minBy.js
2025-08-25T21:55:44.906Z vite:resolve 1.54ms date-fns/locale -> /workspace/Synapse/node_modules/date-fns/locale.mjs
2025-08-25T21:55:44.906Z vite:resolve 1.53ms @radix-ui/react-use-layout-effect -> /workspace/Synapse/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
2025-08-25T21:55:44.906Z vite:resolve 1.51ms @remix-run/router -> /workspace/Synapse/node_modules/@remix-run/router/dist/router.js
2025-08-25T21:55:44.994Z vite:resolve 18.88ms @radix-ui/react-use-controllable-state -> /workspace/Synapse/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
2025-08-25T21:55:44.994Z vite:resolve 18.76ms use-sync-external-store/shim/with-selector -> /workspace/Synapse/node_modules/use-sync-external-store/shim/with-selector.js
2025-08-25T21:55:44.994Z vite:resolve 17.51ms react-is -> /workspace/Synapse/node_modules/react-is/index.js
2025-08-25T21:55:44.994Z vite:resolve 17.07ms immer -> /workspace/Synapse/node_modules/immer/dist/immer.mjs
2025-08-25T21:55:44.994Z vite:resolve 16.98ms @radix-ui/react-collection -> /workspace/Synapse/node_modules/@radix-ui/react-collection/dist/index.mjs
2025-08-25T21:55:44.994Z vite:resolve 16.65ms @radix-ui/react-dismissable-layer -> /workspace/Synapse/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
2025-08-25T21:55:44.994Z vite:resolve 16.01ms redux -> /workspace/Synapse/node_modules/redux/dist/redux.mjs
2025-08-25T21:55:44.994Z vite:resolve 15.37ms eventemitter3 -> /workspace/Synapse/node_modules/eventemitter3/index.mjs
2025-08-25T21:55:44.994Z vite:resolve 15.35ms d3-scale -> /workspace/Synapse/node_modules/d3-scale/src/index.js
2025-08-25T21:55:44.994Z vite:resolve 15.11ms @radix-ui/react-id -> /workspace/Synapse/node_modules/@radix-ui/react-id/dist/index.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.96ms @radix-ui/react-slot -> /workspace/Synapse/node_modules/@radix-ui/react-slot/dist/index.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.87ms @radix-ui/react-use-previous -> /workspace/Synapse/node_modules/@radix-ui/react-use-previous/dist/index.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.88ms @radix-ui/react-use-is-hydrated -> /workspace/Synapse/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.89ms scheduler -> /workspace/Synapse/node_modules/scheduler/index.js
2025-08-25T21:55:45.119Z vite:resolve 2.89ms react-redux -> /workspace/Synapse/node_modules/react-redux/dist/react-redux.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.90ms es-toolkit/compat/isPlainObject -> /workspace/Synapse/node_modules/es-toolkit/compat/isPlainObject.js
2025-08-25T21:55:45.119Z vite:resolve 2.90ms tiny-invariant -> /workspace/Synapse/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
2025-08-25T21:55:45.119Z vite:resolve 2.94ms @radix-ui/react-menu -> /workspace/Synapse/node_modules/@radix-ui/react-menu/dist/index.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.95ms es-toolkit/compat/isEqual -> /workspace/Synapse/node_modules/es-toolkit/compat/isEqual.js
2025-08-25T21:55:45.119Z vite:resolve 2.92ms @radix-ui/react-direction -> /workspace/Synapse/node_modules/@radix-ui/react-direction/dist/index.mjs
2025-08-25T21:55:45.119Z vite:resolve 2.92ms @radix-ui/react-focus-guards -> /workspace/Synapse/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
2025-08-25T21:55:45.150Z vite:resolve 0.41ms d3-array -> /workspace/Synapse/node_modules/d3-array/src/index.js
2025-08-25T21:55:45.154Z vite:resolve 0.46ms d3-shape -> /workspace/Synapse/node_modules/d3-shape/src/index.js
2025-08-25T21:55:45.160Z vite:resolve 0.31ms d3-time -> /workspace/Synapse/node_modules/d3-time/src/index.js
2025-08-25T21:55:45.162Z vite:resolve 0.23ms d3-interpolate -> /workspace/Synapse/node_modules/d3-interpolate/src/index.js
2025-08-25T21:55:45.168Z vite:resolve 0.37ms @radix-ui/react-popper -> /workspace/Synapse/node_modules/@radix-ui/react-popper/dist/index.mjs
2025-08-25T21:55:45.171Z vite:resolve 0.24ms @radix-ui/react-use-size -> /workspace/Synapse/node_modules/@radix-ui/react-use-size/dist/index.mjs
2025-08-25T21:55:45.186Z vite:resolve 1.65ms @radix-ui/react-focus-scope -> /workspace/Synapse/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
2025-08-25T21:55:45.186Z vite:resolve 1.76ms d3-format -> /workspace/Synapse/node_modules/d3-format/src/index.js
2025-08-25T21:55:45.186Z vite:resolve 1.77ms use-sync-external-store/shim -> /workspace/Synapse/node_modules/use-sync-external-store/shim/index.js
2025-08-25T21:55:45.186Z vite:resolve 1.77ms d3-time-format -> /workspace/Synapse/node_modules/d3-time-format/src/index.js
2025-08-25T21:55:45.186Z vite:resolve 1.73ms d3-color -> /workspace/Synapse/node_modules/d3-color/src/index.js
2025-08-25T21:55:45.186Z vite:resolve 1.73ms internmap -> /workspace/Synapse/node_modules/internmap/src/index.js
2025-08-25T21:55:45.196Z vite:resolve 0.40ms d3-path -> /workspace/Synapse/node_modules/d3-path/src/index.js
2025-08-25T21:55:45.209Z vite:resolve 4.27ms @radix-ui/react-portal -> /workspace/Synapse/node_modules/@radix-ui/react-portal/dist/index.mjs
2025-08-25T21:55:45.209Z vite:resolve 4.33ms redux-thunk -> /workspace/Synapse/node_modules/redux-thunk/dist/redux-thunk.mjs
2025-08-25T21:55:45.209Z vite:resolve 4.30ms use-sync-external-store/with-selector.js -> /workspace/Synapse/node_modules/use-sync-external-store/with-selector.js
2025-08-25T21:55:45.209Z vite:resolve 4.24ms use-sync-external-store/shim -> /workspace/Synapse/node_modules/use-sync-external-store/shim/index.js
2025-08-25T21:55:45.234Z vite:resolve 0.46ms @radix-ui/react-use-effect-event -> /workspace/Synapse/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
2025-08-25T21:55:45.241Z vite:resolve 0.45ms @radix-ui/react-visually-hidden -> /workspace/Synapse/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
2025-08-25T21:55:45.315Z vite:resolve 1.17ms react-remove-scroll -> /workspace/Synapse/node_modules/react-remove-scroll/dist/es2015/index.js
2025-08-25T21:55:45.457Z vite:resolve 2.20ms aria-hidden -> /workspace/Synapse/node_modules/aria-hidden/dist/es2015/index.js
2025-08-25T21:55:45.768Z vite:resolve 0.51ms @floating-ui/react-dom -> /workspace/Synapse/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
2025-08-25T21:55:45.781Z vite:resolve 0.39ms @radix-ui/react-arrow -> /workspace/Synapse/node_modules/@radix-ui/react-arrow/dist/index.mjs
2025-08-25T21:55:45.802Z vite:resolve 6.50ms tslib -> /workspace/Synapse/node_modules/tslib/tslib.es6.mjs
2025-08-25T21:55:45.802Z vite:resolve 1.48ms @radix-ui/react-use-escape-keydown -> /workspace/Synapse/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
2025-08-25T21:55:45.805Z vite:resolve 0.65ms use-sidecar -> /workspace/Synapse/node_modules/use-sidecar/dist/es2015/index.js
2025-08-25T21:55:45.823Z vite:resolve 1.11ms detect-node-es -> /workspace/Synapse/node_modules/detect-node-es/esm/browser.js
2025-08-25T21:55:45.827Z vite:resolve 0.76ms react-remove-scroll-bar/constants -> /workspace/Synapse/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
2025-08-25T21:55:45.828Z vite:resolve 0.37ms react-remove-scroll-bar -> /workspace/Synapse/node_modules/react-remove-scroll-bar/dist/es2015/index.js
2025-08-25T21:55:45.834Z vite:resolve 1.36ms use-callback-ref -> /workspace/Synapse/node_modules/use-callback-ref/dist/es2015/index.js
2025-08-25T21:55:45.834Z vite:resolve 1.34ms @floating-ui/dom -> /workspace/Synapse/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
2025-08-25T21:55:45.834Z vite:resolve 1.29ms react-style-singleton -> /workspace/Synapse/node_modules/react-style-singleton/dist/es2015/index.js
2025-08-25T21:55:45.841Z vite:resolve 0.43ms get-nonce -> /workspace/Synapse/node_modules/get-nonce/dist/es2015/index.js
2025-08-25T21:55:45.844Z vite:resolve 0.54ms @floating-ui/core -> /workspace/Synapse/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
2025-08-25T21:55:45.845Z vite:resolve 0.39ms @floating-ui/utils -> /workspace/Synapse/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
2025-08-25T21:55:45.846Z vite:resolve 0.16ms @floating-ui/utils/dom -> /workspace/Synapse/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
2025-08-25T21:55:46.561Z vite:deps Dependencies bundled in 1968.64ms
2025-08-25T21:56:03.400Z vite:deps removing cache dir /workspace/Synapse/node_modules/.vite/deps_temp_c8c41e36
```
