// Turns a YouTube or Google Drive link, as copied from the browser, into
// the address used to embed its player on a page.

export interface Video {
  kind: 'youtube' | 'drive';
  /** Address for the embedded player. */
  embedUrl: string;
  /** Address of the video on YouTube or Google Drive. */
  watchUrl: string;
}

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

/** Reads a start time such as "90", "90s" or "1m30s". */
function parseStart(value: string | null): number | undefined {
  if (!value) return undefined;
  if (/^\d+$/.test(value)) return Number(value);
  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match || !match[0]) return undefined;
  return Number(match[1] ?? 0) * 3600 + Number(match[2] ?? 0) * 60 + Number(match[3] ?? 0);
}

/**
 * Accepts the usual forms of a YouTube link (watch, youtu.be, shorts, live,
 * embed) and Google Drive file links. Returns null for anything else.
 */
export function parseVideoUrl(raw: string): Video | null {
  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www|m)\./, '');

  let youtubeId: string | null = null;
  if (host === 'youtu.be') {
    youtubeId = url.pathname.split('/')[1] ?? null;
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    youtubeId =
      url.pathname === '/watch'
        ? url.searchParams.get('v')
        : (url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/]+)/)?.[1] ?? null);
  }
  if (youtubeId && YOUTUBE_ID.test(youtubeId)) {
    const start = parseStart(url.searchParams.get('t') ?? url.searchParams.get('start'));
    return {
      kind: 'youtube',
      // The privacy-enhanced player sets no cookies until the video is played.
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}${start ? `?start=${start}` : ''}`,
      watchUrl: `https://www.youtube.com/watch?v=${youtubeId}${start ? `&t=${start}s` : ''}`,
    };
  }

  if (host === 'drive.google.com') {
    const driveId =
      url.pathname.match(/^\/file\/d\/([A-Za-z0-9_-]+)/)?.[1] ??
      (url.pathname === '/open' ? url.searchParams.get('id') : null);
    if (driveId) {
      // Older shared files only open when the link keeps its resource key.
      const key = url.searchParams.get('resourcekey');
      const query = key ? `?resourcekey=${encodeURIComponent(key)}` : '';
      return {
        kind: 'drive',
        embedUrl: `https://drive.google.com/file/d/${driveId}/preview${query}`,
        watchUrl: `https://drive.google.com/file/d/${driveId}/view${query}`,
      };
    }
  }

  return null;
}
