// var dùng để khai báo biến
var fullName = 'Ha Hoang Duy'; // dòng này để khai báo tên
var age = 16; // dòng này để khai báo tuổi

// alert dùng để gọi hàm thông báo
alert(fullName);
alert(age);

/* 
    Một số hàm built-in
    1.Alert
    2.Console(dùng để thông báo trong phần console trên web)
    3.Confirm(dùng để gọi hàm thông báo xác nhận)
    4.Promt(dùng dể gọi hàm thông báo xác nhận có ô input)
    5.Set timeout(dùng để chạy 1 đoạn code sau 1 thời gian được set)
    6.Set interval(dùng để chạy 1 đoạn code sau 1 thời gian được set và chạy liên tục)
*/

// Toán tử số học - Arithmetic
    var a = 1 + 2;
    console.log(a)

// Toán tử gán - Assignment
    var a = 1;
    var b = 2;

// Toán tử so sánh - Comparison
    if (a < b) {
        alert('Đúng');
    }

// Toán tử logic - Logical
    var a = 1;
    var b = 2;
    
    if(a > 0 && b > 0) {
        alert('a & b lớn hơn 0')
    }

/** Toán tử số học
 + ---> Cộng
 - ---> Trừ
 * ---> Nhân
 ** ---> Lũy thừa
 / ---> Chia
 % ---> Chia lấy số dư
 ++ ---> Tăng 1 giá trị số
 -- ---> Giảm 1 giá trị số
 */

    var a = 1;
    var b = 2;
    
    var c= a - b;

    console.log(c);