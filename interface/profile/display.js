

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
  let user= sessionStorage.getItem('user'); 
  
  let picture = sessionStorage.getItem('newPic');
  
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

 function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

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
  profile.name =sessionStorage.getItem('name');
  profile.age = sessionStorage.getItem('age');
  profile.sign =sessionStorage.getItem('sign');
  profile.interests =sessionStorage.getItem('interests');
  profile.bio = sessionStorage.getItem('bio');
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
     

      <p class="subtitle is-6" style="color:white; text-align: left;"> Zodiac: </p>
      <form autocomplete="off" action="/action_page.php">
      <div class="autocomplete" style="width:300px;">
        <input id="myInput" class="zodiacSign" type="text" name="myDorm" placeholder="Search for Your Zodiac Sign">
      </div>
    </form>

    <br>

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
  profile.name =sessionStorage.getItem('name');
  profile.age = sessionStorage.getItem('age');
  profile.sign =sessionStorage.getItem('sign');
  profile.interests =sessionStorage.getItem('interests');
  profile.bio = sessionStorage.getItem('bio');
  let profileEditButton = $(event.target);
  let par = profileEditButton.closest('.cardid');
  par.replaceWith(renderprofileEditForm(profile)); 

  var zods = ["Capricorn", "Aries", "Pisces", "Libra", "Sagg", "Leo", "Aqua", "Virgo", "taurus"];
autocomplete(document.getElementById("myInput"), zods);
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
  profile.name =sessionStorage.getItem('name');
  profile.age = sessionStorage.getItem('age');
  profile.sign =sessionStorage.getItem('sign');
  profile.interests =sessionStorage.getItem('interests');
  profile.bio = sessionStorage.getItem('bio');
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
    let token= sessionStorage.getItem('jwt');


    
    let name = $('#name').val();
    let age = $('#age').val();
    let interests = $('#interests').val();
    let bio = $('#bio').val();
    let sign = $('.zodiacSign').val();
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
  let user= sessionStorage.getItem('name'); 
  let token = sessionStorage.getItem('jwt');
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
  // if(result.data.result.name !== undefined){
  //   profile = result.data.result;
  // };
  profile = result.data.result;
  // console.log(profile);
  // console.log(profile)

  let p = "blob:http://127.0.0.1:5502/de462a70-94b7-41c9-a5e3-5ebb91a276b3";

  
  sessionStorage.setItem('name', profile.name);
  sessionStorage.setItem('age', profile.age);
  sessionStorage.setItem('sign', profile.sign);
  sessionStorage.setItem('interests', profile.interests);
  sessionStorage.setItem('bio', profile.bio);
  sessionStorage.setItem('newPic', p);

  let picture = sessionStorage.getItem('newPic');

  // let legit = blobToFile(picture, "profile-img.png");
  var file = new File([picture], "new-pic.png", {lastModified: 1534584790000});
  console.log(file.name);

  sessionStorage.setItem('newPic', file.name);
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
  profile.name =sessionStorage.getItem('name');
  profile.age = sessionStorage.getItem('age');
  profile.sign =sessionStorage.getItem('sign');
  profile.img = sessionStorage.getItem('newPic');
  profile.interests =sessionStorage.getItem('interests');
  profile.bio = sessionStorage.getItem('bio');
  
  // console.log(profile);
  const $root = $('#root');

  let nav = renderNavBar();

    $root.append(nav);
  let profileDOM = renderprofileCard(profile);
  
  $root.append(profileDOM);
  $root.on("click",".EditButton",handleEditButtonPress);
  $root.on("click",".SubmitButton",handleEditFormSubmit);
  $root.on("click",".CancelButton",handleCancelButtonPress);




function fasterPreview(uploader) {
    if ( uploader.files && uploader.files[0] ){
      // var reader = new FileReader();
  
      // reader.onload = function (x) {
      //   $('#profileImage').attr('src', x.target.result);
      //   // console.log(x.target.result);
      // }
  
      // reader.readAsDataURL(uploader.files[0]);
      let g = window.URL.createObjectURL(uploader.files[0]);
          $('#profileImage').attr('src', 
            g );
            
             console.log(g);
             sessionStorage.setItem('newPic', g);
             let newPic = sessionStorage.getItem('newPic');

    }
}

$("#imageUpload").change(function(){
  fasterPreview(this);
});


$("#profileImage").click(function(e) {
  $("#imageUpload").click();
});

};


// The autocomplete function takes an array of options for autocompletion,
// and compares it to the user input
function autocomplete(inp, arr) {
  
  // listen for someone typing in an input
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;

  // close list everytime user clicks input field so value doesn't repeat
  closeAllLists();

   // if there isnt a text field, return back to nothing
  if (!val) { return false; }
  // assign value to before list begins
    currentFocus = -1;
     // Creative a div element that will act as the list of matching options 
    a = document.createElement("DIV");
   
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
       // For each item in array, check if the item starts with the same letters as the user input 
      
       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          // if they match, create a div for the option and bold the first letter
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          // when user clicks an option, replace input value with value of the list option
          b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
          console.log(inp.value);
          sessionStorage.setItem('sign', inp.value);
        });
          a.appendChild(b);
      }
    }
  });
  
  // function to close the autocomplete list
  function closeAllLists(option) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (option != x[i] && option != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

    // arrow key function
   inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) { // down key press
        currentFocus++;
        addActive(x);

    } else if (e.keyCode == 38) { // up key press
            currentFocus--;
            addActive(x);
    } else if (e.keyCode == 13) { // enter key press
            e.preventDefault();
            if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(option) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (option != x[i] && option != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });

}



/**
* Use jQuery to execute the loadprofileesIntoDOM function after the page loads
*/
$(document).ready(function() {

  loadprofileesIntoDOM();
});
