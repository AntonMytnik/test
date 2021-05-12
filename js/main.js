$(document).ready(() => {
   console.log('Hello World');
   $('nav').click(() => {
      console.log(writelorem());
   });
   function writelorem() {
      return ('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
   }
});