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
        <p className="line">TIN MỚI NHÁT</p>
        <div className="container">
          <div className="row">
            <a href="/" class="col-3 column black">
              <div className="new-home">Tin bài</div>
              <div className="new">
              <img width="313" height="182" src="/column1.jpg"></img>
              </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</h5>
                <p className="pt-3">BKAI-NAVER Challenge 2022 là hoạt động thuộc dự án hợp tác nghiên cứu AI giữa Trung tâm BKAI, Trường CNTT&TT và Tập...</p>
              </div>
            </a>

            <a href="/" class="col-3 column black">
            <div className="new-home">Tin bài</div>
            <div className="new">
              <img width="313" height="182" src="/column2.jpg"></img>
            </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE</h5>
                <p className="pt-3">Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động, trải nghiệm thú vị, bao gồm: Tọa...</p>
              </div>
            </a>
            <a href="/" class="col-3 column black">
            <div className="new-home">Tin bài</div>
            <div className="new">
              <img width="313" height="182" src="/column3.jpg"></img>
            </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h5>
                <p className="pt-3">Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...</p>
              </div>
            </a>
            <a href="/" class="col-3 column black">
            <div className="new-home">Tin bài</div>
            <div className="new">
              <img width="313" height="182" src="/cloumn4.jpg"></img>
            </div>
              <div className="text-start pt-1 pb-3">
                <h5 className="fs-6 fw-bold">TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ</h5>
                <p className="pt-3">Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...</p>
              </div>
            </a>
          </div>
        </div>
        <section className="more">
          <a href="/" className="more-option">
            <span>Xem thêm tin tức</span>
            <i class="bi bi-caret-right drop-right"></i>
          </a>
        </section>

        <div className="event">
          <img width="100%" height="700" src="/banner.jpg"></img>
        </div>
        <section className="more">
          <a href="/" className="more-option">
            <span>Xem thêm sự kiện</span>
            <i class="bi bi-caret-right drop-right"></i>
          </a>
        </section>

        <div>
          <h2>ĐÀO TẠO - TUYỂN SINH</h2>
          
          <p className="tuyensinh">Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS - Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.</p>
        </div>

        <div className="dflex-arow ">
          <div className="dflex">
            <a>
              <img src="/sinhvien.jpg" ></img>
            </a>
            <div>
              <div>CHƯƠNG TRÌNH ĐÀO TẠO</div>
              <p className="chung">Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…(xem tiếp)</p>
            </div>
          </div>

          <div className="dflex">
            <a>
              <img src="/truong.jpg" ></img>
            </a>
            <div>
              <div>KIẾN TẠO TƯƠNG LAI VỚI SoICT</div>
              <p className="chung">Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà… (xem tiếp)</p>
            </div>
          </div>


        </div>
      </div>
  );
}

export default Home;
