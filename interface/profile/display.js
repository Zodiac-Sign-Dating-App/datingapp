

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
  let quote = "Reload for your quote!"
  let author = "Reload!"
  if(sessionStorage.getItem('quote') !== null){
  quote = sessionStorage.getItem('quote');}
  if(sessionStorage.getItem('author') !== null){
    author = sessionStorage.getItem('author');}
  
  return `
  <div class="container cardid" style="margin:0 auto;">

  <div class="yourProfile">
  <p class="is-4 titleText" style="color:purple; font-size: 60px; text-align: center;">Welcome ${user}</p>
  <div style="text-align: center;">
  <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" >Home</a></button>
  <button <a class="button is-rounded EditButton headerText" style="color:purple; padding: 5px; margin: 5px;" >Matches</a></button>
  <button <a href="index.html" class="button is-rounded headerText" style="color:purple; padding: 5px; margin: 5px;" >My Profile</a></button>
  </div>
  
  <div style="padding: none;">
  <div class="card" style="background-color:black;">
<div class="card-image">
  <figure>
    <img class="profile center" id="profileImage" src="../../images/logo.png" alt="../../images/blankpic.png">
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

      <p class="subtitle is-6" style="color:white; text-align: center;"> Spirit Animal: ${profile.animal}
      </p>

      <p style="color:white; text-align: center;"><span style="font-weight: bold;">Interests: ${profile.interests}
      </p>
      <br>
      <p style="color:white; text-align: center;"><span style="font-weight: bold;"> Bio: ${profile.bio}
      </p>
      <br>
      <br>
      <p class="subtitle is-6" style="color:white; text-align: center;"> Random quote of the minute: "${quote}" - ${author} 
    </p>
    </div>
  </div>

    <button <a class="button is-rounded EditButton headerText" >Edit Profile</a></button>
    <button <a class="button is-rounded CancelProfileButton headerText" >Delete Profile</a></button>

</div>
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



export const renderprofileEditForm = function(profile) {
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
    <br>


    <p class="subtitle is-6" style="color:white; text-align: left;"> Spirit Animal: </p>
    <form autocomplete="off" action="/action_page.php">
    <div class="autocomplete" style="width:300px;">
      <input id="myInput" class="spiritAnimal" autocomplete="off" type="text" name="myZodiac" placeholder="What's your spirit animal?">
    </div>
  </form>

  <br>
  <br>
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




export const renderDeletedProfilePage = function() {
  let user= sessionStorage.getItem('user'); 
  
  sessionStorage.setItem('jwt', " ");
  
  return `
  <br>
  <br>
  <br>
  <br>
  <br>
  <p class="is-4 titleText" style="color:purple; font-size: 60px; text-align: center;">${user}, we hate to see you leave!</p>
  `;

};



export const renderDeletedProfilePageERROR = function() {
  let user= sessionStorage.getItem('user'); 
  
  return `
  <br>
  <br>
  <br>
  <br>
  <br>
  <p class="is-4 titleText" style="color:red; font-size: 60px; text-align: center;">${user}, something went wrong! You're account wasn't deleted. Please log in to try again.</p>
  `;

};


/**
* Handles the JavaScript event representing a user clicking on the "edit"
*     button for a particular profile.
* @param event  The JavaScript event that is being handled
*/
export const handleEditButtonPress = function(event) {
  let profile ={name: "Enter your name!", interests: "List some of your cool hobbies/interests!",
  bio: "Tell us about yourself!", age: sessionStorage.getItem('age'), sign: sessionStorage.getItem('sign'), animal: "What's your spirit animal?"};
  if(sessionStorage.getItem('name') !== null){
  profile.name =sessionStorage.getItem('name');}
  if(sessionStorage.getItem('interests') !== null){
  profile.interests =sessionStorage.getItem('interests');}
  if(sessionStorage.getItem('animal') !== null){
    profile.animal =sessionStorage.getItem('animal');}
  if(sessionStorage.getItem('bio') !== null){
  profile.bio = sessionStorage.getItem('bio');}
  let profileEditButton = $(event.target);
  let par = profileEditButton.closest('.cardid');
  par.replaceWith(renderprofileEditForm(profile)); 

  var animals = ["Bird", "Dragon", "Lion", "Bear", "Goat", "Scorpion", "Iguana", "Dog", "Monkey"];
autocomplete(document.getElementById("myInput"), animals);
};



/**
* Handles the JavaScript event representing a user clicking on the "cancel"
*     button for a particular profile.
* @param event  The JavaScript event that is being handled
*/
export const handleCancelButtonPress = function(event) {
  // TODO: Render the profile card for the clicked profile and replace the
  //       profile's edit form in the DOM with their card instead
  let profile ={name: "Enter your name!", interests: "List some of your cool hobbies/interests!",
  bio: "Tell us about yourself!", age: sessionStorage.getItem('age'), sign: sessionStorage.getItem('sign')};
  if(sessionStorage.getItem('name') !== null){
  profile.name =sessionStorage.getItem('name');}
  if(sessionStorage.getItem('interests') !== null){
  profile.interests =sessionStorage.getItem('interests');}
  if(sessionStorage.getItem('bio') !== null){
  profile.bio = sessionStorage.getItem('bio');}
  let profileCancelButton = $(event.target);
  
  let parOld = profileCancelButton.closest('.profileForm');
  parOld.replaceWith(renderprofileCard(profile));
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


    
    let name1 = $('#name').val();
    let interests1 = $('#interests').val();
    let bio1 = $('#bio').val();
    let animal = $('.spiritAnimal').val();
    const result = await axios({
      url: 'http://localhost:3000/user/profile',
      method: 'POST',
      data: {
        "data":{"name": `${name1}`,"interests": `${interests1}`, "bio": `${bio1}`, "animal": `${animal}`},
        "type": "write"
      },
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    let profile ={name: name1, interests: interests1,
    bio: bio1, age: sessionStorage.getItem('age'), sign: sessionStorage.getItem('sign'), animal: sessionStorage.getItem('animal')};
    sessionStorage.setItem('name', profile.name);
    sessionStorage.setItem('interests', profile.interests);
    sessionStorage.setItem('bio', profile.bio);
    sessionStorage.setItem('animal', profile.animal);

    $par.replaceWith(renderprofileCard(profile))
};


/**
* Handles the JavaScript event representing a user clicking on the "delete profile"
*     button for a particular profile.
* @param event  The JavaScript event that is being handled
*/
export const handleDeleteProfileButton = async function(event) {
  event.preventDefault();
  event.stopPropagation();
        event.stopImmediatePropagation();
  let profileDeleteButton = $(event.target);
  sessionStorage.setItem('jwt', " ");

    let $par = profileDeleteButton.closest('.yourProfile');
    let user = sessionStorage.getItem('user');
    

    const result = await axios({
      url: 'http://localhost:3000/account/'+user,
      method: 'DELETE',
    }).then(() => {
      sessionStorage.clear();
      $par.replaceWith(renderDeletedProfilePage());
      location.href = ("../../signup/index.html");
    }).catch(() => {
      
      $par.replaceWith(renderDeletedProfilePageERROR());
    });

  
$par.replaceWith(renderDeletedProfilePage());

};



/**
* Given an array of profile objects, this function converts the data into HTML,
*     loads it into the DOM, and adds event handlers.
* @param  profilees  An array of profile objects to load (see data.js)
*/
export const loadprofileesIntoDOM = function() {
  // Grab a jQuery reference to the root HTML element
  let profile ={name: "Enter your name!", interests: "List some of your cool hobbies/interests!",
  bio: "Tell us about yourself!", age: sessionStorage.getItem('age'), sign: sessionStorage.getItem('sign'), animal: "What's your spirit animal?"};
  if(sessionStorage.getItem('name') !== null){
    profile.name =sessionStorage.getItem('name');
  }
  if(sessionStorage.getItem('interests') !== null){
    profile.interests =sessionStorage.getItem('interests');
  }
  if(sessionStorage.getItem('bio') !== null){
    profile.bio =sessionStorage.getItem('bio');
  }

  if(sessionStorage.getItem('animal') !== null){
    profile.animal =sessionStorage.getItem('animal');
  }
  
  // console.log(profile);
  const $root = $('#root');

  let nav = renderNavBar();

    $root.append(nav);
  let profileDOM = renderprofileCard(profile);
  
  $root.append(profileDOM);
  $root.on("click",".EditButton",handleEditButtonPress);
  $root.on("click",".SubmitButton",handleEditFormSubmit);
  $root.on("click",".CancelButton",handleCancelButtonPress);
  $root.on("click",".CancelProfileButton",handleDeleteProfileButton);




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
          sessionStorage.setItem('animal', inp.value);
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
  randomQuote();
  loadprofileesIntoDOM();
});


export const randomQuote  = async function(){
  let res = {author: " ", quote: " "};
  const result = await axios({
    url: 'http://quotes.stormconsultancy.co.uk/random.json',
    method: 'get',
  });
  console.log(result.data);
  res.author =result.data.author;
  res.quote = result.data.quote;
  sessionStorage.setItem('quote', res.quote);
  sessionStorage.setItem('author', res.author);

}