/*
    Spotify embeds and components
 */
import React from 'react';

function SpotifyPlaylist(props) {
    return (
        <div className="w-max">
            <iframe data-testid="embed-iframe" className="rounded-sm"
                    src={`https://open.spotify.com/embed/playlist/${props.playlistId}?utm_source=generator&si=cd50b4a902ed4d87`}
                    width="100%" height="352" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </div>
    );
}

function SpotifyBadge(props) {
    return (
        <a
            href={props.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-4 px-2 bg-[#121212] text-white rounded-xl text-sm border-1 border-neutral-800 transition-all duration-200"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1DB954')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#121212')}
        >
            {/* Spotify Icon SVG */}
            <i className="text-4xl fa-brands fa-spotify" />
            <p className="text-md">Follow {props.username} on Spotify</p>

        </a>
    );
}

export { SpotifyBadge, SpotifyPlaylist }