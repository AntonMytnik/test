$(document).ready(() => {
   $('nav').click(() => {
      writelorem();
   });
   function writelorem() {
      json_s = '{"element":[{"name":"gold","price":"100"},{"name":"silver","price":"201"},{"name":"iron","price":"133"}]}';
      $.ajax({
         url: "test.php",
         type: "POST",
         data: { json: json_s },
         success: function (msg) {
            alert(msg);
         },
         error: function (error) {
            console.log(error);
         }
      });
   }
});