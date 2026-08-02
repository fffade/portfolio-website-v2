/*
  Omar Johnson
  Media Page
  07/27/26

  Shows the featured video on the channel as well as channel info underneath, related and latest videos, and then a button to navigate
*/
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

// Video embed
function FeaturedVideo(props) {

  const videoId = "5gQVeKyQq80";

  return (
    <div className="flex flex-col justify-center">
        <h2 className="text-2xl text-neutral-50 font-semibold m-8">Featured Video</h2>
        <div className="w-full aspect-video rounded-m overflow-hidden shadow-md border border-neutral-800 bg-black">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            />
        </div>
    </div>
  );
}

// Get latest video content
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
function LatestVideo(props) {

    const playlistsId = "UUNIt6Tht2-wk85_nkRu8Msw";

    const uri = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistsId}&maxResults=1&key=${apiKey}`;

    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const response = await fetch(uri);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setChannelData(data.items[0]);
                }
            } catch (error) {
                console.error("Error fetching YouTube data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchChannelData();
    }, [playlistsId, apiKey]);

    if (loading) return <div>Loading video data...</div>;
    if (!channelData) return <div>No uploads found.</div>;

    const videoData = channelData.snippet;

    return (
        <div className="flex flex-col gap-y-4 w-full bg-slate-900 p-6">
            <h4 className="text-lg text-left text-neutral-200 font-bold">Latest Video</h4>
            <div className="flex flex-row gap-x-6">
                <img className="w-32 h-auto shadow-md border-1 border-neutral-800" src={videoData.thumbnails.default.url} alt="Video Thumbnail"/>
                <div className="flex flex-col text-left">
                    <a className="text-neutral-100 text-md underline"
                       href=""
                       target="_blank"
                    >{videoData.title}</a>
                    <p className="text-sm text-slate-500">
                        {videoData.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Channel info and badge
function ChannelInfo(props) {

    const channelId = "UCNIt6Tht2-wk85_nkRu8Msw";

    // Simple embedded styles (you can convert this to CSS/Tailwind)
    const styles = {
        badgeContainer: "flex justify-center m-auto my-6 gap-y-12 gap-x-4 p-6 rounded-sm bg-slate-900 border-neutral-800 border-1 w-fit",
        avatar: "w-16 h-16 rounded-full",
        info: "flex flex-col text-left",
        title: "text-xl font-bold text-neutral-100",
        subs: "text-md font-light text-neutral-300",
        subscribeBtn: "bg-red-700 text-lg rounded-sm ml-8 text-white py-4 px-8"
    };

    const uri = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    console.log(`Hitting endpoint: ${uri}`);

    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const response = await fetch(uri);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setChannelData(data.items[0]);
                }
            } catch (error) {
                console.error("Error fetching YouTube data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchChannelData();
    }, [channelId, apiKey]);

    if (loading) return <div>Loading badge...</div>;
    if (!channelData) return <div>No channel data found.</div>;

    const { title, thumbnails } = channelData.snippet;
    const { subscriberCount } = channelData.statistics;

    // Format sub count (e.g., 10500 -> "10.5K")
    const formattedSubs = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(subscriberCount);

    return (
        <div className={styles.badgeContainer}>
            <img
                src={thumbnails.default.url}
                alt={`${title} profile`}
                className={styles.avatar}
            />
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.subs}>{formattedSubs} subscribers</p>
            </div>
            <a
                href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.subscribeBtn}
            >
                Subscribe
            </a>
        </div>
    );
}

function Media() {

  const navigate = useNavigate();

  return (
    <React.Fragment>

      <div className="container-fluid flex flex-col bg-slate-800 w-screen min-h-64 items-center justify-start gap-y-16 p-24">

        <div className="container w-full md:w-1/2 lg:w-1/3 text-center">

          <FeaturedVideo/>

          <ChannelInfo/>

          <LatestVideo/>

        </div>

      </div>
    </React.Fragment>
  );
}

export default Media;
