$(function() {
  const $form = $('#signup-form');
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
      url: 'http://localhost:3000/account/create',
      type: 'POST',
      data: data2,
      withCredentials: true,
      // xhrFields: {
      //     withCredentials: true,
      // },
    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now signed up.</span>');
      location.href = ("../login/index.html");
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not verified. Check your email and password and your internet connection.</span>');
    });
  });
});