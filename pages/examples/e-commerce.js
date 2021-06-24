books = JSON.parse(localStorage.getItem("Books") )||[];

  var query = window.location.search;
  var vars=query.split("=");
  var ID =vars[1];
 var book=books[ID];
 console.log(book);

 function  affiche(){
//let liste ='';
var liste=document.getElementById('exemple2');

  liste .innerHTML+=`
  <section class="content" id="exemple2">
  <div class="card card-solid">
  <div class="card-body">
    <div class="row">
      <div class="col-12 col-sm-6">
        <h3 class="d-inline-block d-sm-none">${book.namebook}</h3>
        <div class="col-12">
          <img src="" class="product-image" alt="${book.uploadimg}">
        </div>
        <div class="col-12 product-image-thumbs">
          <div class="product-image-thumb" >${book.namebook}</div>
          <div class="product-image-thumb" >${book.date}</div>
          <div class="product-image-thumb" >${book.prix}</div>
          <div class="product-image-thumb" >${book.langue}</div>
          <div class="product-image-thumb" >${book.uploadimg}</div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <h3 class="my-3">${book.namebook}</h3>
        <p>${book.description}</p>

        <hr>

        <div class="btn-group btn-group-toggle" data-toggle="buttons">

        </div>


        <div class="btn-group btn-group-toggle" data-toggle="buttons">

        </div>

        <div class="bg-gray py-2 px-3 mt-4">
          <h2 class="mb-0">
          ${book.prix}
          </h2>
          <h4 class="mt-0">
            <small>${book.prix}</small>
          </h4>
        </div>

      </div>
    </div>
    <div class="row mt-4">
      <nav class="w-100">

      </nav>

    </div>
  </div>
  <!-- /.card-body -->
</div>

  </section>

  `
 }
affiche()

