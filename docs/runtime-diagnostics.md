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
