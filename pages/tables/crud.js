users = JSON.parse(localStorage.getItem("Books") )||[];
updatedIndex = 0
document.getElementById('btnmodif').style.visibility = 'hidden';

affichage(users);
function Add(){

namebook = document.getElementById('namebook').value;
date = document.getElementById('date').value;
prix= document.getElementById('prix').value;
langue = document.getElementById('langue').value;
uploadimg= document.getElementById('uploadimg').value;
description = document.getElementById('description').value;

if (namebook != ''  && date != '' && prix != ''&& langue != ''&& uploadimg!=""&& description!="") {
   users.push({
        namebook: namebook,
       date: date,
       prix: prix,
  langue: langue,
  uploadimg:uploadimg,
  description:description
    })
    localStorage.setItem("Books",JSON.stringify(users))
    document.getElementById('namebook').value = "";
    document.getElementById('date').value = "";
    document.getElementById('prix').value = "";
    document.getElementById('langue').value = "";
    document.getElementById('uploadimg').value="";
    document.getElementById('description').value ="";

}

affichage(users);


}


$(function() {
  // Multiple images preview in browser
  var imagesPreview = function(input, placeToInsertImagePreview) {

      if (input.files) {
          var filesAmount = input.files.length;

          for (i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = function(event) {
                  $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
              }

              reader.readAsDataURL(input.files[i]);
          }
      }

  };

  $('#uploadimg').on('change', function() {
      imagesPreview(this, 'div.gallery');
  });
});

function affichage(tab) {
  table = document.getElementById('example1')
  table.innerHTML = '';
  tab.forEach((element, index) => {
      table.innerHTML += `<tr>
   <td>${element.namebook}</td>
   <td>${element.date}</td>

   <td>${element.prix}</td>
   <td>${element.langue}</td>
   <td>${element.uploadimg}</td>
   <td>${element.description}</td>
  <td class="project-actions text-right">
   <a class="btn btn-danger btn-sm" href="#"  onclick="Delete(${index})">
                              <i class="fas fa-trash">
                              </i>

                          </a>
  </td>

  <td class="project-actions text-right">
                               <a class="btn btn-info btn-sm" href="#"   onclick="Edit(${index})">
                              <i class="fas fa-pencil-alt">
                              </i>

                          </a>
                             </td>

                               <td class="project-actions text-right">
                          <a class="btn btn-primary btn-sm"  onclick="view(${index})">
                              <i class="fas fa-folder">
                              </i>
                              View
                          </a>
                          </td>
</tr>`;
  });
  }







  function Delete(index) {
    if (confirm('Are you sure to delete this record ???')) {
        users.splice(index, 1);
           localStorage.setItem("Books",JSON.stringify(users))
    }
    affichage(users);
    }



 function view(index){
   location.replace("../examples/e-commerce.html?index="+index)


//var test= ID.findIndex((element=>element.index));
//console.log(test);

//   namebook = document.getElementById('namebook').value;
//   date = document.getElementById('date').value;
//   prix= document.getElementById('prix').value;
//   langue = document.getElementById('langue').value;
//  var Views =users[index]

 }



    function Edit(index) {
updatedIndex = index
document.getElementById('btnmodif').style.visibility = 'visible';
document.getElementById('btncreate').style.visibility = 'hidden';
const user = users[index]
document.getElementById('namebook').value = user.namebook,
    document.getElementById('date').value = user.date,
    document.getElementById('prix').value = user.prix,
    document.getElementById('langue').value = user.langue;

}

function update() {
  //console.log(updatedIndex)
  document.getElementById('btnmodif').style.visibility = 'hidden';
  document.getElementById('btncreate').style.visibility = 'visible';

  namebook = document.getElementById('namebook').value;
date = document.getElementById('date').value;
prix= document.getElementById('prix').value;
langue = document.getElementById('langue').value;
  var item = {
    namebook: namebook,
    date: date,
    prix:prix,
langue:langue
  };
   document.getElementById('namebook').value = "";
    document.getElementById('date').value = "";
    document.getElementById('prix').value = "";
    document.getElementById('langue').value = "";

  this.users.splice(updatedIndex, 1, item);
  localStorage.setItem("Books",JSON.stringify(users))
  affichage(users);


  }
