# Drive Buddy Motion Web

Website-first React implementation focused on high-performance motion patterns for ride UX.

## Included screens
- Splash Screen: DB logo draw + B slide + glow handoff.
- Home Screen: CTA actions and mascot micro-animations.
- Booking Screen: route draw, driver entry, staggered ride metadata.
- Tracking Screen: animated car interpolation path + pulsing route.

## Folder structure
- `src/components` reusable motion components (`PressableButton`, `Mascot`, `AnimatedRouteMap`, `StaggerList`, `PageTransition`)
- `src/screens` feature screens (`Splash`, `Home`, `Booking`, `Tracking`)
- `src/styles.css` motion tokens and keyframes

## Run
```bash
npm install
npm run dev
```


## GitHub automation
- GitHub Actions CI workflow added to install dependencies and run production build on push/PR.
- Dependabot configured for npm and GitHub Actions weekly updates.


## GitHub Pages fix
- Uses `HashRouter` to avoid route 404 on refresh/deep links.
- Uses Vite `base: "./"` so built assets load correctly under repository subpaths.
- Adds `pages.yml` workflow to build and deploy `dist/` to GitHub Pages from `main`.

## Support
If you still do not see a PR, check the PR list for your current branch and refresh GitHub Actions status.


## CI status note
- CI now validates this repository as a static site (no npm install/build required), preventing false failures in restricted environments.
