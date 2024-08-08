- [Developing](#developing)
  - [Building](#building)
  - [Setup](#setup)
    - [Stamps](#stamps)
  - [Events](#events)
  - [Gacha game](#gacha-game)
    - [State diagram](#state-diagram)

# Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The app will always try to establish a connection to the server at `socketServerURL` (check in `const.ts`).

For regular HTTP API requests, the app will use the `apiServerURL` (check in `const.ts`).

You can configure the production build server URLs in the same module.

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Setup

### Stamps

WIP

The `externalURL` is a generic link to some external URL (this might be a link to a partner's homepage, a deep link in a convention's app etc.).

## Events

WIP

## Gacha game

On the completion of the stamp rally, a one time gacha game pull is available.

### State diagram

```mermaid
stateDiagram-v2
    [*] --> NOT_PLAYED
    NOT_PLAYED --> PLAYING : Play Gacha
    PLAYING --> PLAYED : After 3 seconds
    PLAYED --> [*] : End
```

The wait time for the pull result is configurable in the `HolomemGacha` component, as well as any extra logic you want to add to the game.
