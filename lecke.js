class Lecke {
  #adat;
  #id;
  constructor(adat, id, SZULOELEM) {
    this.#adat = adat;
    this.#id = id;
    let txt = "<div>";
    txt += `<div class="card rendez" class="card col-lg-3 col-md-4 col-sm-6 p-0" style="width:300px">
      <div class="card-img-body"> <h4 class="card-title">${this.#adat.cim}<br></h4>
      </div>
      <iframe  src="${this.#adat.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <p class="card-text">description: ${this.#adat.leiras} <br> </p>
      </p><button id= "${
        this.#id
      }" type="button" class="btn btn-primary kattintott fekete" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button>
      </div>`;
    txt += "</div>";
    txt += "</div>";
   
    SZULOELEM.append(txt);
   
  }
}

export default Lecke;
