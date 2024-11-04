
// console.log("Lets write JavaScript")
// let currentSong = new Audio();
// let songs;
// let currfolder;

// function secondsToMinutesSeconds(seconds) {
//   if (isNaN(seconds) || seconds < 0) {
//     return "00:00";
//   }

//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = Math.floor(seconds % 60);

//   const formattedMinutes = String(minutes).padStart(2, '0');
//   const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//   // return `${formattedMinutes}:{formattedSeconds}`;
//    return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function getSongs(folder) {
//   currfolder = folder;
//   let a = await fetch(`/${folder}/`)
//   let response = await a.text();
//   let div = document.createElement("div")
//   div.innerHTML = response;
//   let as = div.getElementsByTagName("a")
//   songs = []
//   for (let index = 0; index < as.length; index++) {
//     const element = as[index];
//     if (element.href.endsWith(".mp3")) { 
//       // songs.push(element.href.split("SpotifyMate.com")[1]) 
//       songs.push(element.href.split(`/${folder}/`)[1]) 

//     }
//   }



//   //show all the songs in the playlist
//   let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
//   songUL.innerHTML = ""
//   for (const song of songs) {
//     songUL.innerHTML = songUL.innerHTML + `<li>
//                         <img class="invert" src="img/music.svg" alt="">
//                         <div class="info">
//                             <div class="SongName">${song.replaceAll("%20", " ")}</div>
//                             <div class="SongArtist">Ankita</div>
//                         </div>
//                         <div class="playnow">
//                             <span>Play Now</span>
//                          <img class="invert"src="img/play.svg" alt="">
//                         </div></li>`;
//   }
//   //Attach an event listener to each song
//   Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
//     e.addEventListener("click", element => {
//       console.log(e.querySelector(".info").firstElementChild.innerHTML)
//       playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//     })

//   })

//   return songs




// }
// const playMusic = (track, pause = false) => {
//   currentSong.src = `/${currfolder}/` + track
//   if (!pause) {
//     currentSong.play()
//     play.src = "img/pause.svg"
//   }

//   document.querySelector(".songinfo").innerHTML = decodeURI(track)
//   document.querySelector(".songtime").innerHTML = "00:00/00:00"

// }

// async function displayAlbums() {
//   console.log("displaying albums")
//   let a = await fetch(`/songs/`)
//   let response = await a.text();
//   let div = document.createElement("div")
//   div.innerHTML = response;
//   let anchors = div.getElementsByTagName("a")
//   let cardContainer = document.querySelector(".cardContainer")
  
//   let array =[];

//   Array.from(anchors).forEach(e => {
//     if(e.href.includes("/songs/")){
//       array.push(e.title)
//     }
//   })

  

//   for (let index = 0; index < array.length; index++) {
//     const e = array[index];


//     if (true) {
//       // if(e.href.includes("/songs/")){
//       let folder = e

//       // Get the metadata of the folder
//       let a = await fetch(`/songs/${folder}/info.json`)
//       let response = await a.json();

//       cardContainer.innerHTML = cardContainer.innerHTML + 
//       ` <div data-folder="${folder}" class="card">
//                   <div  class="play">
//                    <img src="img/play.svg" alt="">
      
                    
//                   </div>  
//                  <img src="/songs/${folder}/cover.jpg" alt="">
//                   <h2>${response.title}</h2>
                 
//                     <p>${response.description}</p>
//                    </div> `
//     }
//   }

//   //Load the playlist whenever card is clicked
//   Array.from(document.getElementsByClassName("card")).forEach(e => {

//     e.addEventListener("click", async item => {
//       console.log("Fetching Songs")
//       songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
//       playMusic(songs[0])
//     })

//   })

// }
// async function main() {

//   //Get the list of all the songs
//   await getSongs("songs/ncs")
//   playMusic(songs[0], true)

//   //Display all the albums on the page
//   await displayAlbums()



//   //Attach an event listner to play, next and previous songs
//   play.addEventListener("click", () => {
//     if (currentSong.paused) {
//       currentSong.play()
//       play.src = "img/pause.svg"
//     }
//     else {
//       currentSong.pause()
//       play.src = "img/play.svg"
//     }
//   })
//   //listen for timeupdate event
//   currentSong.addEventListener("timeupdate", () => {
//     /* #######################################################################*/
//     document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
//     document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//   })

//   //Add an event listener to seekbar
//   document.querySelector(".seekbar").addEventListener("click", e => {
//     let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//     document.querySelector(".circle").style.left = percent + "%";
//     currentSong.currentTime = ((currentSong.duration) * percent) / 100
//   })

//   //Add an event listner for hamburger
//   document.querySelector(".hamburger").addEventListener("click", () => {
//     document.querySelector(".left").style.left = "0"
//   })
//   //Add an event listner for close button
//   document.querySelector(".close").addEventListener("click", () => {
//     document.querySelector(".left").style.left = "-120%"
//   })
//   // Add an event listener to previous 
//   previous.addEventListener("click", () => {
//     currentSong.pause()
//     console.log("previous clicked")
//     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//     if (index - 1 >= 0) {
//       playMusic(songs[index - 1])
//     }
//   })
//   // Add an event listener to  next
//   next.addEventListener("click", () => {
//     currentSong.pause()
//     console.log("Next clicked")


//     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//     if (index + 1 < songs.length) {
//       playMusic(songs[index + 1])
//     }

//   })
//   //Add an event to volume
//   document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//     console.log("Setting volume to", e.target.value, "/100")
//     currentSong.volume = parseInt(e.target.value) / 100
//     if (currentSong.volume > 0) {
//       document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
//     }
//   })
//   // Add event listener to mute the track
//   document.querySelector(".volume>img").addEventListener("click", e => {

//     if (e.target.src.includes("volume.svg")) {
//       e.target.src = e.target.src.replace("volume.svg", "mute.svg")
//       currentSong.volume = 0;
//       document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
//     }
//     else {
//       e.target.src = e.target.src.replace("mute.svg", "volume.svg")
//       currentSong.volume = .10;
//       document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
//     }
//   })






//   //   //play the 1st song
//   //   var audio = new Audio(songs[0]);
//   //   audio.play();

//   //   audio.addEventListener("loadeddata", () => {
//   //   let duration = audio.duration;
//   //   console.log(audio.duration,audio.currentSrc, audio.currentTime)
//   //   // The duration variable now holds the duration (in seconds) of the audio clip
//   //  });
// }
// main()



console.log("Let's write JavaScript");

let currentSong = new Audio();
let songs = [];
let currfolder;

// Convert seconds to MM:SS format
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

// Fetch songs from a specific folder
async function getSongs(folder) {
  currfolder = folder;
  let response = await fetch(`/${folder}.json`);
  let data = await response.json();
  songs = data.tracks.map(track => track.name);

  // Show all the songs in the playlist
  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML += `
      <li>
        <img class="invert" src="img/music.svg" alt="">
        <div class="info">
          <div class="SongName">${song.replaceAll("%20", " ")}</div>
          <div class="SongArtist">Ankita</div>
        </div>
        <div class="playnow">
          <span>Play Now</span>
          <img class="invert" src="img/play.svg" alt="">
        </div>
      </li>`;
  }

  // Attach event listeners to each song
  Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  return songs;
}

// Play a specific track
const playMusic = (track, pause = false) => {
  currentSong.src = `/${currfolder}/` + track;
  if (!pause) {
    currentSong.play();
    play.src = "img/pause.svg";
  }

  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00/00:00";
};

// Display all albums on the page
async function displayAlbums() {
  console.log("Displaying albums");

  let response = await fetch(`/songs/songs.json`);
  let data = await response.json();
  let cardContainer = document.querySelector(".cardContainer");

  for (const folder of data.folders) {
    let folderResponse = await fetch(`/songs/${folder}.json`);
    let folderData = await folderResponse.json();

    cardContainer.innerHTML += `
      <div data-folder="${folder}" class="card">
        <div class="play">
          <img src="img/play.svg" alt="">
        </div>  
        <img src="/songs/${folder}/${folderData.tracks[0].cover}" alt="">
        <h2>${folderData.title}</h2>
        <p>${folderData.description}</p>
      </div>`;
  }

  // Load the playlist whenever a card is clicked
  Array.from(document.getElementsByClassName("card")).forEach(e => {
    e.addEventListener("click", async item => {
      console.log("Fetching Songs");
      songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
      playMusic(songs[0]);
    });
  });
}

// Main function
async function main() {
  // Get the list of all the songs from the first folder
  await getSongs("songs/ArijitSingh");
  playMusic(songs[0], true);

  // Display all albums on the page
  await displayAlbums();

  // Attach event listeners for playback controls
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "img/pause.svg";
    } else {
      currentSong.pause();
      play.src = "img/play.svg";
    }
  });

  // Listen for timeupdate event
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // Add an event listener to the seek bar
  document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) / 100;
  });

  // Add an event listener for the hamburger menu
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  // Add an event listener for the close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });

  // Add an event listener for the previous button
  previous.addEventListener("click", () => {
    currentSong.pause();
    console.log("Previous clicked");
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  // Add an event listener for the next button
  next.addEventListener("click", () => {
    currentSong.pause();
    console.log("Next clicked");
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });

  // Add an event listener for the volume control
  document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log("Setting volume to", e.target.value, "/100");
    currentSong.volume = parseInt(e.target.value) / 100;
    if (currentSong.volume > 0) {
      document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg");
    }
  });

  // Add an event listener to mute the track
  document.querySelector(".volume>img").addEventListener("click", e => {
    if (e.target.src.includes("volume.svg")) {
      e.target.src = e.target.src.replace("volume.svg", "mute.svg");
      currentSong.volume = 0;
      document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
    } else {
      e.target.src = e.target.src.replace("mute.svg", "volume.svg");
      currentSong.volume = .10;
      document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
    }
  });
}

// Run the main function
main();


























