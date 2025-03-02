async function getAccessToken(params) {
    
    const clientId = "5c452f8a032c48069f7463b24d7768d2"
    const clientSecret = "af8bee04f87043d4bae74292d9db1f6e"
        
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;

}

async function test(params) {
    const token = await getAccessToken();
    console.log("Access Token:", token);
}

test();