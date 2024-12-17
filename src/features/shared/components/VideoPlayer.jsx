import { useEffect, useRef, useState } from "react";
import shakaInit from "shaka-player/dist/shaka-player.compiled.js";

export const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [qualities, setQualities] = useState([]);
  const [currentQuality, setCurrentQuality] = useState(null);
  const [showQualityMenu, setShowQualityMenu] = useState(false);

  useEffect(() => {
    shakaInit.polyfill.installAll();

    const shakaPlayer = new shakaInit.Player(videoRef.current);
    setPlayer(shakaPlayer);

    const onErrorEvent = (event) => {
      console.error("Error code", event.detail.code, "object", event.detail);
    };
    shakaPlayer.addEventListener("error", onErrorEvent);

    const loadStream = async () => {
      try {
        await shakaPlayer.load(url);

        const tracks = shakaPlayer.getVariantTracks();
        const qualityLevels = tracks.map((track) => ({
          id: track.id,
          height: track.height,
          width: track.width,
          bandwidth: track.bandwidth,
        }));

        setQualities(qualityLevels);

        if (tracks.length > 0) {
          const middleTrackIndex = Math.floor(tracks.length / 2);
          const middleTrack = tracks[middleTrackIndex];

          shakaPlayer.configure({
            restrictions: {
              maxHeight: middleTrack.height,
              maxWidth: middleTrack.width,
            },
          });

          setCurrentQuality({
            height: middleTrack.height,
            width: middleTrack.width,
          });
        }
      } catch (error) {
        console.error("Error loading stream", error);
      }
    };

    loadStream();

    return () => {
      shakaPlayer.destroy();
    };
  }, [url]);

  const handleQualityChange = (quality) => {
    if (!player) return;

    player.configure({
      restrictions: {
        maxHeight: quality.height,
        maxWidth: quality.width,
      },
    });

    setCurrentQuality(quality);
    setShowQualityMenu(false);
  };

  return (
    <div className="w-full relative  p-4">
      <div className="rounded-lg overflow-hidden ">
        <video ref={videoRef} className="w-full" controls />
        {qualities.length > 0 && (
          <div className="absolute top-4 opacity-80 right-4 bg-black bg-opacity-10 hover:opacity-100 transition-all text-white text-sm rounded shadow-lg p-2 z-10">
            <button
              onClick={() => setShowQualityMenu(!showQualityMenu)}
              className="px-3 py-1 bg-blue-500 rounded"
            >
              {currentQuality ? `${currentQuality.height}p` : "Quality"}
            </button>

            {showQualityMenu && (
              <div className="mt-2">
                {qualities.map((quality) => (
                  <button
                    key={quality.id}
                    onClick={() => handleQualityChange(quality)}
                    className={`block w-full text-left px-3 py-1 rounded ${
                      currentQuality?.height === quality.height
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    {quality.height}p
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
