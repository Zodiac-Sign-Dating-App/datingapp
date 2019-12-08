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
    <p class="is-4 titleText" style="color:purple; font-size: 60px; text-align: center;">Welcome [insert username here]</p>
    <div style="text-align: center;">
    <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" data-id="${profile.id}">Home</a></button>
    <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" data-id="${profile.id}">Matches</a></button>
    <button <a href="index.html" class="button is-rounded headerText" style="color:purple; padding: 5px; margin: 5px;" data-id="${profile.id}">My Profile</a></button>
    </div>

    <div class="container cardid" style="margin:0 auto;" data-id="${profile.id}">
    <div style="padding: none;">
    <div class="card" style="background-color:black;">
  <div class="card-image">
    <figure>
      <img class="profile center" id="profileImage" src="${profile.img}" alt="Placeholder image">
      <input id="imageUpload" type="file" 
       name="profile_photo" placeholder="Photo" required="" capture>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
    
      <div class="media-content bodyText">
        <p class="headerText is-4" style="color:purple; font-size: 50px; text-align: center;">${profile.name}</p>
        <p style="color:white; text-align: center;"><span style="font-weight: bold;">Age: ${profile.age}</p>
        <p class="subtitle is-6" style="color:white; text-align: center;"><i>"${profile.dob}"</i></p>
        <p style="color:white; text-align: center;"><span style="font-weight: bold;">Interests: </span>${profile.interests}</p>
        
      </div>
    </div>
<h1 class="is-4 headerText" style="color:purple; font-size: 30px;">Bio</h1>
    <div class="content bodyText" style="color:white;">
    ${profile.bio}
      <br>
      <br>
      <button <a class="button is-rounded EditButton headerText" data-id="${profile.id}">Edit Profile</a></button>
      <button <a class="button is-rounded DeleteButton headerText" data-id="${profile.id}">Delete Profile</a></button>
    </div>
  </div>
  </div>
  </div>
</div>`;

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



/**
 * Given a profile object, this function generates a <form> which allows the
 *     user to edit the fields of the profile. The form inputs should be
 *     pre-populated with the initial values of the profile.
 * @param profile  The profile object to edit (see data.js)
 */
export const renderprofileEditForm = function(profile) {
    return `
    
    <form class="profileForm specialText" data-id="${profile.id}">
    
    <div class="field" id="profileFormID">
  <label class="label blank headerText">profile Name</label>
  <div class="control">
    <input class="name input bodyText" type="text" value="${profile.name}"/>
  </div>
</div>

<div class="field">
  <label class="label headerText">Age</label>
  <div class="control">
    <input class="first input bodyText" type="text" placeholder="profile First Name" value="${profile.age}"/>
  </div>
</div>

<div class="field">
  <label class="label headerText">Interests</label>
  <div class="control">
    <input class="last input bodyText" type="text" placeholder="profile Interests" value="${profile.interests}"/>
  </div>
</div>

<<<<<<< HEAD

<div class="field">
  <label class="label headerText">Bio</label>
<textarea class="description textarea bodyText">${profile.description}</textarea>
=======
<div class="field">
  <label class="label headerText">Subtitle</label>
  <div class="control">
    <input class="sub input bodyText" type="text" placeholder="Subtitle" value="${profile.dob}"/>
  </div>
</div>

<div class="field">
  <label class="label headerText">First Seen</label>
  <div class="control">
   <input class="seen bodyText" type="date" id="start" value="${profile.dob}"</input>
  </div>
</div>

<div class="field">
  <label class="label headerText">bio</label>
<textarea class="bio textarea bodyText">${profile.bio}</textarea>
>>>>>>> 7bf329fcfab62fe31966c82bfd9f1cccb22a6f2c
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-danger CancelButton specialText" type="cancel" data-id="${profile.id}">Cancel</button>
  </div>
  <div class="control">
    <button class="button is-dark SubmitButton specialText" type="submit" data-id="${profile.id}">Save</button>
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
    let profileEditButton = $(event.target);
    let profileId = $(event.target).data('id');
    let profile = profileData.find(h => {
        return h.id == profileId;
    });

   
    let $par = profileEditButton.closest('.profileForm');

    profile.name = current.find('.name').val();
    profile.age = current.find('.age').val();
    profile.last = current.find('.last').val();
    profile.subtitle = current.find('.subtitle').val();
    profile.interests = current.find('.interests').val();
    profile.description = current.find('.description').val();

<<<<<<< HEAD
=======
    profile.name = $par.find('.name').val();
    profile.age = $par.find('.first').val();
    profile.last = $par.find('.last').val();
    profile.subtitle = $par.find('.sub').val();
    profile.interests = new Date($par.find('.seen').val().replace(/-/g, '/'));
    console.log(profile.interests);
    profile.bio = $par.find('.bio').val();
>>>>>>> 7bf329fcfab62fe31966c82bfd9f1cccb22a6f2c

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
    let profileDOM = [];
    for(let i =0; i < profilees.length; i++) {
     profileDOM[i] = renderprofileCard(profilees[i]);
    }

    
    $root.append(profileDOM);
    $root.on("click",".EditButton",handleEditButtonPress);
    $root.on("click",".SubmitButton",handleEditFormSubmit);
    $root.on("click",".CancelButton",handleCancelButtonPress);
  


    $("#profileImage").click(function(e) {
      $("#imageUpload").click();
  });

  function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
            //  for(let i =0; i < profilees.length; i++) {
            //   profilees[i].img = newURL;
            //  }
    }
}

$("#imageUpload").change(function(){
    fasterPreview( this );
});

var newSRC = $("#profileImage").attr("src");
 console.log(newSRC);
};



/**
 * Use jQuery to execute the loadprofileesIntoDOM function after the page loads
 */
$(function() {
    loadprofileesIntoDOM(profileData);
});
