
//Click requirement for emphasis on menu
var click = 0;
$("#icon-menu").click(function () {
  click++;
  if (click == 1) {
	$(".overlay").css("opacity", "40%");
    $(".overlay").css("transition", "0.4s");
	$(".overlay").css("z-index", "-1");
    }

  else {
	$(".overlay").css("opacity", "100%");
    $(".overlay").css("transition", "1s");
	$(".overlay").css("z-index", "2");

    click = 0;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  console.log('ready')




  const uploader = document.getElementById('uploader')
  const fileupload = document.getElementById('fileupload')
  const submit = document.getElementById('submitbtn')
  const imageName = document.getElementById('imageName')

  let file = ''
  let filename = ''
  let extension = ''

  const db = firebase.firestore();

  fileupload.addEventListener('change', function(e){
    console.log("event", e.target.files[0])

    file = e.target.files[0]
    filename = file.name.split('.').shift()
    extension = file.name.split('.').pop()
    imageName.value = filename;

    console.table({filename, extension})
  })

  submit.addEventListener('click', function (e){
    if(imageName.value) {
      //Create a db ID
      const id = db.collection('Images').doc().id;

      //Create a storage ref
      const storageRef = firebase.storage().ref(`images/${id}.${extension}`)

      storageRef.put(file);

    }

  })

})
