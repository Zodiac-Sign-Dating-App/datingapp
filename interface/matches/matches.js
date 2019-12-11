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

export const renderMatches = function(match, pro) {
    let compatability = zodiacs.find(item => item.id = pro.zodiac)[match.zodiac];
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

    let matchView = `
    <div align="center"> 
        <div class = "media headerText" align = "center>
            <img src = ${match.img} alt = "pic">
            ${match.name}
        </div>

        <div class="box">
            <article class="media">
                <div class="media" align = "center">
                    <figure class="image is-medium">
                        <img src= ${zimage} alt="match zodiac">
                    </figure>

                    <p class = "headerText">Compatability Score: <span class = "titleText" style = "color: red;"> ${compatability} <span></p>
                </div>

                <div class="media-content">
                    <div class="content">
                        <p class = "headerText">
                            Age : <span class = "bodyText"> ${match.age} </span>
                            Interests : <span class = "bodyText"> ${match.interests} </span>
                            Bio : <span class = "bodyText"> ${match.bio} </span>
                        </p>
                    </div>
                </div>

                <button <a href = ${match.insta} class="instaButton button is-medium is-rounded is-dark specialText" type="submit"> 
                    <figure class="image is-medium icon">
                        <img src = "../instagram.jpg" alt = "insatgram">
                    </figure>
                    Link with me on Instagram
                </a></button>
            </article>
        </div>
    </div>`; 
   
    return matchView;
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
    $root.append(loadMatches(matchez));
    
};

$(document).ready(function() {

    loadMatchesIntoDOM(profileData);
});