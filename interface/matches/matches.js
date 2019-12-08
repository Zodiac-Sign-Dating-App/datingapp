export const matchesMain = function() {
    return $(`
    <div id = "root">
    <section id = "header">
        <div class = "container" align = "center">
            <h2 class="">
            Your Matches
            </h2>
            <div>
            <button class = "newPost button is-small is-rounded is-dark"> New Post </button>
            <button class = "refresh button is-small is-rounded is-dark"> Refresh </button>
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
    <div align="center" matchID="${match.id}" matchBody= "${match.bio}" matchZodiac= "${match.zodiac}"> 
        <div class = "column is-half is-offset-one-quarter">
            <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="https://cdn3.iconfinder.com/data/icons/social-icons-5/607/Twitterbird.png" alt="TwitterBird">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong> <div class = "username"> ${match.name} </div> </strong>
                                <br>
                                
                                <br>
                                ${match.bio}
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left"></div>
                        </nav>
                    </div>
                </article>
            </div>
        </div>
    </div>`);

    matchView.append($(`
        <button class="replyButton button is-small is-rounded is-dark" type="submit"> 
                reply
                ${match.dob} 
                <br>
                <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
                </button>`));   
   
    return matchView;
};

export const loadMatches = function (matches) {
    //let user = get call to get user data object
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
