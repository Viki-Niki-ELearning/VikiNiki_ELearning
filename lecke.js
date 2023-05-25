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
    SZULOELEM.append(txt);
    txt += "</div>";
    txt += "</div>";
    txt += modaltartalom();
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
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div>
  `;
    return txt;
  }
}
export default Lecke;
