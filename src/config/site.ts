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
  // The group's Google Calendar, shown on the Events page.
  // It must be set to public in Google Calendar for visitors to see it.
  calendarId: 'chinese.biblestudy.group@gmail.com',
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

// Weekly meeting. Set a field to null if it is not confirmed; the site then
// shows a "TODO: confirm" marker instead of that detail.
export const meeting: Meeting = {
  day: { zh: '周五', en: 'Friday' },
  time: { zh: '晚上 7:30', en: '7:30 pm' },
  venue: {
    name: 'Valley Christian Church',
    street: '3920 Cherry St',
    city: 'Grand Forks',
    region: 'ND',
    postalCode: '58201',
  },
};

export function venueAddress(venue: Venue): string {
  return `${venue.street}, ${venue.city}, ${venue.region} ${venue.postalCode}`;
}

/** schema.org data for the group, used on the Home page. */
export function organizationJsonLd(): Record<string, unknown> {
  const { venue } = meeting;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name.en,
    alternateName: [site.name.zh, site.shortName],
    url: `${site.url}/`,
    email: site.email,
    foundingDate: '2002-10-20',
    foundingLocation: {
      '@type': 'Place',
      name: 'University of North Dakota International Center',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grand Forks',
        addressRegion: 'ND',
        addressCountry: 'US',
      },
    },
    ...(venue && {
      location: {
        '@type': 'Place',
        name: venue.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: venue.street,
          addressLocality: venue.city,
          addressRegion: venue.region,
          postalCode: venue.postalCode,
          addressCountry: 'US',
        },
      },
    }),
  };
}

function venueQuery(venue: Venue): string {
  return encodeURIComponent(`${venue.name}, ${venueAddress(venue)}`);
}

/** Directions to the venue in Google Maps (opens the app on phones). */
export function googleMapsUrl(venue: Venue): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${venueQuery(venue)}`;
}

/** Directions to the venue in Apple Maps (opens the app on iPhone and Mac). */
export function appleMapsUrl(venue: Venue): string {
  return `https://maps.apple.com/?daddr=${venueQuery(venue)}`;
}
