/**
 * Course: COMP 426
 * Assignment: a05
 * Author: Olivia McPhaul
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Copy your code from a04 to render the hero card
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    // var heroDate = hero.firstSeen.toLocaleDateString("en-US");
    
    return `
    <div class="container cardid" data-id="${hero.id}">
    <div style="padding: none;">
    <div class="card" style="background-color:${hero.backgroundColor};">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${hero.img}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="${hero.img}" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4" style="color:${hero.color}; font-size: 40px;">${hero.name}</p>
        <p style="color:white;"><span style="font-weight: bold;">${hero.first} ${hero.last}</p>
        <p class="subtitle is-6" style="color:white;"><i>"${hero.subtitle}"</i></p>
        <p style="color:white;"><span style="font-weight: bold;">First Appearance: </span>${hero.firstSeen}</p>
        
      </div>
    </div>

    <div class="content" style="color:white;">
    ${hero.description}
      <br>
      <br>
      <button <a class="button is-dark is-rounded EditButton" data-id="${hero.id}">Edit</a></button>
    </div>
  </div>
  </div>
  </div>
</div>`;

};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {

    // TODO: Copy your code from a04 to render the hero edit form
    // var heroDate = hero.firstSeen.toLocaleDateString("en-US");
    return `
    
    <form class="heroForm" data-id="${hero.id}">
    
    <div class="field" id="heroFormID">
  <label class="label blank">Hero Name</label>
  <div class="control">
    <input class="name input" type="text" value="${hero.name}"/>
  </div>
</div>

<div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="first input" type="text" placeholder="Hero First Name" value="${hero.first}"/>
  </div>
</div>

<div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="last input" type="text" placeholder="Hero Last Name" value="${hero.last}"/>
  </div>
</div>

<div class="field">
  <label class="label">Subtitle</label>
  <div class="control">
    <input class="sub input" type="text" placeholder="Subtitle" value="${hero.subtitle}"/>
  </div>
</div>

<div class="field">
  <label class="label">First Seen</label>
  <div class="control">
   <input class="seen" type="date" id="start" value="${hero.firstSeen.getFullYear()}-${(x=>x.length == 1?`0${x}`:x)(`${hero.firstSeen.getMonth()+1}`)}-${(x=>x.length==1?`0${x}`:x)(`${hero.firstSeen.getDate()}`)}"</input>
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
<textarea class="description textarea">${hero.description}</textarea>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-danger CancelButton" type="cancel" data-id="${hero.id}">Cancel</button>
  </div>
  <div class="control">
    <button class="button is-dark SubmitButton" type="submit" data-id="${hero.id}">Save</button>
  </div>
</div> 
</form>
 `;
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead
    let heroEditButton = $(event.target);
    let heroId = $(event.target).data('id');
    // let thisHero = heroicData[heroId - 1];
    let hero = heroicData.find(hero => {
        return hero.id == heroId
    });
    let par = heroEditButton.closest('.cardid');
    par.replaceWith(renderHeroEditForm(hero));
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead
    
    let heroCancelButton = $(event.target);
    let heroId = $(event.target).data('id');
    // let thisHero = heroicData[heroId - 1];
    let hero = heroicData.find(hero => {
        return hero.id == heroId
    });
    console.log(hero);
    let parOld = heroCancelButton.closest('.heroForm');
    parOld.replaceWith(renderHeroCard(hero));
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead

    let heroEditButton = $(event.target);
    let heroId = $(event.target).data('id');
    let hero = heroicData.find(h => {
        return h.id == heroId
    });

    // let thisHero = heroicData[heroId - 1];
    // let heroForm = document.getElementById("heroFormID");
    // let replacement = heroicData.replaceWith(heroForm);
     let $par = heroEditButton.closest('.heroForm');

    hero.name = $par.find('.name').val();
    hero.first = $par.find('.first').val();
    hero.last = $par.find('.last').val();
    hero.subtitle = $par.find('.sub').val();
    hero.firstSeen = new Date($par.find('.seen').val().replace(/-/g, '/'));
    console.log(hero.firstSeen);
    hero.description = $par.find('.description').val();

    $par.replaceWith(renderHeroCard(hero));
};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part
    let heroDOM = [];
    for(let i =0; i < heroes.length; i++) {
     heroDOM[i] = renderHeroCard(heroes[i]);
    }
    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part
    $root.append(heroDOM);
    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //       clicking the edit button
    $root.on("click",".EditButton",handleEditButtonPress);
    // $('.EditButton').on('click', handleEditButtonPress);

    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form
    $root.on("click",".SubmitButton",handleEditFormSubmit);
    // $('.SubmitButton').on('click', handleEditFormSubmit);


    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button
    $root.on("click",".CancelButton",handleCancelButtonPress);
    // $('.CancelButton').on('click', handleCancelButtonPress);

};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
