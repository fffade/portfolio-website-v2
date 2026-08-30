/*
    Spotify embeds and components
 */
import React from 'react';

function SpotifyPlaylist(props) {
    return (
        <div className="absolute bottom-[100%] w-[250%] right-0 rounded-sm shadow-xl" style={{animation: "fadeIn 0.2s ease-in-out"}}>
            <iframe data-testid="embed-iframe" className="rounded-sm"
                    src={`https://open.spotify.com/embed/playlist/${props.playlistId}?utm_source=generator&si=cd50b4a902ed4d87`}
                    width="100%" height="352" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy" title="Spotify Playlist Preview"></iframe>
        </div>
    );
}

function SpotifyBadge(props) {

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Pop up playlist */}
            {isHovered && <SpotifyPlaylist playlistId="0rBVXPLaNygt8jYX9gCWXP"/>}
            <a
                href={props.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-[140px] gap-2 py-4 px-2 bg-[#121212] text-white rounded-xl text-sm border-1 border-neutral-800 transition-all duration-200"
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1DB954')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#121212')}
            >
                {/* Spotify Icon SVG */}
                <i className="text-4xl fa-brands fa-spotify" />
                <p className="text-md">Follow {props.username} on Spotify</p>
            </a>
        </div>
    );
}

export { SpotifyBadge, SpotifyPlaylist }