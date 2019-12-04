
export const renderzodiacCard = function(zodiac) {
    let out = 
    `
    <div class = "container thisCard" data-id="${zodiac.id}">
    <div class = "card">
        <div class="card-imname">
            <figure class="">
                <img class="is-rounded" src=${zodiac.img} alt="Placeholder imname">
            </figure>
        </div>
    <div class="card-content">
    <div class = "media">
        <div class = "media-content">
        
        <h1 class = "title" style = "font-family: verdana; background-color: ${zodiac.backgroundColor}"> <span style = "color: ${zodiac.color}">${zodiac.name}</span></h1>
        <h2 class = "subtitle" style = "font-family: verdana"> ${zodiac.age}</h2>
        <h3 class = "subtitle is-italic" style = "font-family: verdana"> Zodiac: "${zodiac.subtitle}"</h3>
        <p style = "font-family: verdana"> Description: ${zodiac.description}</p>
        <br>
        <p style = "font-family: verdana"> Interests: ${zodiac.interests}</p>
        
        </div>
        <button <a class = "button is-rounded EditButton" data-id = "${zodiac.id}"> Edit</a></button>        
    </div>
    </div>
    </div>    
    </div>`;
    return  out;
};


export const renderzodiacEditForm = function(zodiac) {
    let out = 

    `
    <div class = "card thisCard">
<form class = "zodiacForm" data-id = "${zodiac.id}">

<div class="field">
    <label class="label blank"><span style = "font-family: verdana">name</span></label>
        <div class="control">
            <input class="name input" type="text" value="${zodiac.name}"> 
        </div>
</div>

<div class="field">
    <label class="label"><span style = "font-family: verdana">age </span></label>
        <div class="control">
            <input class="age input" type="text" placeholder="age" value = "${zodiac.age}">
        </div>
</div>


<div class="field">
<label class="label"><span style = "font-family: verdana">Description</span></label>
        <textarea class="description textarea">${zodiac.description}</textarea>
</div>

<div class="field">
<label class="label"><span style = "font-family: verdana">Intersts</span></label>
        <textarea class="interests textarea">${zodiac.interests}</textarea>
</div>

<div class="field is-grouped">
    <div class="control">
        <button class = "button is-rounded is-small SubmitButton" type="submit" data-id = "${zodiac.id}"> Save</button>
    </div>
    <div class="control">
        <button class = "button is-rounded is-small CancelButton" type="cancel" data-id = "${zodiac.id}"> Cancel</button>
    </div>
</div>


</form>
</div>
`
    return  out;

};


export const handleEditButtonPress = function(event) {
    let editButton = $(event.target);
    let zodiacID = $(event.target).data('id');
    let thiszodiac = zodiacData.find(zodiac => {
        return zodiac.id == zodiacID;
    });
    let cardChange = editButton.closest('.thisCard');
    cardChange.replaceWith(renderzodiacEditForm(thiszodiac));

};

export const handleCancelButtonPress = function(event) {
    // TODO: Render the zodiac card for the clicked zodiac and replace the
    //       zodiac's edit form in the DOM with their card instead
    let cancelButton = $(event.target);
    let zodiacID = $(event.target).data('id');
    let thiszodiac = zodiacData.find(zodiac => {
        return zodiac.id == zodiacID;
    });
    let cardChange = cancelButton.closest('.thisCard');
    cardChange.replaceWith(renderzodiacCard(thiszodiac));

};




export const handleEditFormSubmit = function(event) {

    let editButton = $(event.target);
    let zodiacID = $(event.target).data('id');
    let thiszodiac = zodiacData.find(zodiac => {
        return zodiac.id == zodiacID;
    });

    let current = editButton.closest('.zodiacForm');

    thiszodiac.name = current.find('.name').val();
    thiszodiac.age = current.find('.age').val();
    thiszodiac.last = current.find('.last').val();
    thiszodiac.subtitle = current.find('.subtitle').val();
    thiszodiac.interests = new Date(current.find('.interests').val().replace(/-/g, '/'));
    thiszodiac.description = current.find('.description').val();

    current.replaceWith(renderzodiacCard(thiszodiac));

};

export const loadzodiacesIntoDOM = function(zodiaces) {
    const $root = $('#root');

    let zodiac_array = [];
    for (let i = 0; i < zodiaces.length; i++) {
        console.log(zodiaces[i]);
        zodiac_array[i] = renderzodiacCard(zodiaces[i]);
    }
    $root.append(zodiac_array);
 
    $root.on("click", ".EditButton", handleEditButtonPress);

    $root.on("click",".SubmitButton",handleEditFormSubmit);

    $root.on("click", ".CancelButton", handleCancelButtonPress)
};

$(function() {
    loadzodiacesIntoDOM(zodiacData);
});

