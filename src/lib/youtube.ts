export function getYoutubeVideoId(url: string): string | null {
  if (!url.trim()) return null;

  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return videoId;

      const pathMatch = parsed.pathname.match(/\/(embed|shorts|live)\/([^/?]+)/);
      if (pathMatch) return pathMatch[2];
    }
  } catch {
    return null;
  }

  return null;
}

export function getYoutubeEmbedUrl(url: string): string | null {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}
