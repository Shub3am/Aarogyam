# Aarogyam

Aarogyam is an offline fitness tracker I built with React Native and Expo for CODEX COMFEST 2023 (Sunbeam School Lahartara). The brief required the app to work without a network connection, so there is no backend and no account system: workout history lives on the device in AsyncStorage and everything else lives in memory for the session. I wanted one small app that covers the basics I use at the gym: a stopwatch for cardio, a rep counter for lifts, a countdown timer, a water log and a history of what I did.

## Features

- **Quick picks** on the home screen: Running and Biking open a stopwatch, Bench Press, Curls and Jumping Jacks open a rep counter.
- **Stopwatch** with start/stop, reset and lap logging. A finished session can be saved to history.
- **Rep counter** (tap adds 5 or removes 1, long press adds 10 or removes 5) with a weight counter in 5 lb steps. A set can be saved to history.
- **Workout history** saved on the device, newest first, with search by activity name and a delete-all option.
- **Water tracker** in ounces with a custom amount (add or subtract) and quick-add buttons for 6, 12, 24 and 36 oz.
- **Workouts tab** to log an exercise with reps, weight and sets for the current session.
- **Routine tab** to name a routine and tick off the days of the week.
- **Countdown timer** with hours, minutes and seconds input and an alert when it finishes.
- **Preset workout plans** (15 min warmup, 30 min light, 30 min intense, 1 hr moderate) with their exercise lists.
- **About tab** with project credits. The register form there is a placeholder because the app is offline by design.

Only workout history persists between launches. Water, routines and the Workouts tab reset when the app restarts.

## Tech stack

- Expo SDK 48 with React Native 0.71 and React 18
- React Navigation 6 (bottom tabs with a native stack inside the first tab)
- react-native-elements for buttons, Ionicons from react-native-vector-icons
- @react-native-async-storage/async-storage for the history log
- EAS Build config for Android APK builds

## Project structure

```
App.js                  Navigation: bottom tabs plus the home stack
components/
  HomePage/             Home screen, quick picks and preset workout data
  Duration/             Stopwatch for time based activities
  RepetitionPage/       Rep and weight counter
  History/              Saved workout log with search
  WaterPage/            Water intake tracker
  Progress/             Workouts tab (session exercise log)
  Routine/              Weekly routine planner
  Timer/                Countdown timer
  Workouts/             Detail screen for a preset workout plan
  Register/             About tab and placeholder register form
assets/                 App icon, splash and favicon
app.json, eas.json      Expo and EAS Build config
```

## Running it locally

I use npm with the committed `package-lock.json`.

```bash
npm install
npm start            # same as: npx expo start
```

Then press `a` for an Android emulator or `i` for the iOS simulator, or use the platform scripts directly:

```bash
npm run android      # npx expo start --android
npm run ios          # npx expo start --ios
```

A few things to know:

- The project is pinned to Expo SDK 48. Current Expo Go releases only run the latest SDK, so on a physical device you need an Expo Go build that supports SDK 48 or a development build.
- `npm run web` exists in `package.json`, but `react-native-web` is not installed, so the web target does not run as is.
- To check that the app bundles without a device, run `npx expo export`. It writes the iOS and Android bundles to `dist/`.

To build an installable Android APK with EAS (needs an Expo account):

```bash
npx eas-cli build --platform android --profile preview
```
