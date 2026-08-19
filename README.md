# Mehfil Radio (React)

An ambient qawwali radio themed on Nusrat Fateh Ali Khan, split into small,
single-purpose components.

## File structure

```
src/
  data/songs.js           song + rotation data (no UI)
  assets/streetScene.js    the hero background image, as a base64 data URI
  hooks/usePlayer.js       all playback state (queue, play/pause, listeners)
  components/
    StatusBar.jsx          live "listeners" strip at the very top
    NavBar.jsx              wordmark + nav links + Spotify/YT Music buttons
    Hero.jsx                background image + headline, wraps NowPlaying
    NowPlaying.jsx          the play/pause control bar
    YouTubePlayer.jsx       hidden iframe that actually plays the audio
    About.jsx               short bio blurb
    Rotations.jsx           the 3 curated playlist cards
    RotationCard.jsx        single playlist card
    SongList.jsx            full 9-track list
    SongRow.jsx              single row in the list
    Footer.jsx               rights disclaimer + contact
  MehfilRadio.jsx           top-level component, wires everything together
  styles.css                 all styling, as CSS custom properties + classes
```

## Using it

1. Install the one dependency this needs for icons:
   ```
   npm install lucide-react
   ```
2. Drop the `src` contents into your project (or point your bundler at this
   folder), then render it:
   ```jsx
   import MehfilRadio from "./MehfilRadio";

   export default function App() {
     return <MehfilRadio />;
   }
   ```

## Before you ship it

- **Swap the background image.** `src/assets/streetScene.js` currently
  exports the illustration as a giant base64 string so the whole app is
  self-contained. For a real project, replace it with a normal image import:
  ```js
  // assets/streetScene.js
  import bg from "./street-scene.jpg";
  export const BG_IMAGE = bg;
  ```
  and drop `street-scene.jpg` next to it — your bundler will handle
  hashing/caching far better than an inline data URI.
- **Replace the footer email.** `hello@mehfilradio.example` is a placeholder.
- This is a fan-made layout, not an official Nusrat Fateh Ali Khan product —
  the footer says so on purpose; keep that disclaimer if you publish it.
