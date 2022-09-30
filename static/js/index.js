  //Variables
  let movie_title = "";
  let movie_description = "";
  const movies_cards = document.getElementById("movie-cards");
  const btn_add_movie = document.getElementById("btn_add_movie");
  const tb_movie_title = document.getElementById("movie-title");
  const ta_movie_description = document.getElementById("movie-description");
  let img_movie_cover = document.getElementById("movie-image");
  let imag_movie_thumbnail = document.getElementById("movie-image-thumbnail");
  let temp_image = null;
  
  //Functions
  const clear_text = ()=>{
      tb_movie_title.value = "";
      ta_movie_description.value = "";
      movie_title = "";
      movie_description = "";
      temp_image = null;
      img_movie_cover.value = "";
      imag_movie_thumbnail.src = "./static/media/images/placeholder.jpg";

  }

  //Events

  img_movie_cover?.addEventListener("change", (e)=>{
    const image_reader = new FileReader();
    image_reader.addEventListener("load", ()=>{
        temp_image = image_reader.result;
        imag_movie_thumbnail.setAttribute("src", temp_image);
    });
    image_reader.readAsDataURL(e.target.files[0]);
  });

  ta_movie_description.addEventListener("change", e=> movie_description = e.target.value);

  tb_movie_title.addEventListener("change", e=> movie_title = e.target.value);

  btn_add_movie.addEventListener("click", e=>{
      const new_card = document.createElement("div");
      new_card.innerHTML = `<div class="card" >
      <img src="${temp_image}" class="card-img-top pd-1"/>
      <div class="card-body">
      <h5 class="card-title">${movie_title}</h5>
      </div>
      </div>`;
      // adding animations
      new_card.onmouseover = ()=> {
        new_card.classList.toggle("animate__animated");
        new_card.classList.toggle("animate__heartBeat");
      }
      movies_cards.appendChild(new_card);
      clear_text();
  })