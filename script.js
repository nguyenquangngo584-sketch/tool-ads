function dinhDangTien(soTien) {
  return soTien.toLocaleString("vi-VN") + "đ";
}

function tinhNganSach() {
  let nganSachNgay = Number(document.getElementById("nganSachNgay").value);
  let soNgayChay = Number(document.getElementById("soNgayChay").value);
  let cpaMucTieu = Number(document.getElementById("cpaMucTieu").value);
  let tyLeChot = Number(document.getElementById("tyLeChot").value);
  let giaTriDon = Number(document.getElementById("giaTriDon").value);
  let ketQua = document.getElementById("ketQua");

  if (nganSachNgay <= 0) {
    ketQua.innerHTML = "Vui lòng nhập ngân sách mỗi ngày lớn hơn 0";
    ketQua.className = "thap";
  } else if (soNgayChay <= 0) {
    ketQua.innerHTML = "Vui lòng nhập số ngày chạy lớn hơn 0";
    ketQua.className = "thap";
  } else if (cpaMucTieu <= 0) {
    ketQua.innerHTML = "Vui lòng nhập CPA mục tiêu lớn hơn 0";
    ketQua.className = "thap";
  } else if (tyLeChot <= 0) {
    ketQua.innerHTML = "Vui lòng nhập tỷ lệ chốt đơn lớn hơn 0";
    ketQua.className = "thap";
  } else if (giaTriDon <= 0) {
    ketQua.innerHTML = "Vui lòng nhập giá trị trung bình mỗi đơn lớn hơn 0";
    ketQua.className = "thap";
  } else {
    let tongNganSach = nganSachNgay * soNgayChay;
    let leadDuKien = tongNganSach / cpaMucTieu;
    let soDonDuKien = leadDuKien * tyLeChot / 100;
    let doanhThuDuKien = soDonDuKien * giaTriDon;
    let nhanXet = "";

    if (leadDuKien < 20) {
      nhanXet = "Ngân sách còn thấp, phù hợp để test nhỏ.";
      ketQua.className = "thap";
    } else if (leadDuKien < 100) {
      nhanXet = "Ngân sách tạm ổn để đánh giá tín hiệu ban đầu.";
      ketQua.className = "trung-binh";
    } else {
      nhanXet = "Có thể test quy mô lớn hơn hoặc scale nếu chỉ số tốt.";
      ketQua.className = "tot";
    }

    ketQua.innerHTML =
      "<h3>Kết quả dự kiến</h3>" +
      "<p><strong>Ngân sách mỗi ngày:</strong> " + dinhDangTien(nganSachNgay) + "</p>" +
      "<p><strong>Số ngày chạy:</strong> " + soNgayChay + " ngày</p>" +
      "<p><strong>CPA mục tiêu:</strong> " + dinhDangTien(cpaMucTieu) + "/lead</p>" +
      "<p><strong>Tỷ lệ chốt đơn dự kiến:</strong> " + tyLeChot + "%</p>" +
      "<p><strong>Giá trị trung bình mỗi đơn:</strong> " + dinhDangTien(giaTriDon) + "</p>" +
      "<p><strong>Tổng ngân sách:</strong> " + dinhDangTien(tongNganSach) + "</p>" +
      "<p><strong>Lead dự kiến:</strong> " + leadDuKien.toFixed(0) + " lead</p>" +
      "<p><strong>Số đơn dự kiến:</strong> " + soDonDuKien.toFixed(0) + " đơn</p>" +
      "<p><strong>Doanh thu dự kiến:</strong> " + dinhDangTien(doanhThuDuKien) + "</p>" +
      "<p><strong>Nhận xét:</strong> " + nhanXet + "</p>";
  }
}

function xoaDuLieu() {
  document.getElementById("nganSachNgay").value = "";
  document.getElementById("soNgayChay").value = "";
  document.getElementById("cpaMucTieu").value = "";
  document.getElementById("tyLeChot").value = "";
  document.getElementById("giaTriDon").value = "";

  let ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = "";
  ketQua.className = "";
}