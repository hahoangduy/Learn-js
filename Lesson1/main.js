// // var dùng để khai báo biến
// var fullName = 'Ha Hoang Duy'; // dòng này để khai báo tên
// var age = 16; // dòng này để khai báo tuổi

// // alert dùng để gọi hàm thông báo
// alert(fullName);
// alert(age);

// /* 
//     Một số hàm built-in
//     1.Alert
//     2.Console(dùng để thông báo trong phần console trên web)
//     3.Confirm(dùng để gọi hàm thông báo xác nhận)
//     4.Promt(dùng dể gọi hàm thông báo xác nhận có ô input)
//     5.Set timeout(dùng để chạy 1 đoạn code sau 1 thời gian được set)
//     6.Set interval(dùng để chạy 1 đoạn code sau 1 thời gian được set và chạy liên tục)
// */

// // Toán tử số học - Arithmetic
//     var a = 1 + 2;
//     console.log(a)

// // Toán tử gán - Assignment
//     var a = 1;
//     var b = 2;

// // Toán tử so sánh - Comparison
//     if (a < b) {
//         alert('Đúng');
//     }

// // Toán tử logic - Logical
//     var a = 1;
//     var b = 2;
    
//     if(a > 0 && b > 0) {
//         alert('a & b lớn hơn 0')
//     }

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

/* Toán tử gán
    Toán tử        Ví dụ       Tương đương
    =              x = y       x = y
    +=             x += y      x = x + y
    -=             x -= y      x = x - y
    *=             x *= y      x = x * y
    /=             x /= y      x = x / y
    **=            x **= y     x = x ** y
 */

// Toán tử chuỗi
    var firstName = 'Duy';
    var lastName = 'Ha';

    console.log(firstName + ' ' + lastName);
    /* Hoặc
    var fullName = firstName + ' ' + lastName;
    */

/* Toán tử so sánh
    ==     --->     Bằng
    !=     --->     Không bằng
    >      --->     Lớn hơn
    <      --->     Nhỏ hơn
    >=     --->     Lớn hơn hoặc bằng
    <=     --->     Nhỏ hơn hoặc bằng
    */

    var a = 2321757867474;
    var b = 2453543453535;
    var c = 0;

    if (a == b) {
        c = 1
        // console.log('Điều kiện đúng!')
    } else {
        // console.log('Điều kiện sai!')
        c = 2;
    }
    console.log(c)

/**
    * Boolean
    */

     var a = 1;
     var b = 2;

    var isSuccess = a > b;
    console.log(isSuccess);

 /**
     * If - Else
    */
     var isSuccess = a > b
        if(isSuccess) {
            console.log('Dieu kien dung')
        } else {
            console.log('Dieu kien sai')
        }

        // Số chẵn là số khi chia cho 2 sẽ có phần dư là 0
// Số lẻ là số khi chia cho 2 sẽ có phần dư là 1

// Khai báo biến number, và gán trá trị cho biến number
var number = 13;

// Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
var remain = number % 2

// Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// Khai báo biến isOdd, và gán kết quả so sánh cho biến isOdd
var isOdd = remain === 1;

// In giá trị của biến isOdd ra cửa sổ console của trình duyệt
console.log(isOdd) // Output: ?
    

/**
    * Toán tử Logi
    * 1. && - And
    * 2. || - Or
    * 3. ! - Not
    */

      var a = 1;
      var b = 2;
      var c = 3;
      
    if(a > 0 && b > 0) {
        console.log('Đúng')
    }

/*
Kiểu dữ liệu trong Javascript

    1. Dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object
*/
    // Number type

        var a = 1;
        var b = 2;
        var c = 3;
    // String type

        var fullName ='Hoang Duy';

    // Boolean
        var isSuccess = true;