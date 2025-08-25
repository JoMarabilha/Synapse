# Button Fix Plan

Derived from artifacts/buttons-static.json.

## Summary Table

| File | Line | Current JSX | Category | Proposed change |
| ---- | ---- | ----------- | -------- | ----------------|
| src/pages/Proposals.tsx | 369 | `<Button variant="ghost" size="sm" aria-label="Proposal actions">` | B | Add `onClick={handleProposalActions}` |
| src/components/analytics/AnalyticsDashboard.tsx | 81 | `<Button variant="outline">` | B | Add `onClick={handleExportMenu}` |
| src/components/analytics/CustomDashboard.tsx | 110 | `<Button>` | B | Add `onClick={() => setNewWidgetDialog(true)}` |
| src/components/analytics/ReportBuilder.tsx | 238 | `<Button variant="outline" size="sm">` | B | Add `onClick={handleDownloadReport}` |
| src/components/analytics/ReportBuilder.tsx | 242 | `<Button variant="outline" size="sm">` | B | Add `onClick={openReportSettings}` |
| src/components/collaboration/ActivityFeed.tsx | 129 | `<Button variant="outline" size="sm">` | B | Add `onClick={openFilter}` |
| src/components/collaboration/ActivityFeed.tsx | 133 | `<Button variant="outline" size="sm">` | B | Add `onClick={openNotifications}` |
| src/components/collaboration/CollaborationPresence.tsx | 277 | `<Button variant="outline" size="sm">` | B | Add `onClick={startEditing}` |
| src/components/collaboration/CommentSystem.tsx | 94 | `<Button variant="ghost" size="sm" className="h-6 w-6 p-0">` | B | Add `onClick={toggleCommentMenu}` |
| src/components/collaboration/CommentSystem.tsx | 183 | `<Button variant="ghost" size="sm" className="h-6 px-2">` | B | Add `onClick={() => setShowReactions(true)}` |
| src/components/collaboration/CommentSystem.tsx | 320 | `<Button variant="outline" size="sm">` | B | Add `onClick={mentionUser}` |
| src/components/collaboration/CommentSystem.tsx | 324 | `<Button variant="outline" size="sm">` | B | Add `onClick={attachFile}` |
| src/components/collaboration/TeamManagement.tsx | 101 | `<Button variant="ghost" size="sm" className="h-8 w-8 p-0">` | B | Add `onClick={openTeamMenu}` |
| src/components/collaboration/TeamManagement.tsx | 277 | `<Button>` | B | Add `onClick={openCreateTeam}` |
| src/components/documents/DocumentFilters.tsx | 72 | `<Button variant="outline" className={cn("relative", hasActiveFilters && "border-primary")}>` | B | Add `onClick={toggleFilters}` |
| src/components/layout/AppHeader.tsx | 60 | `<Button variant="ghost" className="relative h-9 w-9 rounded-full">` | B | Add `onClick={toggleUserMenu}` |
| src/components/layout/MobileNav.tsx | 35 | `<Button variant="ghost" size="sm" className="md:hidden h-9 w-9 p-0">` | B | Add `onClick={() => setOpen(true)}` |
| src/components/notifications/NotificationCenter.tsx | 83 | `<Button variant="link" size="sm" className="h-auto p-0 text-xs">` | A | Wrap `Link` with `asChild` pointing to `notification.actionUrl` |
| src/components/notifications/NotificationCenter.tsx | 92 | `<Button variant="ghost" size="sm" className="h-8 w-8 p-0">` | B | Add `onClick={toggleNotificationMenu}` |
| src/components/notifications/NotificationCenter.tsx | 155 | `<Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">` | B | Add `onClick={togglePopover}` |
| src/components/notifications/NotificationCenter.tsx | 173 | `<Button variant="outline" size="sm">` | B | Add `onClick={openFilter}` |
| src/components/notifications/NotificationCenter.tsx | 262 | `<Button variant="outline" size="sm">` | B | Add `onClick={configureEmailNotifications}` |
| src/components/notifications/NotificationCenter.tsx | 269 | `<Button variant="outline" size="sm">` | B | Add `onClick={configureInAppNotifications}` |
| src/components/ui/date-range-picker.tsx | 35 | `<Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !range && "text-muted-foreground")}>` | B | Add `onClick={() => setOpen(true)}` |
| src/components/workflow/WorkflowManager.tsx | 96 | `<Button variant="ghost" size="sm" className="h-8 w-8 p-0">` | B | Add `onClick={openWorkflowMenu}` |
| src/components/workflow/WorkflowManager.tsx | 279 | `<Button variant="outline">` | B | Add `onClick={openStatusFilter}` |

## Proposed diffs

### src/pages/Proposals.tsx

```diff
--- a/src/pages/Proposals.tsx:369
+++ b/src/pages/Proposals.tsx:369
@@
-                        <Button variant="ghost" size="sm" aria-label="Proposal actions">
+                        <Button variant="ghost" size="sm" aria-label="Proposal actions" onClick={handleProposalActions}>
```

### src/components/analytics/AnalyticsDashboard.tsx

```diff
--- a/src/components/analytics/AnalyticsDashboard.tsx:81
+++ b/src/components/analytics/AnalyticsDashboard.tsx:81
@@
-              <Button variant="outline">
+              <Button variant="outline" onClick={handleExportMenu}>
```

### src/components/analytics/CustomDashboard.tsx

```diff
--- a/src/components/analytics/CustomDashboard.tsx:110
+++ b/src/components/analytics/CustomDashboard.tsx:110
@@
-              <Button>
+              <Button onClick={() => setNewWidgetDialog(true)}>
```

### src/components/analytics/ReportBuilder.tsx

```diff
--- a/src/components/analytics/ReportBuilder.tsx:238
+++ b/src/components/analytics/ReportBuilder.tsx:238
@@
-                    <Button variant="outline" size="sm">
+                    <Button variant="outline" size="sm" onClick={handleDownloadReport}>
@@
-                    <Button variant="outline" size="sm">
+                    <Button variant="outline" size="sm" onClick={openReportSettings}>
```

### src/components/collaboration/ActivityFeed.tsx

```diff
--- a/src/components/collaboration/ActivityFeed.tsx:129
+++ b/src/components/collaboration/ActivityFeed.tsx:129
@@
-          <Button variant="outline" size="sm">
+          <Button variant="outline" size="sm" onClick={openFilter}>
@@
-          <Button variant="outline" size="sm">
+          <Button variant="outline" size="sm" onClick={openNotifications}>
```

### src/components/collaboration/CollaborationPresence.tsx

```diff
--- a/src/components/collaboration/CollaborationPresence.tsx:277
+++ b/src/components/collaboration/CollaborationPresence.tsx:277
@@
-                        <Button variant="outline" size="sm">
+                        <Button variant="outline" size="sm" onClick={startEditing}>
```

### src/components/collaboration/CommentSystem.tsx

```diff
--- a/src/components/collaboration/CommentSystem.tsx:94
+++ b/src/components/collaboration/CommentSystem.tsx:94
@@
-                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
+                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={toggleCommentMenu}>
@@
-                        <Button variant="ghost" size="sm" className="h-6 px-2">
+                        <Button variant="ghost" size="sm" className="h-6 px-2" onClick={() => setShowReactions(true)}>
@@
-                  <Button variant="outline" size="sm">
+                  <Button variant="outline" size="sm" onClick={mentionUser}>
@@
-                  <Button variant="outline" size="sm">
+                  <Button variant="outline" size="sm" onClick={attachFile}>
```

### src/components/collaboration/TeamManagement.tsx

```diff
--- a/src/components/collaboration/TeamManagement.tsx:101
+++ b/src/components/collaboration/TeamManagement.tsx:101
@@
-              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
+              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={openTeamMenu}>
@@
-            <Button>
+            <Button onClick={openCreateTeam}>
```

### src/components/documents/DocumentFilters.tsx

```diff
--- a/src/components/documents/DocumentFilters.tsx:72
+++ b/src/components/documents/DocumentFilters.tsx:72
@@
-            <Button variant="outline" className={cn(
-              "relative",
-              hasActiveFilters && "border-primary"
-            )}>
+            <Button variant="outline" className={cn(
+              "relative",
+              hasActiveFilters && "border-primary"
+            )} onClick={toggleFilters}>
```

### src/components/layout/AppHeader.tsx

```diff
--- a/src/components/layout/AppHeader.tsx:60
+++ b/src/components/layout/AppHeader.tsx:60
@@
-              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
+              <Button variant="ghost" className="relative h-9 w-9 rounded-full" onClick={toggleUserMenu}>
```

### src/components/layout/MobileNav.tsx

```diff
--- a/src/components/layout/MobileNav.tsx:35
+++ b/src/components/layout/MobileNav.tsx:35
@@
-        <Button
-          variant="ghost"
-          size="sm"
-          className="md:hidden h-9 w-9 p-0"
-        >
+        <Button
+          variant="ghost"
+          size="sm"
+          className="md:hidden h-9 w-9 p-0"
+          onClick={() => setOpen(true)}
+        >
```

### src/components/notifications/NotificationCenter.tsx

```diff
--- a/src/components/notifications/NotificationCenter.tsx:83
+++ b/src/components/notifications/NotificationCenter.tsx:83
@@
-                <Button variant="link" size="sm" className="h-auto p-0 text-xs">
-                  {notification.actionLabel || 'View'}
-                </Button>
+                <Button asChild variant="link" size="sm" className="h-auto p-0 text-xs">
+                  <Link to={notification.actionUrl}>{notification.actionLabel || 'View'}</Link>
+                </Button>
@@
-            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
+            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={toggleNotificationMenu}>
@@
-        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
+        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative" onClick={togglePopover}>
@@
-                <Button variant="outline" size="sm">
+                <Button variant="outline" size="sm" onClick={openFilter}>
@@
-                  <Button variant="outline" size="sm">
+                  <Button variant="outline" size="sm" onClick={configureEmailNotifications}>
@@
-                  <Button variant="outline" size="sm">
+                  <Button variant="outline" size="sm" onClick={configureInAppNotifications}>
```

### src/components/ui/date-range-picker.tsx

```diff
--- a/src/components/ui/date-range-picker.tsx:35
+++ b/src/components/ui/date-range-picker.tsx:35
@@
-          <Button
-            id="date"
-            variant={"outline"}
-            className={cn(
-              "w-[300px] justify-start text-left font-normal",
-              !range && "text-muted-foreground"
-            )}
-          >
+          <Button
+            id="date"
+            variant={"outline"}
+            className={cn(
+              "w-[300px] justify-start text-left font-normal",
+              !range && "text-muted-foreground"
+            )}
+            onClick={() => setOpen(true)}
+          >
```

### src/components/workflow/WorkflowManager.tsx

```diff
--- a/src/components/workflow/WorkflowManager.tsx:96
+++ b/src/components/workflow/WorkflowManager.tsx:96
@@
-              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
+              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={openWorkflowMenu}>
@@
-            <Button variant="outline">
+            <Button variant="outline" onClick={openStatusFilter}>
```

