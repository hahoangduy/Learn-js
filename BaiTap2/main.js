// cho 1 function find() có 2 tham số, array và index, 
// nếu index và giá trị của index là số chẵn thì tính tổng giá trị trong array,
// nếu không thì trả về tổng giữa index và độ dài của array.


// arr1 = [4, 7,22,65,87,34, 9]
// find(arr1, 2)

// find(arr1, 5)


function find(array, index) {
    var sum = 0
    // Tạo if để xác định index và giá trị của index là số chẵn hay không
        if(index % 2 == 0 && array[index] % 2 == 0) { // index và giá trị ứng với index đó là số chẵn
            array.forEach(function(value){ // tính tổng giá trị trong array
                sum = sum + value;
            }) 
        } else { // index và giá trị ứng với index đó là số lẻ
            sum = index + array.length // tính tổng giữa index và độ dài của array
        }
        return sum
    }


arr1 = [4, 7, 22, 65, 87, 34, 9]
var result = find(arr1, 2)
console.log(result)
var result1 = find(arr1, 5)
console.log(result1)

console.log('---------------------------------------------------------------------')

function find1(array, index) {
    var sum = 0
    // Tạo if để xác định index và giá trị của index là số chẵn hay không
    if(index % 2 == 0 && array[index] % 2 == 0) {
    for(let i = 0; i < array.length; i++) {
            sum = sum + array[i]
    }
    } else {
        sum = index + array.length
    }
    return sum
}


arr1 = [4, 7, 22, 65, 87, 34, 9]
var result2 = find1(arr1, 2)
console.log(result2)
var result3 = find1(arr1, 5)
console.log(result3)