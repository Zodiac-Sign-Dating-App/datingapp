

$(function() {
  const $form = $('#login-form');
  const $message = $('#message');

const second = function(){
  let token = sessionStorage.getItem('jwt');
      $.ajax({
        url: 'http://localhost:3000/account/status',
        method: 'get',
      
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true,
        success: function(data){
          res = data;
        }
      }).then(() => {

        // console.log(res.user);
        sessionStorage.setItem('age', res.user.age);
        sessionStorage.setItem('sign', res.user.sign);
        third();
      }).catch(() => {
        $message.html('<span class="has-text-danger">Something went wrong and you were not verified. Check your email and password and your internet connection.</span>');
      });
      
};  

const third = async function(){
  let token = sessionStorage.getItem('jwt');
  let profile= {};
  try{    
  const result = await axios({
          url: 'http://localhost:3000/user/profile',
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`
          },
  });
  
  profile = result.data.result;
  sessionStorage.setItem('name', profile.name);
  sessionStorage.setItem('interests', profile.interests);
  sessionStorage.setItem('bio', profile.bio);
  location.href = ("../interface/profile/index.html");
  } catch(error){
    // console.log(error);
    location.href = ("../interface/profile/index.html");
  }

};

  $form.submit(function(e) {
    e.preventDefault();

    $message.html('');

    // const data = $form.serializeArray().reduce((o, x) => {
    //   o[x.name] = x.value;
    //   return o;
    // }, {});

    const data2 = $form.serialize();
    let res = {};
    $.ajax({
      url: 'http://localhost:3000/account/login',
      type: 'POST',
      data: data2,
      // xhrFields: {
      //     withCredentials: true,
      // },
      withCredentials: true,
      success: function(data){
       res = data;
     },
    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
      const jwt = res.jwt;
      const name = res.name;
      sessionStorage.setItem('jwt', jwt);
      sessionStorage.setItem('user', name);
      second();
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not verified. Check your email and password and your internet connection.</span>');
    });
  });
});