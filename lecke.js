class Lecke {
  #adat;
  #id;
  constructor(adat, id, SZULOELEM) {
    this.#adat = adat;
    this.#id = id;
    let txt = "<div>";
    txt += `<div class="card" class="card col-lg-3 col-md-4 col-sm-6 p-0" style="width:300px">
      <div class="card-body"> <h4 class="card-title">${this.#adat.cim}<br></h4>
      </div>
      <iframe class="card-img-bottom" width="100%" height="auto"
      src="${this.#adat.video}">
      </iframe>
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