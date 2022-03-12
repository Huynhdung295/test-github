// Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
const baitap1 = (so1, so2, so3) => {
  // if (so1 < so2 && so1 < so3) {
  //   so2 < so3 ? console.log(so1, so2, so3) : console.log(so1, so3, so2);
  // } else if (so2 < so1 && so2 < so3) {
  //   so1 < so3 ? console.log(so2, so1, so3) : console.log(so2, so3, so1);
  // } else if (so3 < so1 && so3 < so2) {
  //   so1 < so2 ? console.log(so3, so1, so2) : console.log(so3, so2, so1);
  // }
  so1 < so2 && so1 < so3
    ? so2 < so3
      ? console.log(so1, so2, so3)
      : console.log(so1, so3, so2)
    : so2 < so1 && so2 < so3
    ? so1 < so3
      ? console.log(so2, so1, so3)
      : console.log(so2, so3, so1)
    : so3 < so1 && so3 < so2
    ? so1 < so2
      ? console.log(so3, so1, so2)
      : console.log(so3, so2, so1)
    : console.log("Bằng nhau hết rồi! Ba số", so1, "sao mà sắp !!!");
};
// baitap1(4, 4, 4);
/**
 * Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
   hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
   đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
 */
const bai2 = (name) => {
  if (name === "B") {
    console.log("Chào Bố");
  } else if (name === "M") {
    console.log("Chào Mẹ");
  } else if (name === "A") {
    console.log("Chào anh Trai");
  } else if (name === "E") {
    console.log("Chào Em gái");
  } else {
    console.log("Chào khách");
  }
};
const findNextDate = (date, month, year) => {
  let nextDay;
  let nextMonth;
  let nextYear;
  switch (month) {
    case (1, 3, 5, 7, 8, 10, 12):
      if (date == 31) {
        nextDay = 1;
        nextMonth = month == 12 ? 1 : month + 1;
        nextYear = month == 12 ? year + 1 : year;
      } else if (date > 31 || date < 1) {
        nextDay = 0;
        nextMonth = 0;
        nextYear = 0;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      }
      break;
    case (4, 6, 9, 11):
      if (date == 30) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else if (date > 30 || date < 1) {
        nextDay = 0;
        nextMonth = 0;
        nextYear = 0;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      }
      break;
    case 2:
      if (year % 4 == 0) {
        if (date == 29) {
          nextDay = 1;
          nextMonth = month + 1;
          nextYear = year;
        } else if (date > 29 || date < 1) {
          nextDay = 0;
          nextMonth = 0;
          nextYear = 0;
        } else {
          nextDay = date + 1;
          nextMonth = month;
          nextYear = year;
        }
      } else if (date == 28) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      } else if (date > 28 || date < 1) {
        nextDay = 0;
        nextMonth = 0;
        nextYear = 0;
      } else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
      }

      break;
    default:
 

      break;
  }
  console.log("Ngày hôm sau là", nextDay, nextMonth, nextYear);
};
findNextDate(31, 11, 2020);