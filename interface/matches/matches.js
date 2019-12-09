export const matchesMain = function() {
    return $(`
    <div id = "root">
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

        <section id = "matchList">
            <div id = "matches">
            </div>
        </section>
    </div>
    `);
};

export const renderMatches = function(match) {
    let compatability = $zodiacs.find(item => item.id = user.zodiac)[match.zodiac];
    const matchView = $(`
    <div align="center"> 
        <div class = "media headerText" align = "center>
            <img src = ${match.img} alt = "pic">
            ${match.name}
        </div>

        <div class="box">
            <article class="media">
                <div class="media" align = "center">
                    <figure class="image is-64x64">
                        <img src= ${match.img} alt="match zodiac">
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
                    <figure class="image is-64x64 icon">
                        <img src = "../instagram.jpg" alt = "insatgram">
                    </figure>
                    Link with me on Instagram
                </a></button>
            </article>
        </div>
    </div>`); 
   
    return matchView;
};

export const loadMatches = function (matches) {
    let user = profileData.find(item => item.id = "brennora");
    matches.forEach(function (match) {
        if(match.id != user.id) {
            if((user.matches).includes(match.zodiac)) {
                if((user.like).includes(match.gender)) {
                    $('#matches').append(renderMatches(match));
                }
            }
        }
    });
};

export const loadMatchesIntoDOM = function (matches) {
    let $root = $('#root');
    $root.empty();
    $root.append(matchesMain);

    loadMatches(matches);
    /*
    $root.on('click', '.retweetButton', retweetButtonHandler);
    $root.on('click', '.deleteButton', deleteButtonHandler);
    $root.on('click', '.postButton', postButtonHandler);
    $root.on('click', '.refreshButton', reloadButtonHandler);
    $root.on('click', '#editSubmit', editSubmitButtonHandler);
    $root.on('click', '#postSubmit', submitButtonHandler);
    $root.on('click', '.replyButton', replyButtonHandler)
    $root.on('click', '.replySubmit', replySubmitButtonHandler)
    $root.on('click', '.likeButton', likeButtonHandler);
    $root.on('click', '.unlikeButton', unlikeButtonHandler);
    $root.on('click', '.editButton', editButtonHandler);
    $root.on('click', '#retweetSubmit', retweetSubmitButtonHandler);
    */
};

$(function () {
    loadMatchesIntoDOM(profileData);
});