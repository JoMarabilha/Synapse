# Runtime Diagnostics

## dev:safe

```
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> vite_react_shadcn_ts@0.0.0 dev:safe
> vite --config vite.safe.config.ts


  VITE v5.4.19  ready in 302 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Error: The following dependencies are imported but could not be resolved:

  @/components/ui/toaster (imported by /workspace/Synapse/src/App.tsx)
  @/components/ui/sonner (imported by /workspace/Synapse/src/App.tsx)
  @/components/ui/tooltip (imported by /workspace/Synapse/src/App.tsx)
  @/hooks/use-auth (imported by /workspace/Synapse/src/pages/Security.tsx)
  @/hooks/use-audit-log (imported by /workspace/Synapse/src/pages/Security.tsx)
  @/components/workflow/WorkflowManager (imported by /workspace/Synapse/src/pages/Workflows.tsx)
  @/components/collaboration/CollaborationHub (imported by /workspace/Synapse/src/pages/Collaboration.tsx)
  @/components/ui/tabs (imported by /workspace/Synapse/src/pages/Analytics.tsx)
  @/components/analytics/AnalyticsDashboard (imported by /workspace/Synapse/src/pages/Analytics.tsx)
  @/components/ui/card (imported by /workspace/Synapse/src/components/layout/PWAPrompt.tsx)
  @/components/analytics/ExportManager (imported by /workspace/Synapse/src/pages/Analytics.tsx)
  @/components/ui/button (imported by /workspace/Synapse/src/components/layout/MobileNav.tsx)
  @/components/analytics/CustomDashboard (imported by /workspace/Synapse/src/pages/Analytics.tsx)
  @/components/ui/badge (imported by /workspace/Synapse/src/components/layout/MobileNav.tsx)
  @/components/dashboard/KPICard (imported by /workspace/Synapse/src/pages/Dashboard.tsx)
  @/hooks/use-loading (imported by /workspace/Synapse/src/components/layout/AppSidebar.tsx)
  @/services/meeting-service (imported by /workspace/Synapse/src/pages/Meetings.tsx)
  @/hooks/use-mobile (imported by /workspace/Synapse/src/components/layout/AppHeader.tsx)
  @/lib/error-handling (imported by /workspace/Synapse/src/components/layout/AppSidebar.tsx)
  @/components/ui/table (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/ui/input (imported by /workspace/Synapse/src/components/layout/AppHeader.tsx)
  @/components/ui/checkbox (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/ui/chart (imported by /workspace/Synapse/src/pages/Dashboard.tsx)
  @/components/ui/label (imported by /workspace/Synapse/src/pages/Settings.tsx)
  @/components/dialogs/DocumentUploadDialog (imported by /workspace/Synapse/src/pages/Knowledge.tsx)
  @/components/ui/dropdown-menu (imported by /workspace/Synapse/src/components/layout/AppHeader.tsx)
  @/components/ui/switch (imported by /workspace/Synapse/src/pages/Settings.tsx)
  @/components/ui/confirm-dialog (imported by /workspace/Synapse/src/pages/Proposals.tsx)
  @/components/ui/separator (imported by /workspace/Synapse/src/components/layout/AppSidebar.tsx)
  @/services/knowledge-service (imported by /workspace/Synapse/src/pages/Knowledge.tsx)
  @/components/dialogs/AuditLogDialog (imported by /workspace/Synapse/src/pages/Settings.tsx)
  @/services/proposal-service (imported by /workspace/Synapse/src/pages/Proposals.tsx)
  @/services/document-service (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/lib/utils (imported by /workspace/Synapse/src/components/layout/MobileNav.tsx)
  @/hooks/use-pwa (imported by /workspace/Synapse/src/components/layout/PWAPrompt.tsx)
  @/services/settings-service (imported by /workspace/Synapse/src/pages/Settings.tsx)
  @/hooks/use-toast (imported by /workspace/Synapse/src/components/layout/PWAPrompt.tsx)
  @/components/documents/DocumentPreviewDialog (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/documents/DocumentVersionDialog (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/ui/avatar (imported by /workspace/Synapse/src/components/layout/AppHeader.tsx)
  @/components/documents/DocumentFilters (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/documents/DocumentTableSkeleton (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/notifications/NotificationCenter (imported by /workspace/Synapse/src/components/layout/AppHeader.tsx)
  @/hooks/use-keyboard-shortcuts (imported by /workspace/Synapse/src/pages/Documents.tsx)
  @/components/ui/sheet (imported by /workspace/Synapse/src/components/layout/MobileNav.tsx)

Are they installed?
    at file:///workspace/Synapse/node_modules/vite/dist/node/chunks/dep-C6uTJdX2.js:50669:15
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async file:///workspace/Synapse/node_modules/vite/dist/node/chunks/dep-C6uTJdX2.js:50174:26
```

