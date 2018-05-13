var config = {
  apiKey: "AIzaSyAkOgyA7MnO98UbYvhqhdOzHpsaaXG-itg",
  authDomain: "testing-76443.firebaseio.com",
  databaseURL: "https://testing-76443.firebaseio.com/",
  storageBucket: "",
};

firebase.initializeApp(config);
var db = firebase.database();

document.getElementById("on_btn").addEventListener("click", function(){
    db.ref('LED').update({
      LED : 1
    });
});
document.getElementById("off_btn").addEventListener("click", function(){
    db.ref('LED').update({
      LED : 0
    });
});
// reviewForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//
//   if (!fullName.value || !message.value) return null
//
//   var id = hiddenId.value || Date.now()
//
//   db.ref('reviews/' + id).set({
//     fullName: fullName.value,
//     message: message.value
//   });
//
//   fullName.value = '';
//   message.value  = '';
//   hiddenId.value = '';
// });
//
// // READ REVEIWS
//
// var reviews = document.getElementById('reviews');
// var reviewsRef = db.ref('/reviews');
//
// reviewsRef.on('child_added', (data) => {
//   var li = document.createElement('li')
//   li.id = data.key;
//   li.innerHTML = reviewTemplate(data.val())
//   reviews.appendChild(li);
// });
//
// reviewsRef.on('child_changed', (data) => {
//   var reviewNode = document.getElementById(data.key);
//   reviewNode.innerHTML = reviewTemplate(data.val());
// });
//
// reviewsRef.on('child_removed', (data) => {
//   var reviewNode = document.getElementById(data.key);
//   reviewNode.parentNode.removeChild(reviewNode);
// });
//
// reviews.addEventListener('click', (e) => {
//   var reviewNode = e.target.parentNode
//
//   // UPDATE REVEIW
//   if (e.target.classList.contains('edit')) {
//     fullName.value = reviewNode.querySelector('.fullName').innerText;
//     message.value  = reviewNode.querySelector('.message').innerText;
//     hiddenId.value = reviewNode.id;
//   }
//
//   // DELETE REVEIW
//   if (e.target.classList.contains('delete')) {
//     var id = reviewNode.id;
//     db.ref('reviews/' + id).remove();
//   }
// });
//
// function reviewTemplate({fullName, message}) {
//   return `
//     <div class='fullName'>${fullName}</div>
//     <div class='message'>${message}</div>
//     <button class='delete'>Delete</button>
//     <button class='edit'>Edit</button>
//   `
// };
