# Buttons Static Audit

## Findings

| File | Line | Rule | Component | data-testid | aria-label | Text | Snippet |
| --- | --- | --- | --- | --- | --- | --- | --- |
| src/pages/Proposals.tsx | 369 | a | Proposals |  | Proposal actions |  | `<Button variant="ghost" size="sm" aria-label="Proposal actions">` |
| src/components/analytics/AnalyticsDashboard.tsx | 81 | a | AnalyticsDashboard |  |  |  | `<Button variant="outline">` |
| src/components/analytics/CustomDashboard.tsx | 110 | a | CustomDashboard |  |  |  | `<Button>` |
| src/components/analytics/ReportBuilder.tsx | 238 | a | ReportBuilder |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/analytics/ReportBuilder.tsx | 242 | a | ReportBuilder |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/collaboration/ActivityFeed.tsx | 129 | a | ActivityFeed |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/collaboration/ActivityFeed.tsx | 133 | a | ActivityFeed |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/collaboration/CollaborationPresence.tsx | 277 | a | CollaborationPresence |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/collaboration/CommentSystem.tsx | 94 | a | CommentItem |  |  |  | `<Button variant="ghost" size="sm" className="h-6 w-6 p-0">` |
| src/components/collaboration/CommentSystem.tsx | 183 | a | CommentItem |  |  |  | `<Button variant="ghost" size="sm" className="h-6 px-2">` |
| src/components/collaboration/CommentSystem.tsx | 320 | a | CommentSystem |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/collaboration/CommentSystem.tsx | 324 | a | CommentSystem |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/collaboration/TeamManagement.tsx | 101 | a | TeamCard |  |  |  | `<Button variant="ghost" size="sm" className="h-8 w-8 p-0">` |
| src/components/collaboration/TeamManagement.tsx | 277 | a | TeamManagement |  |  |  | `<Button>` |
| src/components/documents/DocumentFilters.tsx | 72 | a | DocumentFilters |  |  |  | `<Button variant="outline" className={cn( "relative", hasActiveFilters && "border-primary" )}>` |
| src/components/layout/AppHeader.tsx | 60 | a | AppHeader |  |  |  | `<Button variant="ghost" className="relative h-9 w-9 rounded-full">` |
| src/components/layout/MobileNav.tsx | 35 | a | MobileNav |  |  |  | `<Button variant="ghost" size="sm" className="md:hidden h-9 w-9 p-0" >` |
| src/components/notifications/NotificationCenter.tsx | 83 | a | NotificationItem |  |  |  | `<Button variant="link" size="sm" className="h-auto p-0 text-xs">` |
| src/components/notifications/NotificationCenter.tsx | 92 | a | NotificationItem |  |  |  | `<Button variant="ghost" size="sm" className="h-8 w-8 p-0">` |
| src/components/notifications/NotificationCenter.tsx | 155 | a | NotificationCenter |  |  |  | `<Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">` |
| src/components/notifications/NotificationCenter.tsx | 173 | a | NotificationCenter |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/notifications/NotificationCenter.tsx | 262 | a | NotificationCenter |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/notifications/NotificationCenter.tsx | 269 | a | NotificationCenter |  |  |  | `<Button variant="outline" size="sm">` |
| src/components/ui/date-range-picker.tsx | 35 | a | DatePickerWithRange |  |  |  | `<Button id="date" variant={"outline"} className={cn( "w-[300px] justify-start text-left font-normal"` |
| src/components/workflow/WorkflowManager.tsx | 96 | a | WorkflowCard |  |  |  | `<Button variant="ghost" size="sm" className="h-8 w-8 p-0">` |
| src/components/workflow/WorkflowManager.tsx | 279 | a | WorkflowManager |  |  |  | `<Button variant="outline">` |

## Summary

### Totals per rule
- (a) <Button> without onClick/asChild/href/to: 26
- (b) <button> without onClick and not disabled: 0
- (c) <a role="button"> without href/to: 0
- (d) data-testid "-btn" elements without handlers: 0

### Top 10 files by count
- src/components/notifications/NotificationCenter.tsx: 6
- src/components/collaboration/CommentSystem.tsx: 4
- src/components/analytics/ReportBuilder.tsx: 2
- src/components/collaboration/ActivityFeed.tsx: 2
- src/components/collaboration/TeamManagement.tsx: 2
- src/components/workflow/WorkflowManager.tsx: 2
- src/pages/Proposals.tsx: 1
- src/components/analytics/AnalyticsDashboard.tsx: 1
- src/components/analytics/CustomDashboard.tsx: 1
- src/components/collaboration/CollaborationPresence.tsx: 1

### Suggested minimal fixes
- Add onClick handlers or link props (href/to) for interactive buttons.
- Convert <a role="button"> to <Link to="..."> or add href.
- Ensure data-testid "-btn" elements are wired or removed.

*FP reduced after heuristic improvements*

> vite_react_shadcn_ts@0.0.0 audit:buttons:static
> ts-node --transpile-only scripts/audit/buttons-static.ts

Total candidates: 26
Rule totals: { a: 26, b: 0, c: 0, d: 0 }
Top files:
- src/components/notifications/NotificationCenter.tsx: 6
- src/components/collaboration/CommentSystem.tsx: 4
- src/components/analytics/ReportBuilder.tsx: 2
- src/components/collaboration/ActivityFeed.tsx: 2
- src/components/collaboration/TeamManagement.tsx: 2
- src/components/workflow/WorkflowManager.tsx: 2
- src/pages/Proposals.tsx: 1
- src/components/analytics/AnalyticsDashboard.tsx: 1
- src/components/analytics/CustomDashboard.tsx: 1
- src/components/collaboration/CollaborationPresence.tsx: 1
