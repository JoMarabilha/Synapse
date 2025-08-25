# Buttons Audit

*Screenshots are generated during tests but omitted from version control.*

Routes tested: /, /documents, /meetings, /proposals, /knowledge, /workflows, /analytics, /collaboration, /security, /settings

| Route | Button text | data-testid | Selector | Status | Reason | Screenshot |
| --- | --- | --- | --- | --- | --- | --- |
| / |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/root/button.png) |
| / | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/root/Toggle_theme.png) |
| / | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| / | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/root/DR.png) |
| / | New Proposal |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button aria-label="Create new proposal" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <span>Profile</span> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/root/New_Proposal.png) |
| /documents |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_documents/button.png) |
| /documents | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_documents/Toggle_theme.png) |
| /documents | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /documents | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_documents/DR.png) |
| /documents | Upload Document | upload-agenda-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button data-testid="upload-agenda-btn" aria-label="Upload new document" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_documents/Upload_Document.png) |
| /documents | Advanced Filters |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2.relative` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" aria-controls="radix-:r3:" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_documents/Advanced_Filters.png) |
| /documents | Select All |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_documents/Select_All.png) |
| /documents |  |  | `button.peer.h-4.w-4.shrink-0.rounded-sm.border.border-primary.ring-offset-background.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=checked]:text-primary-foreground` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button value="on" type="button" role="checkbox" aria-checked="false" data-state="unchecked" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"></button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_documents/button.png) |
| /documents |  |  | `button.peer.h-4.w-4.shrink-0.rounded-sm.border.border-primary.ring-offset-background.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=checked]:text-primary-foreground` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button value="on" type="button" role="checkbox" aria-checked="false" data-state="unchecked" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"></button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_documents/button.png) |
| /documents |  | preview-doc-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button data-testid="preview-doc-btn" aria-label="Preview Antibiotic Guidelines 2024" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-muted"></div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_documents/button.png) |
| /meetings |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_meetings/button.png) |
| /meetings | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_meetings/Toggle_theme.png) |
| /meetings | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /meetings | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_meetings/DR.png) |
| /meetings | Meeting Mode |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button aria-label="Enter meeting mode" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/Meeting_Mode.png) |
| /meetings | New Meeting | create-meeting-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button aria-label="Create new meeting" data-testid="create-meeting-btn" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/New_Meeting.png) |
| /meetings | Edit |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button aria-label="Edit Monthly CFT Review" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/Edit.png) |
| /meetings | Start | start-meeting-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button data-testid="start-meeting-btn" aria-label="Join Monthly CFT Review" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/Start.png) |
| /meetings | Edit |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button aria-label="Edit Emergency Protocol Review" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/Edit.png) |
| /meetings | Start | start-meeting-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button data-testid="start-meeting-btn" aria-label="Join Emergency Protocol Review" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/Start.png) |
| /meetings | View Minutes |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(10)[22m
[2m    - locator resolved to <button aria-label="View minutes for CFT December 2023" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">View Minutes</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/View_Minutes.png) |
| /meetings | View Minutes |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(11)[22m
[2m    - locator resolved to <button aria-label="View minutes for November Urgent Review" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">View Minutes</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/View_Minutes.png) |
| /meetings | Enter Meeting Mode |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.text-primary-foreground.hover:bg-primary/90.h-11.rounded-md.px-8.bg-primary` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(12)[22m
[2m    - locator resolved to <button aria-label="Enter meeting mode for full-screen presentation" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-primary">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_meetings/Enter_Meeting_Mode.png) |
| /proposals |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_proposals/button.png) |
| /proposals | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_proposals/Toggle_theme.png) |
| /proposals | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /proposals | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_proposals/DR.png) |
| /proposals | Export |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button aria-label="Export proposals to CSV" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div dir="ltr" role="menu" tabindex="-1" id="radix-:r2:" data-align="end" data-state="open" data-side="bottom" data-radix-menu-content="" aria-orientation="vertical" data-orientation="vertical" aria-labelledby="radix-:r1:" class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zo…>…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div dir="ltr" role="menu" tabindex="-1" id="radix-:r2:" data-align="end" data-state="open" data-side="bottom" data-radix-menu-content="" aria-orientation="vertical" data-orientation="vertical" aria-labelledby="radix-:r1:" class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zo…>…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div dir="ltr" role="menu" tabindex="-1" id="radix-:r2:" data-align="end" data-state="open" data-side="bottom" data-radix-menu-content="" aria-orientation="vertical" data-orientation="vertical" aria-labelledby="radix-:r1:" class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zo…>…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/Export.png) |
| /proposals | New Proposal | new-proposal-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button data-testid="new-proposal-btn" aria-label="Create new proposal" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/New_Proposal.png) |
| /proposals | Filters |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button aria-label="Open filter options" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/Filters.png) |
| /proposals |  |  | `button#radix-:re:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button type="button" id="radix-:re:" data-state="closed" aria-haspopup="menu" aria-expanded="false" aria-label="Proposal actions" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/button.png) |
| /proposals |  |  | `button#radix-:rg:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button type="button" id="radix-:rg:" data-state="closed" aria-haspopup="menu" aria-expanded="false" aria-label="Proposal actions" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/button.png) |
| /proposals | Create Proposal |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.h-20.flex-col` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button aria-label="Create new proposal" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 h-20 flex-col">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/Create_Proposal.png) |
| /proposals | Batch Import |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.h-20.flex-col` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(10)[22m
[2m    - locator resolved to <button aria-label="Import multiple proposals" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 h-20 flex-col">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/Batch_Import.png) |
| /proposals | Schedule Review |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.h-20.flex-col` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(11)[22m
[2m    - locator resolved to <button aria-label="Schedule proposal review" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 h-20 flex-col">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_proposals/Schedule_Review.png) |
| /knowledge |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_knowledge/button.png) |
| /knowledge | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_knowledge/Toggle_theme.png) |
| /knowledge | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /knowledge | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_knowledge/DR.png) |
| /knowledge | Add Document |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_knowledge/Add_Document.png) |
| /knowledge |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button aria-label="View Pharmaceutical Good Practices Guide" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_knowledge/button.png) |
| /knowledge |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button aria-label="Download Pharmaceutical Good Practices Guide" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_knowledge/button.png) |
| /workflows |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_workflows/button.png) |
| /workflows | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_workflows/Toggle_theme.png) |
| /workflows | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /workflows | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_workflows/DR.png) |
| /workflows | Create Workflow |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_workflows/Create_Workflow.png) |
| /workflows | Status: All |  | `button#radix-:r3:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button type="button" id="radix-:r3:" data-state="closed" aria-haspopup="menu" aria-expanded="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hov…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_workflows/Status_All.png) |
| /workflows | Active (0) |  | `button#radix-:r5:-trigger-active.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" data-state="active" aria-selected="true" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r5:-trigger-active" aria-controls="radix-:r5:-content-active" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:o…>Active (0)</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_workflows/Active_0_.png) |
| /workflows | All (0) |  | `button#radix-:r5:-trigger-all.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" id="radix-:r5:-trigger-all" data-orientation="horizontal" data-radix-collection-item="" aria-controls="radix-:r5:-content-all" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opac…>All (0)</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_workflows/All_0_.png) |
| /workflows | Completed (0) |  | `button#radix-:r5:-trigger-completed.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r5:-trigger-completed" aria-controls="radix-:r5:-content-completed" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none d…>Completed (0)</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_workflows/Completed_0_.png) |
| /analytics |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_analytics/button.png) |
| /analytics | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_analytics/Toggle_theme.png) |
| /analytics | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /analytics | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_analytics/DR.png) |
| /analytics | Dashboard |  | `button#radix-:r3:-trigger-dashboard.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" data-state="active" aria-selected="true" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r3:-trigger-dashboard" aria-controls="radix-:r3:-content-dashboard" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disa…>Dashboard</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Dashboard.png) |
| /analytics | Custom Views |  | `button#radix-:r3:-trigger-custom.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r3:-trigger-custom" aria-controls="radix-:r3:-content-custom" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disable…>Custom Views</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Custom_Views.png) |
| /analytics | Export Reports |  | `button#radix-:r3:-trigger-export.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r3:-trigger-export" aria-controls="radix-:r3:-content-export" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disable…>Export Reports</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Export_Reports.png) |
| /analytics | Jul 26, 2025 - Aug 25, 2025 |  | `button#date.inline-flex.items-center.gap-2.whitespace-nowrap.rounded-md.text-sm.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2.w-[300px].justify-start.text-left.font-normal` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button id="date" type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" aria-controls="radix-:r7:" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:t…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Jul_26_2025_Aug_25_2025.png) |
| /analytics | Last 30 days |  | `button.flex.h-10.items-center.justify-between.rounded-md.border.border-input.bg-background.px-3.py-2.text-sm.ring-offset-background.placeholder:text-muted-foreground.focus:outline-none.focus:ring-2.focus:ring-ring.focus:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.[&>span]:line-clamp-1.w-32` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button dir="ltr" type="button" role="combobox" data-state="closed" aria-expanded="false" aria-autocomplete="none" aria-controls="radix-:r8:" class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-32">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Last_30_days.png) |
| /analytics | Export |  | `button#radix-:r9:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button type="button" id="radix-:r9:" data-state="closed" aria-haspopup="menu" aria-expanded="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hov…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Export.png) |
| /analytics | Overview |  | `button#radix-:rb:-trigger-overview.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(10)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" data-state="active" aria-selected="true" data-orientation="horizontal" data-radix-collection-item="" id="radix-:rb:-trigger-overview" aria-controls="radix-:rb:-content-overview" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabl…>Overview</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Overview.png) |
| /analytics | Documents |  | `button#radix-:rb:-trigger-documents.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(11)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:rb:-trigger-documents" aria-controls="radix-:rb:-content-documents" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none d…>Documents</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Documents.png) |
| /analytics | Proposals |  | `button#radix-:rb:-trigger-proposals.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(12)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:rb:-trigger-proposals" aria-controls="radix-:rb:-content-proposals" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none d…>Proposals</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Proposals.png) |
| /analytics | Workflows |  | `button#radix-:rb:-trigger-workflows.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(13)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:rb:-trigger-workflows" aria-controls="radix-:rb:-content-workflows" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none d…>Workflows</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Workflows.png) |
| /analytics | Reports |  | `button#radix-:rb:-trigger-reports.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(14)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:rb:-trigger-reports" aria-controls="radix-:rb:-content-reports" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disab…>Reports</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="flex flex-col space-y-1">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_analytics/Reports.png) |
| /collaboration |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_collaboration/button.png) |
| /collaboration | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_collaboration/Toggle_theme.png) |
| /collaboration | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /collaboration | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_collaboration/DR.png) |
| /collaboration | Activity Feed |  | `button#radix-:r3:-trigger-activity.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" data-state="active" aria-selected="true" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r3:-trigger-activity" aria-controls="radix-:r3:-content-activity" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabl…>Activity Feed</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/Activity_Feed.png) |
| /collaboration | Team Management |  | `button#radix-:r3:-trigger-teams.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" id="radix-:r3:-trigger-teams" data-orientation="horizontal" data-radix-collection-item="" aria-controls="radix-:r3:-content-teams" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:…>Team Management</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/Team_Management.png) |
| /collaboration | Live Collaboration |  | `button#radix-:r3:-trigger-presence.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r3:-trigger-presence" aria-controls="radix-:r3:-content-presence" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none dis…>Live Collaboration</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/Live_Collaboration.png) |
| /collaboration | Comments |  | `button#radix-:r3:-trigger-comments.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.px-3.py-1.5.text-sm.font-medium.ring-offset-background.transition-all.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.data-[state=active]:bg-background.data-[state=active]:text-foreground.data-[state=active]:shadow-sm` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button role="tab" type="button" tabindex="-1" aria-selected="false" data-state="inactive" data-orientation="horizontal" data-radix-collection-item="" id="radix-:r3:-trigger-comments" aria-controls="radix-:r3:-content-comments" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none dis…>Comments</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="flex flex-col space-y-1">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/Comments.png) |
| /collaboration | All Activities |  | `button.flex.h-10.items-center.justify-between.rounded-md.border.border-input.bg-background.px-3.py-2.text-sm.ring-offset-background.placeholder:text-muted-foreground.focus:outline-none.focus:ring-2.focus:ring-ring.focus:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.[&>span]:line-clamp-1.w-32` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button dir="ltr" type="button" role="combobox" data-state="closed" aria-expanded="false" aria-autocomplete="none" aria-controls="radix-:r8:" class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-32">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/All_Activities.png) |
| /collaboration | Filter |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/Filter.png) |
| /collaboration | Notifications |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(10)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_collaboration/Notifications.png) |
| /security |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_security/button.png) |
| /security | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_security/Toggle_theme.png) |
| /security | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /security | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_security/DR.png) |
| /security |  |  | `button.peer.h-4.w-4.shrink-0.rounded-sm.border.border-primary.ring-offset-background.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=checked]:text-primary-foreground` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button value="on" type="button" role="checkbox" aria-checked="false" data-state="unchecked" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"></button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/button.png) |
| /security |  |  | `button.peer.h-4.w-4.shrink-0.rounded-sm.border.border-primary.ring-offset-background.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=checked]:text-primary-foreground` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button value="on" type="button" role="checkbox" aria-checked="false" data-state="unchecked" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"></button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/button.png) |
| /security |  |  | `button.peer.h-4.w-4.shrink-0.rounded-sm.border.border-primary.ring-offset-background.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=checked]:text-primary-foreground` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button value="on" type="button" role="checkbox" aria-checked="false" data-state="unchecked" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"></button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/button.png) |
| /security |  |  | `button.peer.h-4.w-4.shrink-0.rounded-sm.border.border-primary.ring-offset-background.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=checked]:text-primary-foreground` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button value="on" type="button" role="checkbox" aria-checked="true" data-state="checked" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/button.png) |
| /security | Export JSON |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/Export_JSON.png) |
| /security | Clear Log |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-destructive.text-destructive-foreground.hover:bg-destructive/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/Clear_Log.png) |
| /security | Add Test Event |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(10)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Add Test Event</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_security/Add_Test_Event.png) |
| /settings |  |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_settings/button.png) |
| /settings | Toggle theme |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_settings/Toggle_theme.png) |
| /settings | 2 |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0.relative` | OK | dialog appeared |  |
| /settings | DR |  | `button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full` | Suspicious | no url change/dialog/dom/network | ![screenshot](test-results/buttons-audit/_settings/DR.png) |
| /settings | Save Changes | save-settings-btn | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button data-testid="save-settings-btn" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Save Changes</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/Save_Changes.png) |
| /settings |  |  | `button.peer.inline-flex.h-6.w-11.shrink-0.cursor-pointer.items-center.rounded-full.border-2.border-transparent.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.focus-visible:ring-offset-background.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=unchecked]:bg-input` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button value="on" type="button" role="switch" aria-checked="true" data-state="checked" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-sm font-medium leading-none">Dr. Rodriguez</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/button.png) |
| /settings |  |  | `button.peer.inline-flex.h-6.w-11.shrink-0.cursor-pointer.items-center.rounded-full.border-2.border-transparent.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.focus-visible:ring-offset-background.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=unchecked]:bg-input` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button value="on" type="button" role="switch" aria-checked="false" data-state="unchecked" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-sm font-medium leading-none">Dr. Rodriguez</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/button.png) |
| /settings |  |  | `button.peer.inline-flex.h-6.w-11.shrink-0.cursor-pointer.items-center.rounded-full.border-2.border-transparent.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.focus-visible:ring-offset-background.disabled:cursor-not-allowed.disabled:opacity-50.data-[state=checked]:bg-primary.data-[state=unchecked]:bg-input` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(7)[22m
[2m    - locator resolved to <button value="on" type="button" role="switch" aria-checked="true" data-state="checked" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-sm font-medium leading-none">Dr. Rodriguez</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/button.png) |
| /settings | Reconfigure |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(8)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Reconfigure</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/Reconfigure.png) |
| /settings | View Log |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(9)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">View Log</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/View_Log.png) |
| /settings | Export Data |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2.w-full` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(10)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/Export_Data.png) |
| /settings | Import Data |  | `button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2.w-full` | Broken | click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(11)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m
 | ![screenshot](test-results/buttons-audit/_settings/Import_Data.png) |

## Findings
- /: "" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted) - Suspicious. no url change/dialog/dom/network
- /: "Toggle theme" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0) - Suspicious. no url change/dialog/dom/network
- /: "DR" (button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full) - Suspicious. no url change/dialog/dom/network
- /: "New Proposal" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.bg-primary.text-primary-foreground.hover:bg-primary/90.h-10.px-4.py-2) - Broken. click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button aria-label="Create new proposal" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <span>Profile</span> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m

- /documents: "" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:text-accent-foreground.rounded-md.h-8.w-8.p-0.hover:bg-muted) - Suspicious. no url change/dialog/dom/network
- /documents: "Toggle theme" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.rounded-md.h-9.w-9.p-0) - Suspicious. no url change/dialog/dom/network
- /documents: "DR" (button#radix-:r1:.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.px-4.py-2.relative.h-9.w-9.rounded-full) - Suspicious. no url change/dialog/dom/network
- /documents: "Upload Document" (upload-agenda-btn) - Broken. click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(4)[22m
[2m    - locator resolved to <button data-testid="upload-agenda-btn" aria-label="Upload new document" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <div tabindex="-1" role="menuitem" data-orientation="vertical" data-radix-collection-item="" class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">…</div> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m

- /documents: "Advanced Filters" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.border.border-input.bg-background.hover:bg-accent.hover:text-accent-foreground.h-10.px-4.py-2.relative) - Broken. click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(5)[22m
[2m    - locator resolved to <button type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" aria-controls="radix-:r3:" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:…>…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 500ms[22m

- /documents: "Select All" (button.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible:outline-none.focus-visible:ring-2.focus-visible:ring-ring.focus-visible:ring-offset-2.disabled:pointer-events-none.disabled:opacity-50.[&_svg]:pointer-events-none.[&_svg]:size-4.[&_svg]:shrink-0.hover:bg-accent.hover:text-accent-foreground.h-9.rounded-md.px-3) - Broken. click: locator.click: Timeout 1000ms exceeded.
Call log:
[2m  - waiting for locator('button,[role="button"],[type="button"],a[role="button"],[data-testid$="-btn"],[data-action]').nth(6)[22m
[2m    - locator resolved to <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">…</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  2 × retrying click action[22m
[2m      - waiting 100ms[22m
[2m      - waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <p class="text-xs leading-none text-muted-foreground">CFT Administrator</p> from <div dir="ltr" data-radix-popper-content-wrapper="">…</div> subtree intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
[2m    - <html lang="en" class="dark">…</html> intercepts pointer events[22m
[2m  - retrying click action[22m
[2m    - waiting 500ms[22m


## Audit run output

```
> vite_react_shadcn_ts@0.0.0 test:e2e
> playwright test


Running 28 tests using 2 workers

  ✓   1 tests/e2e/actions.e2e.ts:18:5 › actions › click new-proposal-btn (5.0s)
  -   3 tests/e2e/actions.e2e.ts:18:5 › actions › click save-proposal-btn
  -   4 tests/e2e/actions.e2e.ts:18:5 › actions › click delete-proposal-btn
  ✓   5 tests/e2e/actions.e2e.ts:18:5 › actions › click upload-agenda-btn (1.9s)
  -   6 tests/e2e/actions.e2e.ts:18:5 › actions › click preview-doc-btn
  ✓   2 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route / (11.1s)
  ✓   7 tests/e2e/actions.e2e.ts:18:5 › actions › click create-meeting-btn (2.0s)
  ✓   9 tests/e2e/actions.e2e.ts:18:5 › actions › click start-meeting-btn (2.0s)
  ✓  10 tests/e2e/actions.e2e.ts:18:5 › actions › click save-settings-btn (2.0s)
  ✓  11 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / (1.2s)
  ✓  12 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /documents (1.1s)
  ✓  13 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /meetings (1.2s)
  ✓  14 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /proposals (1.1s)
  ✓  15 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /knowledge (1.1s)
  ✓  16 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /workflows (1.1s)
  ✓  17 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /analytics (1.3s)
  ✓  18 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /collaboration (1.2s)
  ✓  19 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /security (1.0s)
  ✓  20 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /settings (1.1s)
  ✓   8 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /documents (18.3s)
  ✓  21 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /meetings (23.4s)
  ✓  22 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /proposals (21.0s)
  ✓  23 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /knowledge (11.1s)
  ✓  24 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /workflows (14.9s)
  ✓  25 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /analytics (27.4s)
  ✓  26 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /collaboration (19.1s)
  ✓  27 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /security (18.9s)
  ✓  28 tests/e2e/buttons-audit.e2e.ts:43:5 › buttons audit › route /settings (20.8s)

  3 skipped
  25 passed (3.2m)

```
