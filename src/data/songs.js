

import ambar from "../assets/Ambar _ Parmish Verma _ Wamiqa Gabbi _ Sukhan Verma _ Tabaah In Theatres Now.mp3";
import changaMadaTime from "../assets/Changa Mada Time (Full Video) _ A Kay _ Latest Punjabi Song 2016 _ Speed Records.mp3";
import jhumke from "../assets/Jhumke _ Parmish Verma _ Wamiqa Gabbi _ Tabaah In Theatres 18 Oct _ Speed Records.mp3";
import kawanDiDaar from "../assets/KAWAN DI DAAR (Official Video) _ A Kay _ Latest Punjabi Songs 2026 _ T-Series.mp3";
import tabaahCollection from "../assets/Tabaah movie all song's _ Parmish Varma _Jhumke, Wakh, Hanju, Haule Haule, Amber, Title Track Tabaah.mp3";
import tuttiYaari from "../assets/Tutti Yaari (Full Song) A-Kay _ Latest Punjabi Songs _ Speed Records.mp3";
import wakh from "../assets/Wakh _ Parmish Verma _ Wamiqa Gabbi _ Latest Punjabi Songs 2024 _ Tabaah Releasing 18 Oct.mp3";

export const SONGS = [
  { id: "iNryWZ5hxm8", title: "Aavan Jaavan", tag: "War 2", note: "Arijit Singh, Nikhita Gandhi" },
  { id: "Umqb9KENgmk", title: "Tum Hi Ho", tag: "Aashiqui 2", note: "Arijit Singh" },
  { id: "284Ov7ysmfA", title: "Channa Mereya", tag: "Ae Dil Hai Mushkil", note: "Arijit Singh" },
  { id: "sK7riqg2mr4", title: "Agar Tum Saath Ho", tag: "Tamasha", note: "Arijit Singh, Alka Yagnik" },
  { id: "BddP6PYo2gs", title: "Kesariya", tag: "Brahmastra", note: "Arijit Singh" },
  { id: "Grr0FlC8SQA", title: "Phir Bhi Tumko Chaahunga", tag: "Half Girlfriend", note: "Arijit Singh" },
  { id: "V8lJw8jJ4lA", title: "Hawayein", tag: "Jab Harry Met Sejal", note: "Arijit Singh" },
  { id: "PqFMFVcCZgI", title: "Shayad", tag: "Love Aaj Kal", note: "Arijit Singh" },
  { id: "eK0IIyBlYew", title: "Tera Yaar Hoon Main", tag: "Sonu Ke Titu Ki Sweety", note: "Arijit Singh" },
  /*
  { id: "o7fArxQHR-8", title: "Allah Hoo Allah Hoo", ur: "اللہ ہو اللہ ہو", tag: "Zikr · Sama", note: "Live, OSA Worldwide" },
  { id: "eYSaHXXFIBU", title: "Sanson Ki Mala Pe", ur: "سانسوں کی مالا پہ", tag: "Bhakti · Sama", note: "1982" },
  { id: "7Ot9mhtaGyY", title: "Haq Ali Ali", ur: "حق علی علی", tag: "Manqabat · Sama", note: "Live, OSA Worldwide" },
  { id: "e84LyqkX8F8", title: "Afreen Afreen", ur: "آفریں آفریں", tag: "Ghazal · Ishq", note: "Sangam, 1996" },
  { id: "gY01irEl8Eo", title: "Mere Rashke Qamar", ur: "میرے رشک قمر", tag: "Ghazal-Qawwali · Ishq", note: "1988, complete version" },
  { id: "cZ3LTV6xgvA", title: "Tumhe Dillagi Bhool Jani Padegi", ur: "تمہیں دل لگی بھول جانی پڑے گی", tag: "Ghazal · Ishq", note: "OSA Worldwide" },
  { id: "WG8T0t321Jg", title: "Sanu Ek Pal Chain Na Aave", ur: "سانوں اک پل چین نہ آوے", tag: "Ghazal · Ishq", note: "Mast Nazron Se" },
  { id: "QhNsrojd7AI", title: "Dum Mast Qalandar", ur: "دمادم مست قلندر", tag: "Qawwali · Dhamaal", note: "Original version, OSA" },
  { id: "D8l3fLJ1Klw", title: "Yeh Jo Halka Halka Suroor Hai", ur: "یہ جو ہلکا ہلکا سرور ہے", tag: "Qawwali · Dhamaal", note: "1980" },
  */
];

export const MY_LIST = [
  { id: "akay-ambar", title: "Ambar", tag: "Local audio", note: "A Kay / Parmish Verma", audioSrc: ambar },
  { id: "akay-changa-mada-time", title: "Changa Mada Time", tag: "A Kay", note: "Punjabi song · 2016", audioSrc: changaMadaTime },
  { id: "akay-jhumke", title: "Jhumke", tag: "Tabaah", note: "Parmish Verma", audioSrc: jhumke },
  { id: "akay-kawan-di-daar", title: "Kawan Di Daar", tag: "A Kay", note: "Punjabi song · 2026", audioSrc: kawanDiDaar },
  { id: "akay-tabaah-collection", title: "Tabaah Movie Songs", tag: "Tabaah", note: "Full collection", audioSrc: tabaahCollection },
  { id: "akay-tutti-yaari", title: "Tutti Yaari", tag: "A-Kay", note: "Punjabi song", audioSrc: tuttiYaari },
  { id: "akay-wakh", title: "Wakh", tag: "Tabaah", note: "Parmish Verma", audioSrc: wakh },
];
export const OTHER_SONGS = SONGS;
export const ALL_SONGS = [...MY_LIST, ...OTHER_SONGS];

export const ROTATIONS = [
  {
    name: "Arijit After Dark",
    desc: "A late-night rotation of Arijit's most loved film songs.",
    ids: [
      "iNryWZ5hxm8", "Umqb9KENgmk", "284Ov7ysmfA", "sK7riqg2mr4", "BddP6PYo2gs",
      "Grr0FlC8SQA", "V8lJw8jJ4lA", "PqFMFVcCZgI", "eK0IIyBlYew",
    ],
  },
  /*
  {
    ur: "شام سماع",
    name: "Sham-e-Sama",
    desc: "Evening remembrance — zikr, manqabat and the songs meant for a shrine courtyard after dark.",
    ids: ["o7fArxQHR-8", "eYSaHXXFIBU", "7Ot9mhtaGyY"],
  },
  {
    ur: "عشق کی محفل",
    name: "Ishq ki Mehfil",
    desc: "Ghazals about longing — the register Nusrat could hold soft for twenty minutes straight.",
    ids: ["e84LyqkX8F8", "gY01irEl8Eo", "cZ3LTV6xgvA", "WG8T0t321Jg"],
  },
  {
    ur: "دھمال دم",
    name: "Dhamaal Dum",
    desc: "The rounds that build — taali speeding up, voice climbing, everyone on their feet by the end.",
    ids: ["QhNsrojd7AI", "D8l3fLJ1Klw"],
  },
  */
];

export function songById(id) {
  return ALL_SONGS.find((s) => s.id === id);
}
