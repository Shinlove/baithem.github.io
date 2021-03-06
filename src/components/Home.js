import React from "react";
import "./Home.css";

function Home() {
  return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner banner">
            <div class="img carousel-item active">
              <img src="/Slide-show.png" class="d-block w-100" alt="..." />
            </div>
            <div class="img carousel-item">
              <img src="/slide-show4.png" class="d-block w-100" alt="..." />
            </div>
            <div class="img carousel-item">
              <img src="/slide-show2.png" class="d-block w-100" alt="..." />
            </div><div class="img carousel-item">
              <img src="/slide-show3.png" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="wide"></div>
        <p className="line">TIN M???I NH??T</p>
        <div className="container">
          <div className="row">
            <a href="/" class="col-3 column black">
              <div className="new-home">Tin b??i</div>
              <div className="new">
              <img width="313" height="182" src="/column1.jpg"></img>
              </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">V??NG CHUNG K???T BKAI-NAVER CHALLENGE 2022</h5>
                <p className="pt-3">BKAI-NAVER Challenge 2022 l?? ho???t ?????ng thu???c d??? ??n h???p t??c nghi??n c???u AI gi???a Trung t??m BKAI, Tr?????ng CNTT&TT v?? T???p...</p>
              </div>
            </a>

            <a href="/" class="col-3 column black">
            <div className="new-home">Tin b??i</div>
            <div className="new">
              <img width="313" height="182" src="/column2.jpg"></img>
            </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">INNOVATION DAY V?? CU???C THI S??NG T???O ?? T?????NG SINH VI??N CREATIVE</h5>
                <p className="pt-3">Ng??y 14/05/2022, Innovation Day 2022 ???? di???n ra th??nh c??ng v???i r???t nhi???u ho???t ?????ng, tr???i nghi???m th?? v???, bao g???m: T???a...</p>
              </div>
            </a>
            <a href="/" class="col-3 column black">
            <div className="new-home">Tin b??i</div>
            <div className="new">
              <img width="313" height="182" src="/column3.jpg"></img>
            </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n</h5>
                <p className="pt-3">Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng CNTT&TT, ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh gia...</p>
              </div>
            </a>
            <a href="/" class="col-3 column black">
            <div className="new-home">Tin b??i</div>
            <div className="new">
              <img width="313" height="182" src="/cloumn4.jpg"></img>
            </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH???</h5>
                <p className="pt-3">V??o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1, ???????c s??? ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...</p>
              </div>
            </a>
          </div>
        </div>
        <section className="more">
          <a href="/" className="more-option">
            <span>Xem th??m tin t???c</span>
            <i class="bi bi-caret-right drop-right"></i>
          </a>
        </section>

        <div className="event">
          <img width="100%" height="700" src="/banner.jpg"></img>
        </div>
        <section className="more">
          <a href="/" className="more-option">
            <span>Xem th??m s??? ki???n</span>
            <i class="bi bi-caret-right drop-right"></i>
          </a>
        </section>

        <div>
          <h2>????O T???O - TUY???N SINH</h2>
          
          <p className="tuyensinh">N??m 2020, T??? ch???c Gi??o d???c Quacquarelli Symonds (vi???t t???t QS - V????ng qu???c Anh) ???? ????nh gi?? v?? x???p ch???t l?????ng ????o t???o v?? nghi??n c???u c???a ??HBK H?? N???i trong c??c l??nh v???c m?? Tr?????ng ??ang ?????m nh???n thu???c nh??m h???ng t??? 451 ?????n 500 tr??n to??n Th??? gi???i, ti???p t???c gi??? v??? tr?? s??? 1 t???i Vi???t Nam.</p>
        </div>

        <div className="dflex-arow ">
          <div className="dflex">
            <a>
              <img src="/sinhvien.jpg" ></img>
            </a>
            <div>
              <div>CH????NG TR??NH ????O T???O</div>
              <p className="chung">Tr?????ng hi???n ??ang cung c???p h??n 20 ch????ng tr??nh ????o t???o ch???t l?????ng cao thu???c 3 h??? ?????i h???c, ThS v?? TS; trong ????, c?? ch????ng tr??nh ???????c th??? tr?????ng lao ?????ng qu???c t??? ????n nh???n v???i h??n 60% sinh vi??n t???t nghi???p l??m vi???c ??? n?????c ngo??i. C??c ch????ng tr??nh ????o t???o thu???c v??o 3 nh??m ng??nh ch??nh: Khoa h???c M??y t??nh, K??? thu???t M??y t??nh, v?? Khoa h???c D??? li???u v?? Tr?? tu??? Nh??n t???o???(xem ti???p)</p>
            </div>
          </div>

          <div className="dflex">
            <a>
              <img src="/truong.jpg" ></img>
            </a>
            <div>
              <div>KI???N T???O T????NG LAI V???I SoICT</div>
              <p className="chung">Th????ng hi???u K??? s?? CNTT B??ch khoa ???? v?????t ra kh???i bi??n gi???i n?????c nh??, v?? ng??y c??ng ch???ng minh ???????c ch???t l?????ng tr??n tr?????ng Qu???c t???. Trong l??n s??ng Chuy???n ?????i s???, l???a ch???n ph??t tri???n t????ng lai v???i SoICT s??? ??em l???i cho c??c b???n c?? h???i tr??? th??nh c??c chuy??n gia c??ng ngh???, c?? kh??? n??ng l??m ch??? v?? d???n d???t s??? ph??t tri???n KHCN n?????c nh????? (xem ti???p)</p>
            </div>
          </div>


        </div>
      </div>
  );
}

export default Home;
