import type { LucideIcon } from "lucide-react";
import { Play } from "lucide-react";
import { getYoutubeEmbedUrl } from "@/lib/youtube";
import { cn } from "@/lib/utils";

export type YouTubeVideo = {
  id?: string;
  youtubeUrl: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type YouTubeVideoGridProps = {
  videos: YouTubeVideo[];
  embedPlaceholder?: string;
  className?: string;
};

function YouTubeVideoCard({
  video,
  embedPlaceholder,
}: {
  video: YouTubeVideo;
  embedPlaceholder?: string;
}) {
  const Icon = video.icon;
  const embedUrl = getYoutubeEmbedUrl(video.youtubeUrl);

  return (
    <article className="rounded-3xl bg-white/70 border border-neutral-200/70 overflow-hidden">
      <div className="aspect-video bg-neutral-100">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="size-16 rounded-full bg-brand-card flex items-center justify-center mx-auto mb-4">
                <Play className="size-8 text-neutral-700" />
              </div>
              {embedPlaceholder ? (
                <p className="text-neutral-600 text-sm">{embedPlaceholder}</p>
              ) : null}
              <p className="text-neutral-500 text-xs mt-1">{video.label}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="size-5 text-neutral-900" aria-hidden="true" />
          <h3 className="text-xl font-semibold text-neutral-900">{video.title}</h3>
        </div>
        <p className="text-neutral-700 leading-relaxed">{video.description}</p>
      </div>
    </article>
  );
}

export function YouTubeVideoGrid({
  videos,
  embedPlaceholder,
  className,
}: YouTubeVideoGridProps) {
  if (videos.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8", className)}>
      {videos.map((video, index) => (
        <YouTubeVideoCard
          key={video.id ?? `${video.title}-${index}`}
          video={video}
          embedPlaceholder={embedPlaceholder}
        />
      ))}
    </div>
  );
}
