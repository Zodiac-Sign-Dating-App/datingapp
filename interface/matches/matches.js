export const matchesMain = function() {
    return `
    <div>
        <div style="text-align: center;">
            <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" data-id="${profile.id}">Home</a></button>
            <button <a href = "index.html" class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" data-id="${profile.id}">Matches</a></button>
            <button <a class="button is-rounded headerText" style="color:purple; padding: 5px; margin: 5px;" data-id="${profile.id}">My Profile</a></button>
        </div>
        <section id = "header">
            <div class = "container" align = "center">
                <p class="headerText">
                    Matches
                </p>

                <div class = "specialText">
                    Your star crossed matches can't wait to meet you!
                </div>
            </div>
        </section>

        
        <div id = "matches">
        </div>
    </div>`;
};

export const renderMatches = function(match, user) {
    let compatability = $zodiacs.find(item => item.id = user.zodiac)[match.zodiac];
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

    const matchView = $(`
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

                    <p class = "headerText">Compatability Score: <span class = "titleText" style = "color: red"> ${compatability} <span></p>
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
    </div>`); 
   
    return matchView;
};

export const renderNavBar = function(profile) {

    return `<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="profile/index.html">
          <h1 class="titletext">Star Crossed</h1>
      </a>
    
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

export const loadMatches = function (matches) {
    let user = profileData.find(item => item.id = "brennora");
    matches.forEach(function (match) {
        if(match.id != user.id) {
            if((user.matches).includes(match.zodiac)) {
                if((user.like).includes(match.gender)) {
                    $('#matches').append(renderMatches(match, user));
                }
            }
        }
    });
};

export const loadMatchesIntoDOM = function (matches) {
    const $root = $('#root');

    let nav = renderNavBar();

    $root.append(nav);
    $root.append(matchesMain());

    loadMatches(matches);
    
};

$(function () {
    loadMatchesIntoDOM(profileData);
});