"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function HeroVideoModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full aspect-video">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-black bg-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src="../videos/video.mp4"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
