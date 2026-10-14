// Site-wide facts. This is the one file to edit when the meeting time or
// place changes.
//
// A value of `null` means "not confirmed". Wherever that value would appear,
// the site shows a highlighted "TODO: confirm" marker instead, so nothing
// unconfirmed is ever presented as fact.

export const TODO = 'TODO: confirm';

export const site = {
  url: 'https://www.gfcbsg.com',
  name: {
    zh: '大福克斯中文查经班',
    en: 'Grand Forks Chinese Bible Study Group',
  },
  shortName: 'GFCBSG',
  email: 'chinese.biblestudy.group@gmail.com',
  foundedYear: 2002,
  description:
    '大福克斯中文查经班成立于 2002 年，是北达科他州大福克斯的中文查经班。' +
    'The Grand Forks Chinese Bible Study Group was founded in 2002 in Grand Forks, North Dakota.',
};

interface Bilingual {
  zh: string;
  en: string;
}

interface Venue {
  name: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
}

interface Meeting {
  day: Bilingual | null;
  time: Bilingual | null;
  venue: Venue | null;
}

// The old website (last updated 2018) said: Fridays at 7:30 pm, at
// Faith Evangelical Free Church, 1400 24th Ave S, Grand Forks, ND 58201.
// That is not confirmed as current, so every field is null for now.
//
// When confirmed, fill the fields in like this:
//
//   day: { zh: '周五', en: 'Friday' },
//   time: { zh: '晚上 7:30', en: '7:30 pm' },
//   venue: {
//     name: 'Faith Evangelical Free Church',
//     street: '1400 24th Ave S',
//     city: 'Grand Forks',
//     region: 'ND',
//     postalCode: '58201',
//   },
export const meeting: Meeting = {
  day: null,
  time: null,
  venue: null,
};

export function venueAddress(venue: Venue): string {
  return `${venue.street}, ${venue.city}, ${venue.region} ${venue.postalCode}`;
}

export function mapUrl(venue: Venue): string {
  const query = `${venue.name}, ${venueAddress(venue)}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
