$(document).ready(() => {
   console.log('Hello World');
   $('nav').click(() => {
      console.log(writelorem());
   });
   function writelorem() {
      json_s = '{"name": "Molecule Man", "age": 29,"secretIdentity": "Dan Jukes"}';
      $.ajax({
         type: "POST",
         data: { login: '1', password: '2' },
         url: "test.php",
         success: function (msg) {
            alert(msg);
         },
         error: function (error) {
            alert('error');
         }
      });
   }
});