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

    $.ajax({
      url: 'http://localhost:3000/account/login',
      type: 'POST',
      data: data2,
      // xhrFields: {
      //     withCredentials: true,
      // },
      withCredentials: true,
    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
      location.href = ("../interface/profile/index.html");
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
    });
  });
});