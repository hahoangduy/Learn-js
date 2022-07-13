// cho 1 function, find() có 1 tham số  là tháng,
// nhập 1 số bất kì và trả về số ngày trong tháng đó. 
// vd: tháng 7 là 31 ngày. nếu k có tháng tồn tại trả về  -1

function find(thang) {
        if(thang == 1 || thang == 3 || thang ==  5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            return '31 ngày'
        } else if(thang == 2) {
            return '28 ngày'
        } else if(thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            return '30 ngày'
        } else {
            return -1
        }
    }

var result = find(9)
console.log(result)
var result1 = find(2)
console.log(result1)
var result2 = find(7)
console.log(result2)




// cho 1 function findDuplicate(), co 2 tham so array va number,
// trả về tổng số trùng lặp giữa các giá trị trong array và number.

// arr1 = [2, 43, 11, 7, 34, 7, 34, 5, 11]
// findDuplicate(arr1, 7) => kết quả là 2

// arr2 = [2, 11, 11, 7, 34, 7, 34, 5, 11]
// findDuplicate(arr2, 11) => kết quả là 3

function findDuplicate(array, number) {
    var sum = 0 // biến hứng kết quả của tổng số trùng lặp giữa các giá trị trong array và number
    for(let i = 0; i < array.length; i++) { // for để duyệt tất cả index trong mảng
        if(array[i] == number) { // if để xác định giá trị trong array có bằng với number đã cho không
            sum = sum + 1
        }
    }
    return sum
}


arr1 = [2, 43, 11, 7, 34, 7, 34, 5, 11, 34, 34]
var result3 = findDuplicate(arr1,34)
console.log(result3)
arr2 = [2, 11, 11, 7, 34, 7, 34, 5, 11]
var result4 = findDuplicate(arr2, 11)
console.log(result4)


console.log('==================================================================')

// cho 1 function getElement(), với 3 tham số  array, number1, number2. 
// lấy giá trị của array tại vị trí number1, so sánh giá trị vừa tìm được với number2,
// nếu chúng bằng nhau trả về  true, nếu không trả về false.


// arr1 = [3, 1, 63, 65, 7, 213, 4, 123]
// getElement(arr1, 2, 2)
// getElement(arr1, 6, 4)
// getElement(arr1, 4, 4)

function getElement(array, number1, number2) {
    if(array[number1] == number2) { // so sách giá trị của array tại index number1 có bằng với number2 không
        return true // bằng nhau trả về true
    } else {
        return false // không bằng trả về false
    }
}

arr1 = [3, 1, 63, 65, 7, 213, 4, 123]
var result5 = getElement(arr1, 2, 2)
console.log(result5)
var result6 = getElement(arr1, 6, 4)
console.log(result6)
var result7 = getElement(arr1, 4, 4)
console.log(result7)

console.log('----------------------------------------------------------------------')

// cho 1 function runLogic(), với 2 tham số, array và charactor, 
// nối chuỗi array với nhau và nối với charactor ở vị trí chẵn và trả về kết quả


// arr1 = ["1", "5", "123", "daa", "97"]
// runLogic(arr1, " <> ")


function runLogic(array, charactor) {
    // tạo biến hứng chuỗi nối
    var noiChuoi = ''
    // tạo for để duyệt tất cả phần tử trong mảng
    for(let i = 0; i < array.length; i++) {
        noiChuoi= noiChuoi + array[i]
        if(i % 2 == 0) { // kiểm tra index là số chẵn hay không
            noiChuoi = noiChuoi + charactor // là số chẵn thì nối thêm charactor
        }
    }
    return noiChuoi
}

arr1 = ["1", "5", "123", "daa", "97"]
var result8 = runLogic(arr1, " <> ")
console.log(result8)

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// cho 1 function find1(), với tham số là array,
// 	tìm giá trị lớn nhất trong array đó và trả về


// arr1 = [4,22, 657, 111, 888, 23, 1]
// find(arr1) => 888

function find1(array) {
    // tạo biến tạm để ví dụ số lớn nhất là số đầu tiên của mảng
    var max = array[0];
    // tạo for để duyệt tất cả phần tử trong mảng
    for(let i = 0; i < array.length; i++) {
        // tạo if để so sánh từng giá trị trong mảng với giá trị đầu tiên để tìm giá trị lớn nhất
        if (max < array[i]) { 
            max = array[i]; // thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
        }
    }
    return max
}

arr1 = [4, 22, 657, 111, 888, 23, 1]
var result9 = find1(arr1)
console.log(result9)
arr2 = [4, 22, 657, 111, 888, 23, 999]
var result10 = find1(arr2)
console.log(result10)
arr3 = [4, 1000, 657, 111, 888, 23, 1]
var result11 = find1(arr3)
console.log(result11)

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// cho 1 function find1(), với tham số là array,
// 	tìm giá trị lớn nhất trong array đó và trả về


// arr1 = [4,22, 657, 111, 888, 23, 1]
// find(arr1)

function find3(array) {
    // tạo biến tạm để ví dụ số lớn nhất là số đầu tiên của mảng
    var max = array[0]
    // dùng forEach để lấy các phần tử trong mảng theo thứ tự
    array.forEach(function(value) {
        // tạo if để so sánh từng giá trị trong mảng với giá trị đầu tiên để tìm giá trị lớn nhất
        if(max < value) {
            max = value // thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
        }
    })
    return max
}

arr1 = [4, 22, 657, 111, 888, 23, 1]
var result16 = find3(arr1)
console.log(result16)
arr2 = [4, 22, 9876, 111, -3, 23, 1]
var result17 = find3(arr2)
console.log(result17)
arr3 = [4, 22, 7, 111, 1000, 23, 10]
var result18 = find3(arr3)
console.log(result18)

console.log('****************************************************************8')
// cho 1 function find2(), với tham số là array,
// 	tìm giá trị nhỏ nhất trong array đó và trả về


// arr1 = [4, 22, 657, 111, 888, 23, 1]
// find2(arr1)

function find2(array) {
    // tạo biến tạm để ví dụ số nhỏ nhất là số đầu tiên của mảng
    var min = array[0]
    // tạo for để duyệt tất cả phần tử trong mảng
    for(let i  = 0; i < array.length; i++) {
        // tạo if để so sánh từng giá trị trong mảng với giá trị đầu tiên để tìm giá trị nhỏ nhất
        if(min > array[i]) {
            min = array[i] // thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
        }
    }
    return min
}

arr1 = [4, 22, 657, 111, 888, 23, 1]
var result13 = find2(arr1)
console.log(result13)
arr2 = [4, 22, 657, 111, -3, 23, 1]
var result14 = find2(arr2)
console.log(result14)
arr3 = [4, 22, 7, 111, 888, 23, 10]
var result15 = find2(arr3)
console.log(result15)

console.log('-------------------------------------------------------------')

// Viết chương trình JavaScript để tính tổng của hai số nguyên đã cho. 
// Nếu hai giá trị giống nhau thì trả về gấp ba tổng của chúng.

function tong(a, b) {
        var sum = a + b // tạo biến để hứng kết quả tính tổng của hai số nguyên
        if(a == b) { // tạo if để kiểm tra giá trị của a có bằng giá trị của b không
            sum = sum * 3
        }
    return sum
}
    
var result19 = tong(6, 6)
console.log(result19)    
var result19 = tong(2, 5)
console.log(result19)    
var result19 = tong(14, 14)
console.log(result19)


// Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
// Phí thuê bao bắt buộc là 25 nghìn.
// 600 đồng cho mỗi gọi của 50 phút đầu tiên.
// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.

function phiDienThoai(tongSoPhut) {
    let tongTien = 25000
    let soPhutConLai = tongSoPhut

    // 50 phút đầu tiên
    if (soPhutConLai >= 50) {
      tongTien += 50 * 600
      soPhutConLai = soPhutConLai - 50
    } else {
      tongTien += soPhutConLai * 600
      soPhutConLai = 0
    }

    // 150 phút tiếp theo
    if (soPhutConLai >= 150) {
      tongTien += 150 * 400
      soPhutConLai = soPhutConLai - 150
    } else {
      tongTien += soPhutConLai * 400
      soPhutConLai = 0
    }

    // từ 200 phút đầu tiên trở đi
    // lưu ý: đề bài hơi lừa chút, hãy để ý đề bài ở chỗ "50 phút đầu tiên, 150 phút tiếp theo, 200 phút đầu tiên"
    tongTien += soPhutConLai * 200

    console.log({
      tongTien
    })
  }
  
  phiDienThoai(60)


//   cho 1 function, find() có tham số là array,
//   tính tổng toàn bộ giá trị của array,
//   nếu tổng bằng số chẵn, thay đổi value = -1 ở các index chẵn
//   nếu tổng bằng số lẻ, thay đổi value = -1 ở các index lẻ
//   và trả về array
  
//   arr1 = [1, 6, 2, 99, 324, 1, 23, 64]
//   find(arr1) -> -1, 6, -1, 99, -1, 1, -1, 64

console.log('=================================================')

function find4(array) {
    var sum = 0 // biến hứng kết quả của tổng toàn bộ giá trị
    for(let i = 0; i < array.length; i++) { // duyệt tất cả các phần tử trong mảng
        sum = sum + array[i]   
    }
        for(let i = 0; i < array.length; i++) { // duyệt tất cả các phần tử trong mảng
            if(timSoChan(sum)) { // tổng là số chẵn
                if(timSoChan(i)) { // index là số chẵn 
                    array.splice(i, 1, -1)
                }
            } else { // tổng là số lẻ
                if(!timSoChan(i)) { // index là số lẻ
                    array.splice(i, 1, -1)
                }
            }
        }
    return array
}

arr1 = [1, 6, 2, 99, 324, 1, 23, 64] // -1, 6, -1, 99, -1, 1, -1, 63
var result20 = find4(arr1)
console.log(result20)
arr2 = [55, 7, 2, 84, 74, 1, 83, 43] // 55, -1, 2, -1, 74, -1, 83, -1
var result21 = find4(arr2)
console.log(result21)

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')


/*
cho 1 function find2() có 3 tham số a, b, c đều là number
kiểm tra a, b là số chẵn ; c là số lẻ thì trả về a + b
kiểm tra a, c chẵn; b là số lẻ thì trả về a + c
*/

function find5(a, b, c) {
    // Tạo if để kiểm tra a, b, c là số chẵn hay lẻ
    if(timSoChan(a)) { // a là số chẵn
        if(timSoChan(b)) { // b là só chẵn và a là số chẵn
            if(!timSoChan(c)) { // c là số lẻ và a, b là số chẵn
                return a + b
            }
        } else { // b là số lẻ 
            if(timSoChan(c)) { // c là số chẵn và b là số lẻ
                return a + c
            }
        }
    }
    return -1
}

function timSoChan(so) {
    if(so % 2 == 0) {
        return true
    } else {
        false
    }
}

var result22 = find5(6, 8, 1) // 14
console.log(result22)
var result23 = find5(13217648237, 1, 1231) // -1
console.log(result23)
var result24 = find5(887, 51243, 123) // -1
console.log(result24)

/**
   * Đề bài: Nhập vào một số nguyên dương n,
   * viết chương trình tính S = 1 + 1/2 + 1/3 + … + 1/n
  */

//viết chương trình tính S = 1 + 1/2 + 1/3 + … + 1/n

// cho 1 function sum(), với tham số  là n,
// tính tổng của biểu thức S = 1 + 1/2 + 1/3 + … 1/n-1 + 1/n, và trả về kết quả.


// sum(6) => 2.45

function sum(n) {
    var S = 0 // biến hứng tổng của biểu thức
    for(let i = 1; i <= n; i++){ // dùng để duyệt tất cả phần tử
        S = S + 1/i;
      }
      return S
}

var result25 = sum(6)
console.log(result25)
var result26 = sum(12)
console.log(result26)
var result27 = sum(9)
console.log(result27)

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

// cho 1 function, daoNguoc() với tham số array, 
// trả về đảo ngược của array trên

// arr1=[1, 2, 3, 4, 5, 6]
// daonguoc(arr1) => 6, 5, 4, 3, 2, 1

function daoNguoc(array) {
    var array2 = [] // biến hứng giá trị được đảo ngược ở mảng 1
    var lastIndex = array.length - 1 // tìm index cuối của mảng
    for(let i = lastIndex; i >= 0; i--) { // dùng để duyệt tất cả phần tử từ cuối quay về đầu
        array2.push(array[i]) // dùng để thêm giá trị vào mảng hứng
    }
    return array2
}

arr1 = [1, 2, 3, 4, 5, 6]
var result28 = daoNguoc(arr1)
console.log(result28)

// cho 1 function, hinhChuNhat(), với 2 tham số  doc, ngang
// vẽ hình chữ nhật với 2 tham số trên

// hinhChuNhat(3,5)

// * * * * *
// * * * * *
// * * * * *

function hinhChuNhat(doc, ngang) {
    var veHinh = ''
    for(let i = 0; i < ngang; i++) {
        veHinh += '* '
    }
    for(let j = 0; j < doc; j++) {
        console.log(veHinh)
        console.log('')
    }
}

var result29 = hinhChuNhat(3, 5)

console.log('============================================================')

// Đài khí tượng thủy văn Việt Nam đang thống kê lượng mưa của một số tháng để dự báo thời tiết trong thời gian sắp tới.
// Hãy tìm và in ra thứ tự các tháng có lượng mưa lớn hơn lượng mưa trung bình của các tháng được thống kê. 
// Đơn vị của lượng mưa tính là mm.

// Ví dụ:
// Lượng mưa trung bình các tháng: 1 3 2
// Đáp án: 2 (vì tháng thứ 2 có lượng mưa là 3, cao hơn trung bình 3 tháng trên)

function timThang(array) {
    var sum = 0 // biến hứng tổng lượng mưa trung bình các tháng
    var array2 = []
    for(let i = 0; i < array.length; i++) { // duyệt tất cả các phần tử trong mảng
        sum += array[i]
    }

    var trungBinh = sum / array.length // biến dùng để tính lượng mưa trung bình
    for(let i = 0; i < array.length; i++) { // duyệt tất cả các phần tử trong mảng
        if(array[i] > trungBinh) { // so sánh lượng mưa trung bình với lượng mưa mỗi tháng
            var thang = i + 1 // tìm tháng
            array2.push(thang)
        }
    }
    return array2
}

arr1 = [1, 3, 2, 4, 6]
var result30 = timThang(arr1)
console.log(result30)


console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

// cho 1 function, find(), với 2 tham số  arr1, arr2,
// nếu tổng của arr1 và arr2 là chẵn thì đổi giá trị thành -1 ở index chẵn của arr1 và arr2,
// nếu tổng của arr1 và arr2 là lẻ thì đổi giá trị thành -1 ở index lẻ của arr1 và arr2,

// arr1 = [54, 12, 77, 11, 2, 56, 13]
// arr2 = [6, 23, 45, 1, 3, 6]
// arr3 = [4, 12, 25, 41, 54, 2]
function find6(arr1, arr2) {
    var sum = 0 // biến hứng tổng arr1 và arr2
    for(let i = 0; i < arr1.length; i++) { // duyệt tất cả các phần tử trong mảng
        sum += arr1[i] // tính tổng trong mảng 1
    }
    for(let i = 0; i < arr2.length; i++) { // duyệt tất cả các phần tử trong mảng
        sum += arr2[i] // tính tổng trong mảng 2
    }
    for(let i = 0; i < arr1.length; i++) { // duyệt tất cả các phần tử trong mảng
        if(timSoChan(sum)) { // tổng là số chẵn
            if(timSoChan(i)) { // index là số chẵn
                arr1.splice(i, 1, -1)
            }
        } else { // tổng là số lẻ
            if(!timSoChan(i)) { // index là số lẻ
                arr1.splice(i, 1, -1)
            }
        }
    }
    for(let i = 0; i < arr2.length; i++) { // duyệt tất cả các phần tử trong mảng
        if(timSoChan(sum)) { // tổng là số chẵn
            if(timSoChan(i)) { // index là số chẵn
                arr2.splice(i, 1, -1)
            }
        } else { // tổng là số lẻ
            if(!timSoChan(i)) { // index là số lẻ
                arr2.splice(i, 1, -1)
            }
        }
    }
    console.log(arr1)
    console.log(arr2)
}

arr1 = [54, 12, 77, 11, 2, 56, 13] // 54, -1, 77, -1, 2, -1, 13 
arr2 = [6, 23, 45, 1, 3, 4] //  6, -1, 45, -1, 3, -1
var result31 = find6(arr1, arr2)

console.log('-----------------------------------------------------------------------')

// cho 1 function, find(), với 2 tham số  arr1, arr2,
// nếu tổng của arr1 và arr2 là chẵn thì đổi giá trị thành -1 ở index chẵn của arr1 và index lẻ của arr2,
// nếu tổng của arr1 và arr2 là lẻ thì đổi giá trị thành -1 ở index lẻ của arr1 và index chẵn của arr2,

// arr1 = [54, 12, 77, 11, 2, 56, 13]
// arr2 = [6, 23, 45, 1, 3, 6]

function find7(arr1, arr2) {
    var sum = 0 // biến hứng tổng
    for(let i = 0; i < arr1.length; i++) { // duyệt tất cả các phần tử trong mảng
        sum += arr1[i] // tính tổng trong mảng 1
    }
    for(let i = 0; i < arr2.length; i++) { // duyệt tất cả các phần tử trong mảng
        sum += arr2[i] // tính tổng trong mảng 2
    }
    for(let i = 0; i < arr1.length; i++) { // duyệt tất cả các phần tử trong mảng
        if(timSoChan(sum)) { // tổng là số chẵn
            if(timSoChan(i)) { // index là số chẵn
                arr1.splice(i, 1, -1)
            }
        } else { // tổng là số lẻ
            if(!timSoChan(i)) { // index là số lẻ
                arr1.splice(i, 1, -1)
            }
        }
    }
    for(let i = 0; i < arr2.length; i++) { // duyệt tất cả các phần tử trong mảng
        if(timSoChan(sum)) { // tổng là số chẵn
            if(!timSoChan(i)) { // index là số lẻ
                arr2.splice(i, 1, -1)
            }
        } else { // tổng là số lẻ
            if(timSoChan(i)) { // index là số chẵn
                arr2.splice(i, 1, -1)
            }
        }
    }
    console.log(arr1)
    console.log(arr2)
}
arr1 = [54, 12, 77, 11, 2, 56, 13] // 54, -1, 77, -1, 2, -1, 13 
arr2 = [6, 23, 45, 1, 3, 4] //  -1, 23, -1, 1, -1, 4, -1
var result32 = find7(arr1, arr2)


console.log('-----------------------------------------------------------------------')

// cho 1 function, sum() với tham số là array,
// tính và thay đổi giá trị trong array như sau, value = value + value(index + 2)
// và trả về arr

// arr1= [2, 45, 1, 3, 11, 5] 11 => i = 4, length = 6
// sum(arr1) => 3, 48, 12, 8, 11, 5

function sum1(array) {
    var array2 = []
    var sum = 0
    for(let i = 0; i < array.length; i++) {
        var nextIndex = i + 2
        if(nextIndex >= array.length) {
            sum = array[i]
        } else {
            sum = array[i] + array[nextIndex]
        }
        array2.push(sum)
    }
    return array2
}
arr1 = [2, 45, 1, 3, 11, 5]
var result33 = sum1(arr1)
console.log(result33)
arr2 = [2, 15, 12, 34, 21, 53, 13, 15, 54]
var result34 = sum1(arr2)
console.log(result34)
arr3 = [13, 43, 12, 35, 65, 51, 56 ,67, 13]
var result35 = sum1(arr3)
console.log(result35)