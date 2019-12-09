

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
  let user= localStorage.getItem('user'); 
  return `
  <p class="is-4 titleText" style="color:purple; font-size: 60px; text-align: center;">Welcome ${user}</p>
  <div style="text-align: center;">
  <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" >Home</a></button>
  <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" >Matches</a></button>
  <button <a href="index.html" class="button is-rounded headerText" style="color:purple; padding: 5px; margin: 5px;" >My Profile</a></button>
  </div>

  <div class="container cardid" style="margin:0 auto;">
  <div style="padding: none;">
  <div class="card" style="background-color:black;">
<div class="card-image">
  <figure>
    <img class="profile center" id="profileImage" src="../../images/blankpic.png" alt="../../images/blankpic.png">
    <input id="imageUpload" type="file" 
     name="profile_photo" placeholder="Photo" required="" capture>
  </figure>
</div>
<div class="card-content">
  <div class="media">
  
    <div class="media-content bodyText">

      <p class="headerText is-4" style="color:purple; font-size: 45px; text-align: center;">Name: ${profile.name}
      </p>

      <p style="color:white; text-align: center;"><span style="font-weight: bold;">Age: ${profile.age}
      </p>
      <br>

      <p class="subtitle is-6" style="color:white; text-align: center;"> Zodiac: ${profile.sign}
      </p>

      <p style="color:white; text-align: center;"><span style="font-weight: bold;">Interests: ${profile.interests}
      </p>
      <br>
      <p style="color:white; text-align: center;"><span style="font-weight: bold;"> Bio: ${profile.bio}
      </p>

    </div>
  </div>

    <br>
    <br>
    <button <a class="button is-rounded EditButton headerText" >Edit Profile</a></button>
    <button <a class="button is-rounded DeleteButton headerText" >Delete Profile</a></button>

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



export const renderprofileEditForm = function() {
  let profile ={};
  profile.name =localStorage.getItem('name');
  profile.age = localStorage.getItem('age');
  profile.sign =localStorage.getItem('sign');
  profile.interests =localStorage.getItem('interests');
  profile.bio = localStorage.getItem('bio');
  return `
  
  <form class="profileForm specialText">
  
  <div class="field" id="profileFormID">
  
  <div style="padding: none;">
  <div class="card" style="background-color:black;">
<div class="card-content">
  <div class="media">
  
    <div class="media-content bodyText">

      <p class="headerText is-4" style="color:purple; font-size: 45px; text-align: left;">Name:
      <input class="name input bodyText" type="text" id="name" value="${profile.name}"/>
      </p>

      <p style="color:white; text-align: left;"><span style="font-weight: bold;">Age: 
      <input class="name input bodyText" type="text" id="age" value="${profile.age}"/>
      </p>
      <br>

      <p class="subtitle is-6" style="color:white; text-align: left;"> Zodiac:
      <input class="name input bodyText" type="text" id="sign" value="${profile.sign}"/> 
      </p>

      <p style="color:white; text-align: left;"><span style="font-weight: bold;">Interests:
      <input class="name input bodyText" type="text" id="interests" value="${profile.interests}"/> 
      </p>
      <br>
      <p style="color:white; text-align: left;"><span style="font-weight: bold;"> Bio:
      <input class="name input bodyText" type="text" id="bio" value="${profile.bio}"/> 
      </p>

    </div>
  </div>





<div class="field is-grouped">
<div class="control">
  <button class="button is-danger CancelButton specialText" type="cancel">Cancel</button>
</div>
<div class="control">
  <button class="button is-dark SubmitButton specialText" type="submit">Save</button>
</div>
</div> 

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
  let profile ={};
  profile.name =localStorage.getItem('name');
  profile.age = localStorage.getItem('age');
  profile.sign =localStorage.getItem('sign');
  profile.interests =localStorage.getItem('interests');
  profile.bio = localStorage.getItem('bio');
  let profileEditButton = $(event.target);
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
  let profile ={};
  profile.name =localStorage.getItem('name');
  profile.age = localStorage.getItem('age');
  profile.sign =localStorage.getItem('sign');
  profile.interests =localStorage.getItem('interests');
  profile.bio = localStorage.getItem('bio');
  let profileCancelButton = $(event.target);
  
  let parOld = profileCancelButton.closest('.profileForm');
  parOld.replaceWith(renderprofileCard(profile));
  reload();
};



/**
* Handles the JavaScript event representing a user clicking on the "cancel"
*     button for a particular profile.
* @param event  The JavaScript event that is being handled
*/
export const handleEditFormSubmit = async function(event) {
  event.preventDefault();
  let profileEditButton = $(event.target);

 
    let $par = profileEditButton.closest('.profileForm');
    let token= localStorage.getItem('jwt');


    
    let name = $('#name').val();
    let age = $('#age').val();
    let interests = $('#interests').val();
    let bio = $('#bio').val();
    let sign = $('#sign').val();
    let profile ={}
    const result = await axios({
      url: 'http://localhost:3000/user/profile',
      method: 'POST',
      data: {
        "data":{"name": `${name}`, "age": `${age}`, "interests": `${interests}`, "bio": `${bio}`, "sign": `${sign}`},
        "type": "write"
      },
      // xhrFields: {
      //     withCredentials: true,
      // },
      headers: {
        Authorization: `Bearer ${token}`
      },
      success: function(data){
        profile = data;
      },
    });



    $par.replaceWith(renderprofileCard(profile));
    reload();
};

export const getCurrProfileData = async function(){
  let user= localStorage.getItem('name'); 
  let token = localStorage.getItem('jwt');
  let profile ={};
  profile.name= "Enter your name!"; 
  profile.age = "Enter your age!";
  profile.sign ="What's your sign?"; 
  profile.interests = "What are your interests?";
  profile.bio ="Tell us about yourself!";
  const result = await axios({
    url: 'http://localhost:3000/user/profile',
    method: 'get',
    // xhrFields: {
    //     withCredentials: true,
    // },
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  profile = result.data.result;
  // console.log(profile);
  // console.log(profile)
  localStorage.setItem('name', profile.name);
  localStorage.setItem('age', profile.age);
  localStorage.setItem('sign', profile.sign);
  localStorage.setItem('interests', profile.interests);
  localStorage.setItem('bio', profile.bio);
}

export function reload() {
  getCurrProfileData();
}
/**
* Given an array of profile objects, this function converts the data into HTML,
*     loads it into the DOM, and adds event handlers.
* @param  profilees  An array of profile objects to load (see data.js)
*/
export const loadprofileesIntoDOM = function() {
  // Grab a jQuery reference to the root HTML element
  getCurrProfileData();
  let profile ={};
  profile.name =localStorage.getItem('name');
  profile.age = localStorage.getItem('age');
  profile.sign =localStorage.getItem('sign');
  profile.interests =localStorage.getItem('interests');
  profile.bio = localStorage.getItem('bio');
  
  // console.log(profile);
  const $root = $('#root');
  let profileDOM = renderprofileCard(profile);
  
  $root.append(profileDOM);
  $root.on("click",".EditButton",handleEditButtonPress);
  $root.on("click",".SubmitButton",handleEditFormSubmit);
  $root.on("click",".CancelButton",handleCancelButtonPress);




function fasterPreview(uploader) {
  if ( uploader.files && uploader.files[0] ){
    var reader = new FileReader();

    reader.onload = function (x) {
      $('#profileImage').attr('src', x.target.result);
      // console.log(x.target.result);
    }

    reader.readAsDataURL(uploader.files[0]);
        // $('#profileImage').attr('src', 
        //    window.URL.createObjectURL(uploader.files[0]) );
          //  for(let i =0; i < profilees.length; i++) {
          //   profilees[i].img = newURL;
          //  }
  }
}

$("#imageUpload").change(function(){
  fasterPreview(this);
});


$("#profileImage").click(function(e) {
  $("#imageUpload").click();
});



};



/**
* Use jQuery to execute the loadprofileesIntoDOM function after the page loads
*/
$(document).ready(function() {

  loadprofileesIntoDOM();
});
