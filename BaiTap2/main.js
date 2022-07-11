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
    var max = array[0];
    // dùng forEach để lấy các phần tử trong mảng theo thứ tự
    array.forEach(function(value) {
        if(max < value) {
            max = value
        }
    });
    return max
}

arr1 = [4, 22, 657, 111, 888, 23, 1]
var result14 = find3(arr1)
console.log(result14)
arr2 = [4, 22, 9876, 111, -3, 23, 1]
var result15 = find3(arr2)
console.log(result15)
arr3 = [4, 22, 7, 111, 1000, 23, 10]
var result16 = find3(arr3)
console.log(result16)

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