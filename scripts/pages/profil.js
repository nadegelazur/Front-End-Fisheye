
async function getMedias() {
    //const requestURL = 'https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json';
    
    //const id = parseInt(new URLSearchParams(location.search).get("id"));
    //console.log(id);
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    const response = await fetch('/data/photographers.json');        
    const objets = await response.json();

    const profils = objets.photographers;

    const photographHeader = document.querySelector('.photograph-header');
    // Current photographer
    let profil = profils.find(item => item.id == id);
    //alert(profil.name);
    
    const myDiv1 = document.createElement('div');
    const myH1 = document.createElement( 'h1' );
    const myH2 = document.createElement( 'h2' );    
    const myPara1 = document.createElement( 'p' );

    myDiv1.setAttribute("class", "profil-title");

    myH1.textContent = profil.name;
    myH2.textContent = `${profil.city} , ${profil.country}`;
    myPara1.textContent = profil.tagline;

    photographHeader.appendChild(myDiv1);
    myDiv1.appendChild(myH1);
    myDiv1.appendChild(myH2);
    myDiv1.appendChild(myPara1);

    const myDiv2 = document.createElement('div');
    const myImg = document.createElement( 'img' );

    myDiv2.setAttribute("class", "profil-photo");
    myImg.setAttribute("src", "" + profil.portrait);
    myImg.setAttribute("class", "photo");
    

    photographHeader.appendChild(myDiv2);
    myDiv2.appendChild(myImg);

// MEDIA (images and videos)
    const medias = objets.media;

    // mediaFactory(medias); 

    const photographContent = document.querySelector('.photograph-content');
    // Current photographer medias
    const photographerMedias = medias.filter(media => media.photographerId == id);


    for (const media of photographerMedias) {
        console.log(media)

        const myArticle = document.createElement('article');
        photographContent.appendChild(myArticle);
        
        //div for title and likes
        const mediaDetails = document.createElement('div')
        
        //media Title
        const mediaTitle = document.createElement('p')
        mediaTitle.textContent = `${media.title}`
        mediaDetails.appendChild(mediaTitle)

        //medeia likes
        const likesDiv = document.createElement('div')
        const mediaLikes = document.createElement('span')
        mediaLikes.textContent = `  ${media.likes}`
        const LikeIcon = document.createElement('i')
        LikeIcon.setAttribute("class", "fas fa-heart")
        likesDiv.appendChild(mediaLikes)
        likesDiv.appendChild(LikeIcon)

        mediaDetails.appendChild(likesDiv)
        //mediaTitle.appendChild(mediaLikes)

        //media Image
        if(media.hasOwnProperty('image')){
            const mediaImg = document.createElement('img')
            mediaImg.src = `/assets/medias/${profil.name}/${media.image}`
            // myImg.setAttribute("src", "/assets/medias/" + profil.name + "/" + media.image);
            myArticle.appendChild(mediaImg)
        }else{
            const mediaVideo = document.createElement('video')
            mediaVideo.src = `/assets/medias/${profil.name}/${media.video}`
            mediaVideo.type = "video/mp4"

            //play button
            const playButton = document.createElement('button')
            playButton.textContent = "play";

            mediaVideo.appendChild(playButton)

            myArticle.appendChild(mediaVideo)
            mediaVideo.addEventListener('click',handlePlayButton)
            async function playVideo() {
                try {
                  await mediaVideo.play();
                  playButton.classList.add("playing");
                } catch(err) {
                  playButton.classList.remove("playing");
                }
              }
              
              function handlePlayButton() {
                if (mediaVideo.paused) {
                  playVideo();
                } else {
                    mediaVideo.pause();
                  playButton.classList.remove("playing");
                }
              }
        }

        myArticle.appendChild(mediaDetails)

        // const myDiv = document.createElement('div');
        // const mySpan1 = document.createElement('span');
        // const mySpan2 = document.createElement('span');
        // const mySpan3 = document.createElement('span');
        // const myInput = document.createElement('input');
        // const myLabel = document.createElement('label');
        // const myIcon = document.createElement('i');

        // mySpan1.setAttribute("class", "media-title");
        // mySpan2.setAttribute("class", "media-likes");
        // mySpan3.setAttribute("class", "media-icon");
        // myIcon.setAttribute("class", "fas fa-heart");
        // myInput.setAttribute("type","checkbox");

        // myArticle.appendChild(myDiv);
        // myDiv.appendChild(mySpan1);
        // myDiv.appendChild(mySpan2);
        // myDiv.appendChild(mySpan3);
        // mySpan3.appendChild(myInput);
        // mySpan3.appendChild(myLabel);
        // myLabel.appendChild(myIcon);
        
    }

}

getMedias();

//create a function to get photographer id

//create a fuction to get photographer

//create a function to get photographer content

//create a function to generate the DOM

//create functions to sort content in the console by name,date, likes
