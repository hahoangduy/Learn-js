            // function có 2 tham số (array và string) return kiểu dữ liệu string 
            // Dùng để nối 1 mảng + 1 kí tự thành 1 chuỗi
            // Hàm array.join() trong Javascript trả về 1 chuỗi có kiểu dữ liệu là string và nối 1 array + 1 kí tự thành 1 chuỗi
            function joinWithCharacter(array, charactor ) {
                var a = array.join(charactor) 
                // console.log(typeof a)
                // return a
                var b = join(array, charactor)
                console.log(a)
                console.log(b)
                return ''
             } 
             
            //  Ví dụ khi sử dụng
             var cars = ['Honda', 'Mazda', 'Mercedes'];
             
             var result =  join(cars, ' - ');
             
             console.log(result); // Expected: "Honda - Mazda - Mercedes"

             function join(array, ch) {
                var text = ''
                for (let i = 0; i < array.length; i++) { 
                    // I 0 => Honda + ' - ' => Honda - 
                    var a = array.length - 1 // Tìm index cuối của mảng
                    if(a == i) {
                        text = text + array[i] 

                    } else {
                        text = text + ( array[i] + ch )
                    }

                // text = 1000 + (array[1] + ' - ') => 1000 Mazda -
                // text = 1000 Mazda - + (array[2] + ' - ') => 1000 Mazda - Mercedes -
                 
               

                // i = 0, 0 < 3, i++ = a = 2, if(2 == 0) => false -> else = text = '' + (Honda + ' - ') => text = Honda - 
                // i = 1, 1 < 3, i++ = a = 2, if(2 == 1) => false -> else = text = Honda - + (Mazda + ' - ') => text = Honda - Mazda -
                // i = 2, 2 < 3, i++ = a = 2, if(2 == 2) => true = text = Honda - Mazda - + (Mercedes + ' - ') => text = Honda - Mazda - Mercedes
                // i = 3, 3 < 3(false) => dừng vòng lặp
               
                }

                return text
             }



             function getLastElement(animals) {
               
                    var lastIndex = animals.length - 1  // Tìm index cuối của mảng
                var result = animals[lastIndex] // Tạo biến dùng để hứng element với index = biến lastIndex
        //    console.log(result)
            return result // Trả về result
            }

            function getLastElement1(animals) {
                var lastIndex = animals.length - 1 // Tìm index cuối của mảng
                return animals[lastIndex] // Trả về kết quả là element với index = biến lastIndex
            }

            function getLastElement2(animals) {
                return animals[animals.length - 1] // Trả về kết quả là element của index cuối của mảng
            }
            
            // Ví dụ sử dụng
            var animals = [
                'Monkey',
                'Tiger',
                'Elephant',
                'Dog',
                'Fish',
                'Cat'
            ];

            animals[2]

            var result = getLastElement(animals);
            
            console.log(result); // Expected: "Elephant"
            console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


// =========================================================================================== 


// Cho 1 function tên là getElement(), với tham số  là 1 mảng và 1 number, 
// lấy giá trị của mảng tại vị trí number đã cho, 
// nếu không tồn tại kết quả trả về kết quả `không tồn tại giá trị ở vị trí: {number}`.


// arr1 = [1, 6, 3, 5, 23]
// getElement(arr1, 3) => tìm kết quả 5

// getElement(arr1, 7) => tìm kết quả: không tồn tại giá trị ở vị trí : 7

// function getElement(array, so) { // arr1, số = 3
//     // Tạo if, else để xác định so có vượt quá độ dài của mảng không
//         if(array.length > so) {
//             return array[so]
//         } else {
//             return 'Không tồn tại giá trị ở vị trí: '
//         }
        
//     // Nếu tồn tại giá trị thì hiện value
//     // Nếu không tồn tại thì trả về kết quả `không tồn tại giá trị ở vị trí: {number}`
// }

// arr1 = [1, 6, 3, 5, 23]
// var result1 = getElement(arr1, 3)
// console.log(result1)
// var result2 = getElement(arr1, 7)
// console.log(result2)


// bước 1: arr1 tạo mảng 
// bước 2: gọi hàm getElement với tham số arr1, 3
// bước 3: logic bên trong hàm getElement 
// bước 3.1: kiểm tra điều kiện giữa độ dài của mảng(5) và số đã cho(3): if(5 > 3)(true)
// bước 3.2: true => trả về giá trị(5) tại index = 3
// bước 4: show giá trị của result1 = 5
// bước 5: gọi hàm getElement với tham số arr1, 7
// bước 6: logic bên trong hàm getElement
// bước 6.1: kiểm tra điều kiện giữa độ dài của mảng(5) và số đã cho(7): if(5 > 7)(false)
// bước 6.2: false => tiếp tục tới lệch else, trả về giá trị 'Không ...'
// bước 7: show giá trị của result2 = 'Không ...'


// =================================================================================================


// cho 1 function getElement(), với 3 tham số  array, number1, number2. 
// lấy giá trị của array tại vị trí number1, so sánh giá trị vừa tìm được với number2,
// nếu chúng bằng nhau trả về  true, nếu không trả về false.


// arr1 = [3,1,63,65,7, 213, 4, 123]
// getElement(arr1, 2, 2)
// getElement(arr1, 6, 4)
// getElement(arr1, 4, 4)


    function getElement(array, so1, so2) {
        // Tạo biến để hứng element ứng với index của nó
        var timGiatri = array[so1]
        // Tạo if, else để so sánh giá trị vừa tìm được với number2(so2) và trả lại kết quả đúng như yêu cầu đề bài
        if(timGiatri == so2) {
            return true
        } else {
            return false
        }
    };

    arr1 = [3, 1, 63, 65, 7, 213, 4, 123]
    var result1 = getElement(arr1, 2, 2)
    console.log(result1)
    var result2 = getElement(arr1, 6, 4)
    console.log(result2)
    var result3 = getElement(arr1, 4, 4)
    console.log(result3)

    /*
    Bước 1: arr1 tạo mảng
    Bước 2: Biến tạm timGiatri để hứng element ứng với index của nó
    Bước 2: Biến result1 gọi hàm getElement với 3 tham số là arr1, 2, 2
    Bước 3: Logic trong hàm
    Bước 3.1: So sánh giá trị vừa tìm được(63) với so2(2): if(63 = 2)(false)
    Bước 3.2: false => tiếp tục chạy với else và trả về giá trị 'false'
    Bước 4: Biến result2 gọi hàm getElement với 3 tham số là arr1, 6, 4
    Bước 5: Logic trong hàm
    Bước 5.1: So sánh giá trị vừa tìm được(4) với so2(4): if(4 = 4)(true)
    Bước 5.2: true => Trả về giá trị 'true'
    Bước 6: Biến result3 gọi hàm getElement với 3 tham số là arr1, 4, 4
    Bước 7: Logic trong hàm 
    Bước 7.1: So sánh giá trị vừa tìm được(7) với so2(4): if(7 = 4)(false)
    Bước 7.2: false => tiếp tục chạy tới else và trả về giá trị 'false'
    */

    // ========================================================================================

// cho 1 function total(), với 1 tham số  là array
// tính tổng toàn bộ phần tử trong array đó với điều kiện index là số chẵn và trả về kết quả
//

// arr1 = [ 3, 1, 11, 32, 31]
// total(arr1)

// arr2 = [2,11,3476, 123, 46, 98, 34, 223]
// total(arr2)

// hàm total tính tổng tất cả phần tử trong mảng
function total(array) {
    // Tạo biến sum để tính tổng
    var sum = 0
    // Tạo 1 vòng lặp duyệt qua từng phần tử của mảng
    // i là index bắt đầu từ 0, i phải bé hơn độ dài của mảng, index chỉ tăng 1 giá trị cho 1 lần duyệt
    for (let i = 0; i < array.length; i++) {
        // Lấy element của index rồi cộng với sum
        
        // Tìm index số chẵn
        if (i % 2 == 0) {
             sum = array[i] + sum
        }
    }
    return sum
}

arr1 = [ 3, 1, 11, 32, 31]
var result4 = total(arr1)
console.log(result4)
arr2 = [2,11,3476, 123, 46, 98, 34, 223]
var result5 = total(arr2)
console.log(result5)


function totalSole(array) {
    // Tạo biến sum để tính tổng
    var sum = 0
    // Tạo 1 vòng lặp duyệt qua từng phần tử của mảng
    // i là index bắt đầu từ 0, i phải bé hơn độ dài của mảng, index chỉ tăng 1 giá trị cho 1 lần duyệt
    for (let i = 0; i < array.length; i++) {
        // Lấy element của index rồi cộng với sum
        // sum = array[i] + sum
        // Tìm index số lẻ
        // if (i % 2 != 0) {
             sum = array[i] + sum
        // }
    }
    return sum
}

var result6 = totalSole(arr1)
console.log(result6)
var result7 = totalSole(arr2)
console.log(result7)

// =======================================================================================

// cho 1 function runLogic(), với 2 tham số, array và charactor, 
// nối chuỗi array với nhau và nối với charactor ở vị trí chẵn và trả về kết quả


// arr1 = ["1", "5", "123", "daa", "97"]
// runLogic(arr1, " ?? ")


function runLogic(array, charactor) {
   // Tạo biến để hứng để nối chuỗi
   var noiChuoi = ''
   // Dùng for để duyệt tất cả phần tử trong mảng
   for(let i = 0; i < array.length; i++) {
        noiChuoi = array[i] + noiChuoi
        if (i % 2 == 0) {
            noiChuoi = noiChuoi + charactor
        }
   } 
   // Nối các phần tử 
   // Tìm index số chẵn để nối với charactor
   return noiChuoi
};

arr1 = ["1", "5", "123", "daa", "97"]
var result8 = runLogic(arr1, ' ?? ')
console.log(result8)