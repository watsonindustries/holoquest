# Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Setup

The way the quest works, is that the app has a hardcoded array of stamps to be collected in `const.ts`. Those stamps are then displayed in the root view.

Each Stamp in the real world is a **UUID token** encoded as a **QR code**. The expected stamps contain the **SHA1 hashes** of the UUIDs, so that the app can verify that the scanned stamp is the correct one.

Once all stamps are collected, the app displays a **secret code** that can be used to claim the prize. The code is a checksum of the stamp token UUIDs in the order they appear in the `const.ts` file using **SHA-256**. The code is encoded as a QR code, so that it can be easily scanned and will be visible in `/result`.
