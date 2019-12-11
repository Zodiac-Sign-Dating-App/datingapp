export const matchesMain = function() {
    return `
    <div>
    <div style = "text-align: center;">
        <p class="is-4 titleText" style="color:purple; font-size: 60px; text-align: center;">Matches</p>
        <div class = "headerText" style = "color:white;">
                    Your star crossed matches can't wait to meet you!
        </div>
    </div>
    <br>

    <div id = "matches">
    </div>
    </div>`;
};

export const renderMatches = function(match, sign) {
    let zodi = zodiacs.find(obj => { return obj.id == sign;}); //id == sign
    let xan = match.zodiac;
    let compatability = zodi[xan]; //zodi.(${match.zodiac});
    let zimage = "../../images/galaxy.jpg";
    switch(match.zodiac) {
        case "scorpio":
            zimage = "../../images/scorpio.jpg";
            break;
        case "taurus":
            zimage = "../../images/taurus.jpg";
            break;
        case "capricorn":
            zimage = "../../images/capricorn.jpg";
            break;
        case "gemini":
            zimage = "../../images/gemini.jpg";
            break;
        case "sagittarius":
            zimage = "../../images/sagittarius.jpg";
            break;
        case "aries":
            zimage = "../../images/aries.jpg";
            break;
        case "aquarius":
            zimage = "../../images/aquarius.jpg";
            break;
        case "leo":
            zimage = "../../images/leo.jpg";
            break;
        case "cancer":
            zimage = "../../images/scorpio.jpg";
            break;
        case "virgo":
            zimage = "../../images/virgo.jpg";
            break;
        case "libra":
            zimage = "../../images/libra.jpg";
            break;
        case "pisces":
            zimage = "../../images/pisces.jpg";
            break;
        default:
            zimage = "../../images/galaxy.jpg"
    };

    return `
    <div class="container cardid" data-id="${match.id}">
        <div style="padding: none;">
            <div class="card" style="margin: 50px">
                <div class="columns" style="background-color:white;">
                    <div class = "media-left">
                        <figure class="image card-image">
                            <img class="matchProfile" src="${match.img}" alt="Placeholder image" style="width: 370px; height: 350px; margin-left: 40px; margin-top: 10px;">
                        </figure>
                    </div>

                    <div class="card-content1 is-centered" style = "background-color: white;">
                        <div class="media-content" style = "text-align: center;">
                            <p class="headerText is-4" style="color:purple; font-size: 40px;">${match.name}</p>

                            <div class="content bodyText" style="color:purple; text-align: center;">
                                <i>"${match.bio}"</i>
                            </div>

                            <div class="media">
                                <figure class="card-image is-96x96 is-centered">
                                    <img src=${zimage} alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="titleText" style="font-size: 30px;">
                                Compatability Score : ${compatability}
                            </div>
                            
                            <div class = "bodyText">
                                <p style="color:black;"><span style="font-weight: bold;">Interests: </span>${match.interests}</p>
                                <p style="color:black;"><span style="font-weight: bold;">Age: </span>${match.age}</p>
                                <br>
                            </div>
                        </div>

                        <div class="content" style="colorblack; text-align: center;">
                            <a href = ${match.insta} class="instaButton button is-medium is-rounded is-black headerText" type="submit"> 
                                <figure class="image is-32x32 icon">
                                    <img src = "../instagram.png" alt = "insatgram">
                                </figure> &nbsp &nbsp &nbsp Link with me on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

};

export const renderNavBar = function() {

    return `
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="../profile/index.html">
          <h1 class="titletext">Star Crossed</h1>
      </a>
    
    </div>

    <div class = "topnav-centered">
        <div class = "navbar-item" style="text-align: center;">
            <a href = "../../login/index.html" class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" >Home</a>
            <a href = "index.html" class="button is-rounded  headerText" style="color:purple; padding: 5px; margin: 5px;" >Matches</a>
            <a href = "../profile/index.html" class="button is-rounded headerText" style="color:purple; padding: 5px; margin: 5px;">My Profile</a>
        </div>
    </div>
    
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
          
            
            <a class="button is-light" href ="../../login/index.html">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>`;
    
    }


export const loadMatchesIntoDOM = function (matchez) {
    let si = sessionStorage.getItem('sign');
    let sign = si.toLowerCase();
    let z = zodiacs.find(obj => { return obj.id == sign;});
    const $root = $('#root');
    let nav = renderNavBar();
    $root.append(nav);
    let main = matchesMain();
    $root.append(main);

    let matchDOM = [];
    for(let i =0; i <= (matchez.length-1); i++) {
        let m = matchez[i];
        if(z.matches.includes(m.zodiac)) {
            matchDOM[i] = renderMatches(m, sign);
        }
    }
    $root.append(matchDOM);
};

$(document).ready(function() {

    loadMatchesIntoDOM(matchData);
});