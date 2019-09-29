# Angular Universal Blog

<p align="center">
  <a href="https://angular.io/">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Logo" width=72 height=72>
  </a>

  <h3 align="center">Angular Example App</h3>

  <p align="center">
    Example app with Angular 8 + Angular CLI + Angular Universal + Firebase
    <br>
    <br>
    <a href="https://github.com/Ismaestro/angular8-example-app/issues/new">Report bug</a>
    ·
    <a href="https://github.com/Ismaestro/angular8-example-app/issues/new">Request feature</a>
  </p>
</p>

## Quick Installation Instructions
- Install npm packages `npm install`
- Setup your firebase instance https://firebase.google.com/
- Setup providers in Firebase Authentication (Email Address and Password)
- Add a user in the Users tab
- Use the firebase configuration information and plug it in src/environment

## How to start
- `npm run start` - for client rendering
- `npm run ssr` - for server-side rendering
- `npm run build:universal` - for assembly in release
- `npm run server` - to start the server
- `npm run build:prerender` - to generate static by `static.paths.ts`
- `npm run ssr:watch`
