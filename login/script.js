$(function() {
  const $form = $('#login-form');
  const $message = $('#message');

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
      localStorage.setItem('jwt', jwt);
      localStorage.setItem('name', name);
      location.href = ("../interface/profile/index.html");
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
    });
  });
});