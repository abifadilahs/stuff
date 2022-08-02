// Subscribe on YouTube, and follow on TikTok (@mattupham)! Socials found below:
// https://mattupham.com/links

// @ me on Discord with any questions!
https://link.mattupham.com/discord

/*
if you see this Country: 
undefined State: 
undefined City: 
undefined District: 
undefined Lat / Long: (undefined, undefined) 
Sign up in ipgeolocation.io 
and take API keys and past them in script 
I try this and worked
*/

// https://www.youtube.com/watch?v=fN9cWpY5zUc
//open omegle with browser as (developer tools)

// --------------------------------------------
// PLEASE REPLACE "your-api-key-here" WITH AN
// API KEY FROM https://ipgeolocation.io/
let apiKey = "your-api-key-here";

window.oRTCPeerConnection =
  window.oRTCPeerConnection || window.RTCPeerConnection;

window.RTCPeerConnection = function (...args) {
  const pc = new window.oRTCPeerConnection(...args);

  pc.oaddIceCandidate = pc.addIceCandidate;

  pc.addIceCandidate = function (iceCandidate, ...rest) {
    const fields = iceCandidate.candidate.split(" ");

    console.log(iceCandidate.candidate);
    const ip = fields[4];
    if (fields[7] === "srflx") {
      getLocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, ...rest);
  };
  return pc;
};

let getLocation = async (ip) => {
  let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

  await fetch(url).then((response) =>
    response.json().then((json) => {
      const output = `
          ---------------------
          Country: ${json.country_name}
          State: ${json.state_prov}
          City: ${json.city}
          District: ${json.district}
          Lat / Long: (${json.latitude}, ${json.longitude})
          ---------------------
          `;
      console.log(output);
    })
  );
};