// Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc của số đó.
const readNumber = (number) => {
  var soDonVi = number % 10;
  var soChuc = Math.floor(number / 10) % 10;
  var soTram = Math.floor(number / 100) % 10;

  var tenDonVi = "";
  var tenChuc = "";
  var tenTram = "";
  // Đọc hàng trăm
  switch (soTram) {
    case 1:
      tenTram = "Một trăm";
      break;
    case 2:
      tenTram = "Hai trăm";
      break;
    case 3:
      tenTram = "Ba trăm";
      break;
    case 4:
      tenTram = "Bốn trăm";
      break;
    case 5:
      tenTram = "Năm trăm";
      break;
    case 6:
      tenTram = "Sáu trăm";
      break;
    case 7:
      tenTram = "Bảy trăm";
      break;
    case 8:
      tenTram = "Tám trăm";
      break;
    case 9:
      tenTram = "Chín trăm";
      break;
    default:
      break;
  }
  // Đọc hàng chục
  switch (soChuc) {
    case 1:
      tenChuc = "mười";
      break;
    case 2:
      tenChuc = "hai mươi";
      break;
    case 3:
      tenChuc = "ba mươi";
      break;
    case 4:
      tenChuc = "bốn mươi";
      break;
    case 5:
      tenChuc = "năm mươi";
      break;
    case 6:
      tenChuc = "sáu mươi";
      break;
    case 7:
      tenChuc = "bảy mươi";
      break;
    case 8:
      tenChuc = "tám mươi";
      break;
    case 9:
      tenChuc = "chín mươi";
      break;
    default:
      tenChuc = "lẻ";
      break;
  }
  // Đọc hàng đơn vị
  switch (soDonVi) {
    case 1:
      tenDonVi = "một";
      break;
    case 2:
      tenDonVi = "hai";
      break;
    case 3:
      tenDonVi = "ba";
      break;
    case 4:
      tenDonVi = "bốn";
      break;
    case 5:
      tenDonVi = "năm";
      break;
    case 6:
      tenDonVi = "sáu";
      break;
    case 7:
      tenDonVi = "bảy";
      break;
    case 8:
      tenDonVi = "tám";
      break;
    case 9:
      tenDonVi = "chín";
      break;
    default:
      tenDonVi = "mươi";
      break;
  }
  if (Number.isInteger(number) && number < 1000 && number > 99) {
    soChuc == 0 && soDonVi == 0
      ? console.log(tenTram)
      : console.log(tenTram, tenChuc, tenDonVi);
  } else {
    console.log("Không phải số nguyên có 3 chữ số nên không thích đọc");
  }
};
readNumber(100);
