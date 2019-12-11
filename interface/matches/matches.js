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

export const renderMatches = function(match) {
    let onj = zodiacs.filter(obj => { return obj.id = "scorpio";});
    let compatability = onj.taurus;
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
            <div class="card" style="background-color:black;">
                <div class="columns">
                    <div class = "media-left">
                        <figure class="image profile">
                            <img src="${match.img}" alt="Placeholder image">
                        </figure>
                    </div>

                    <div class="card-content">
                        <div class="media-content" style = "text-align: center;">
                            <p class="headerText is-4" style="color:purple; font-size: 40px;">${match.name}</p>

                            <div class="media">
                                <figure class="image is-64x64">
                                    <img src=${zimage} alt="Placeholder image">
                                </figure>
                                Compatability Score : ${compatability}
                            </div>
                            
                            <p style="color:white;"><span style="font-weight: bold;">Interests: </span>${match.interests}</p>
                            <p style="color:white;"><span style="font-weight: bold;">Age: </span>${match.age}</p>
                        </div>

                        <div class="content" style="color:white; text-align: center;">
                            ${match.bio}
                            <br>
                            <button <a href = ${match.insta} class="instaButton button is-medium is-rounded is-dark headerText" type="submit"> 
                                <figure class="image is-32x32 icon">
                                    <img src = "../instagram.png" alt = "insatgram">
                                </figure> &nbsp &nbsp &nbsp Link with me on Instagram
                            </a></button>
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
            <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" >Home</a></button>
            <button <a class="button is-rounded  headerText" style="color:purple; padding: 5px; margin: 5px;" >Matches</a></button>
            <button <a class="button is-rounded headerText" style="color:purple; padding: 5px; margin: 5px;">My Profile</a></button>
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

export const loadMatches = function (matchez) {
    let pro = matchez.find(item => item.id = "brennora");
    matchez.forEach(function (match) {
        if(match.id != pro.id) {
            if((pro.matches).includes(match.zodiac)) {
                if((pro.like).includes(match.gender)) {
                    $('#matches').append(renderMatches(match, pro));
                }
            }
        }
    });
};

export const loadMatchesIntoDOM = function (matchez) {
    const $root = $('#root');
    let nav = renderNavBar();
    $root.append(nav);
    let main = matchesMain();
    $root.append(main);

    let matchDOM = [];
    for(let i =0; i <= (matchez.length-1); i++) {
        let m = matchez[i];
        //let u = matchez.find(item => item[id] = "brennora");
        //if(m[id] != u[id]) {
        matchDOM[i] = renderMatches(m);
        //}
    }
    $root.append(matchDOM);
};

$(document).ready(function() {

    loadMatchesIntoDOM(matchData);
});