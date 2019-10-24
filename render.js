/**
 * Course: COMP 426
 * Assignment: Final Project
 * Author: Olivia McPhaul, Jairo Rubio, Charlie Helms, Brennora Cameron
 *
 */



/**
 * Given a profile object (see data.js), this function generates a "card" showing
 *     the profile's name, information, and colors.
 * @param profile  A profile object (see data.js)
 */
export const renderprofileCard = function(profile) {
   
    return `
    <p class="title is-4" style="color:${profile.color}; font-size: 60px; text-align: center;">Star Crossed</p>
    <div style="text-align: center;">
    <button <a class="button is-rounded EditButton" style="color:${profile.color}; padding: 5px; margin: 5px;" data-id="${profile.id}">Home</a></button>
    <button <a class="button is-rounded EditButton" style="color:${profile.color}; padding: 5px; margin: 5px;" data-id="${profile.id}">Matches</a></button>
    <button <a class="button is-rounded EditButton" style="color:${profile.color}; padding: 5px; margin: 5px;" data-id="${profile.id}">Messages</a></button>
    <button <a class="button is-rounded EditButton" style="color:${profile.color}; padding: 5px; margin: 5px;" data-id="${profile.id}">My Profile</a></button>
    </div>
    <div class="container cardid" style="margin:0 auto;" data-id="${profile.id}">
    <div style="padding: none;">
    <div class="card" style="background-color:${profile.backgroundColor};">
  <div class="card-image">
    <figure>
      <img class="profile center" src="${profile.img}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
    
      <div class="media-content">
        <p class="title is-4" style="color:${profile.color}; font-size: 50px; text-align: center;">${profile.name}</p>
        <p style="color:white; text-align: center;"><span style="font-weight: bold;">Age: ${profile.age}</p>
        <p class="subtitle is-6" style="color:white; text-align: center;"><i>"${profile.subtitle}"</i></p>
        <p style="color:white; text-align: center;"><span style="font-weight: bold;">Interests: </span>${profile.interests}</p>
        
      </div>
    </div>
<h1 class="title is-4" style="color:${profile.color}; font-size: 30px;">Bio</h1>
    <div class="content" style="color:white;">
    ${profile.description}
      <br>
      <br>
      <button <a class="button is-rounded EditButton" data-id="${profile.id}">Edit Profile</a></button>
    </div>
  </div>
  </div>
  </div>
</div>`;

};



/**
 * Given a profile object, this function generates a <form> which allows the
 *     user to edit the fields of the profile. The form inputs should be
 *     pre-populated with the initial values of the profile.
 * @param profile  The profile object to edit (see data.js)
 */
export const renderprofileEditForm = function(match) {
    return `
    
    <form class="profileForm" data-id="${profile.id}">
    
    <div class="field" id="profileFormID">
  <label class="label blank">profile Name</label>
  <div class="control">
    <input class="name input" type="text" value="${profile.name}"/>
  </div>
</div>

<div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="first input" type="text" placeholder="profile First Name" value="${profile.age}"/>
  </div>
</div>

<div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="last input" type="text" placeholder="profile Last Name" value="${profile.last}"/>
  </div>
</div>

<div class="field">
  <label class="label">Subtitle</label>
  <div class="control">
    <input class="sub input" type="text" placeholder="Subtitle" value="${profile.subtitle}"/>
  </div>
</div>

<div class="field">
  <label class="label">First Seen</label>
  <div class="control">
   <input class="seen" type="date" id="start" value="${profile.int}"</input>
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
<textarea class="description textarea">${profile.description}</textarea>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-danger CancelButton" type="cancel" data-id="${profile.id}">Cancel</button>
  </div>
  <div class="control">
    <button class="button is-dark SubmitButton" type="submit" data-id="${profile.id}">Save</button>
  </div>
</div> 
</form>
 `;
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular profile.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the profile edit form for the clicked profile and replace the
    //       profile's card in the DOM with their edit form instead
    let profileEditButton = $(event.target);
    let profileId = $(event.target).data('id');
    
    let profile = profileData.find(profile => {
        return profile.id == profileId
    });
    let par = profileEditButton.closest('.cardid');
    par.replaceWith(renderprofileEditForm(profile));
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular profile.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the profile card for the clicked profile and replace the
    //       profile's edit form in the DOM with their card instead
    
    let profileCancelButton = $(event.target);
    let profileId = $(event.target).data('id');
    
    let profile = profileData.find(profile => {
        return profile.id == profileId
    });
    console.log(profile);
    let parOld = profileCancelButton.closest('.profileForm');
    parOld.replaceWith(renderprofileCard(profile));
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular profile.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the profile card using the updated field values from the
    //       submitted form and replace the profile's edit form in the DOM with
    //       their updated card instead

    let profileEditButton = $(event.target);
    let profileId = $(event.target).data('id');
    let profile = profileData.find(h => {
        return h.id == profileId
    });

   
     let $par = profileEditButton.closest('.profileForm');

    profile.name = $par.find('.name').val();
    profile.age = $par.find('.first').val();
    profile.last = $par.find('.last').val();
    profile.subtitle = $par.find('.sub').val();
    profile.interests = new Date($par.find('.seen').val().replace(/-/g, '/'));
    console.log(profile.interests);
    profile.description = $par.find('.description').val();

    $par.replaceWith(renderprofileCard(profile));
};



/**
 * Given an array of profile objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  profilees  An array of profile objects to load (see data.js)
 */
export const loadprofileesIntoDOM = function(profilees) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the profilees using renderprofileCard()
    //       NOTE: Copy your code from a04 for this part
    let profileDOM = [];
    for(let i =0; i < profilees.length; i++) {
     profileDOM[i] = renderprofileCard(profilees[i]);
    }
    // TODO: Append the profile cards to the $root element
    //       NOTE: Copy your code from a04 for this part
    $root.append(profileDOM);
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
 * Use jQuery to execute the loadprofileesIntoDOM function after the page loads
 */
$(function() {
    loadprofileesIntoDOM(profileData);
});
