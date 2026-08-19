// All tracks stream via YouTube's embedded player — nothing is hosted in this app.
// Rights remain with Oriental Star Agencies, Real World Records, EMI, Hi-Tech Music
// and the Khan family. Details sourced from public album/label listings.

import sochtaHoon from "../assets/Sochta-Hoon-Ke-Woh-Kitne-Masoom-Thay.mp3";
import tumheinDillagi from "../assets/Tumhein Dillagi Bhool Jaani Padegi.mp3";
import kaliKali from "../assets/Kali-Kali-Zulfon-Ke-Phande-Nah-Dalo.mp3";
import mereRashkeQamar from "../assets/Mere-Rashke-e-Qamar.mp3";
import sansonKiMala from "../assets/sanson-ki-mala-pey.mp3";

export const SONGS = [
  { id: "sochta-hoon-original", title: "Sochta Hoon Ke Woh Kitne Masoom Thay", tag: "Original · Qawwali", note: "Local recording", audioSrc: sochtaHoon },
  { id: "tumhein-dillagi-original", title: "Tumhein Dillagi Bhool Jaani Padegi", tag: "Original · Ghazal", note: "Local recording", audioSrc: tumheinDillagi },
  { id: "kali-kali-original", title: "Kali Kali Zulfon Ke Phande Na Dalo", tag: "Original · Qawwali", note: "Local recording", audioSrc: kaliKali },
  { id: "mere-rashke-qamar-original", title: "Mere Rashke-e-Qamar", tag: "Original · Qawwali", note: "Local recording", audioSrc: mereRashkeQamar },
  { id: "sanson-ki-mala-original", title: "Sanson Ki Mala Pe", tag: "Original · Qawwali", note: "Local recording", audioSrc: sansonKiMala },
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

export const ROTATIONS = [
  {
    name: "Original Recordings",
    desc: "Your local recordings, played directly from the app without YouTube.",
    ids: [
      "sochta-hoon-original",
      "tumhein-dillagi-original",
      "kali-kali-original",
      "mere-rashke-qamar-original",
      "sanson-ki-mala-original",
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
  return SONGS.find((s) => s.id === id);
}
