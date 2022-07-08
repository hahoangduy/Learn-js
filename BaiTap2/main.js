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

