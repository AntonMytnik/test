$(document).ready(() => {
   console.log('Hello World');
   $('nav').click(() => {
      writelorem();
   });
   function writelorem() {
      json_s = '{"name": "Molecule Man", "age": 29,"secretIdentity": "Dan Jukes"}';
      $.ajax({
         type: "POST",
         data: { json: json_s },
         dataType: 'json',
         url: "test.php",
         success: function (msg) {
            alert(msg);
         },
         error: function (error) {
            console.log(error);
         }
      });
   }
});