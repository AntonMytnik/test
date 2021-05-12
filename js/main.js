$(document).ready(() => {
   $('nav').click(() => {
      writelorem();
   });
   function writelorem() {
      json_s = '{"name": "Jason", "age": 29,"secretIdentity": { "a": "123456", "b": "123456" } }';
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