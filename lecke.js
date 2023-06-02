class Lecke {
  #adat;
  #id;
  constructor(adat, id, SZULOELEM) {
    const GOMB = $(".kattintott");
    const MODAL = $("#modbod");
   
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
    this.modaltartalom();
    GOMB.on("click", function () {
      //  MODAL.html(modaltartalom(this.id));
      const MODALHEAD = $(".modal-title");
      MODALHEAD.html(`<h1>${this.#adat.cim}</h1>`);
      const MODALBODY = $(".modal-body");
      MODALBODY.html(`<button class="balgomb" ><</button>
      <iframe  src="${this.this.#adat.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button class="jobbgomb" ">></button><br>
      <h2>Memorie game: </h2><br>
      <h2>Word hunter: <br></h2>`);
      
      
      
    });
    MODAL.html(this.modaltartalom());
  }
  
  modaltartalom() {
    let txt = "";
    txt += `<div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezárás</button>
        </div>

      </div>
    </div>
  </div>
  `;
    return txt;
  }
}

export default Lecke;
