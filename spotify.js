async function getAccessToken() {
    
    const clientId = "5c452f8a032c48069f7463b24d7768d2"
    const clientSecret = "af8bee04f87043d4bae74292d9db1f6e"
        
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
        }, // Spotify requires btoa for authentication request
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    // console.log(data)
    return data.access_token;
    
}

async function getPlaylist(){
    
    const Token = await getAccessToken();
    // console.log(Token);

    const result = await fetch ('https://api.spotify.com/v1/playlists/3XwEbHqIDLWdee9MOGXpeX', {
        method : 'GET',
        headers : {
            Authorization : `Bearer ${Token}`
        }
    })

    const data = await result.json();
    console.log(JSON.stringify(data.tracks.items, null, 2));
    displayList(data);
}

function displayList(data) {
    const tracksContainer = document.getElementById("tracks");
    // tracksContainer.innerHTML = "";

    data.tracks.items.slice(0,5).forEach((trackItem, index) => {
        const track = trackItem.track;
        const trackElement = document.createElement("div");
        const trackdetails = document.createElement("div");
        trackElement.classList.add("track");
        
        const trackImage = document.createElement("img");
        trackImage.src = track.album.images[0]?.url || '';
        trackImage.alt = track.name;
        trackImage.width = 100;
       
        const trackName = document.createElement("h1");
        trackName.innerHTML = track.name;
        
        const trackArtists = document.createElement("p");
        trackArtists.innerHTML = track.artists.map(artist => artist.name).join(",");
        

        trackElement.appendChild(trackImage);
        trackdetails.appendChild(trackName);
        trackdetails.appendChild(trackArtists);
        trackElement.appendChild(trackdetails);
        tracksContainer.appendChild(trackElement);
    });
}

getPlaylist()
