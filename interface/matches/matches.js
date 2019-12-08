export const matchesMain = function() {
    return $(`
    <div id = "root">
    <section id = "header">
        <div class = "container" align = "center">
            <h2 class="titlehead">
            Olivia McPhaul,
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
    const match = $(`<div class="match" id="${match.id}"></div>`);

    const matchView = $(`
    <div align="center" matchID="${match.id}" matchBody= "${match.body}" matchZodiac= "${match.zodiac}"> 
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
                                <strong> <div class = "username"> ${match.author} </div> </strong>
                                <br>
                                ${time}
                                <br>
                                ${match.body}
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
        <button class="rematchButton button is-small is-rounded is-dark">
            rematchs
            ${match.rematchCount}
            <br>
            <span class="icon is-small">
                <i class="fas fa-rematch" aria-hidden="true"></i>
            </span>
        </button>`));

    if (match.isMine) {
        matchView.append($(`
            <button class="likeButton button is-small is-rounded is-dark">
                likes
                ${match.likeCount} 
                <br>
                <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
            </button>`));
        matchView.append($(`<button class="editButton button is-small is-rounded is-dark">Edit</button>`));
        matchView.append($(`<button class="deleteButton button is-small is-rounded is-dark">Delete</button>`));
    } 
    else {
        if (match.isLiked) {
        matchView.append($(`
            <button class="unlikeButton button is-small is-rounded is-dark" type="submit">
                unlike
                ${match.likeCount} 
                <br>
                <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
               </button>`));
            }

        else {
            matchView.append($(`
                <button class="likeButton button is-small is-rounded is-dark" type="submit">
                    likes
                    ${match.likeCount} 
                    <br>
                    <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </span>
                </button>`));
            }
    }

    matchView.append($(`
        <button class="replyButton button is-small is-rounded is-dark" type="submit"> 
                reply
                ${match.replyCount} 
                <br>
                <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
                </button>`));   
    somematch.append(matchView);
    return somematch;
};

export const loadMatches = function () {
    //foreach match in data.js {
        if(match.id != this.id) {
            //if(match.zodiac is in this.matches) {
                //if(match.gender is in this.like) {
                    if(match.isLiked) {
                        $('#matches').append(renderMatches(match));
                    }
                }
            }

        //}
    //}
//};

export const loadMatchesIntoDOM = function () {
    let $root = $('#root');
    $root.empty();
    $root.append(matchesMain);

    loadMatches();
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
};

$(function () {
    loadMatchesIntoDOM();
});