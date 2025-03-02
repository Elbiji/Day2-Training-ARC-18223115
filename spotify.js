async function getAccessToken(params) {
    
    const clientId = "5c452f8a032c48069f7463b24d7768d2"
    const clientSecret = "af8bee04f87043d4bae74292d9db1f6e"
        
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
        }, // Spotify Requirements btoa for authentication request
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    console.log(data)
    return data.access_token;
    
}

async function getPlaylist(){
    
    const Token = await getAccessToken();
    console.log(Token);

    const result = await fetch ('https://api.spotify.com/v1/playlists/7dyetqSF5Bgd1lEkr9UzI1', {
        method : 'GET',
        headers : {
            Authorization : `Bearer ${Token}`
        }
    })

    const data = await result.json();
    console.log(data);
}

async function test(params) {
    const token = await getAccessToken();
    console.log("Access Token:", token);
    getPlaylist();
}


test();