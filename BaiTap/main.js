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
   // Tạo biến hứng để nối chuỗi
   var noiChuoi = ''
   // Dùng for để duyệt tất cả phần tử trong mảng
   for(let i = 0; i < array.length; i++) {
        noiChuoi = noiChuoi + array[i]
        if (i % 2 == 0) {
            noiChuoi = noiChuoi + charactor
        }
   } 
   // Nối các phần tử 
   // Tìm index số chẵn để nối với charactor
   return noiChuoi
};

arr1 = ["1", "5", "123", "daa", "97"] // 1 ?? 
var result8 = runLogic(arr1, ' ?? ')
console.log(result8)

//========================================================================================

// cho 1 function findIndex(), với 2 tham số, array và number,
// tìm và trả về index trong array nếu index là số lẻ 
// và value của index bằng number đã cho nếu không thì trả về -1.

// arr1 = [5, 2, 4, 123, 11, 3 ,7, 34]
// findIndex(arr1, 4) => -1 vì array[i] = 4 => index = 2 => không thỏa điều kiện 
// findIndex(arr1, 8) => -1 vì value của index không bằng number đã cho 
// findIndex(arr1, 3) => 5 vì array[i] = 3 => index = 5 => thỏa điều kiện

    function findIndex(array, so3) {
        // Dùng for để duyệt từng index trong mảng
        for (let i = 0; i < array.length; i++) {
            // Dùng if để tìm index số lẻ và so sánh với number đã cho
            if (i % 2 != 0 && array[i] == so3) { // 5, 6 , 7
                return i
            }
        }

        return -1
    }

    arr1 = [5, 2, 4, 123, 11, 3 ,7, 34]
    var result9 = findIndex(arr1, 4)
    console.log(result9)
    var result10 = findIndex(arr1, 8)
    console.log(result10)
    var result11 = findIndex(arr1, 3)
    console.log(result11)

    console.log('========================================================================')

// cho 1 function findIndex(), với 2 tham số, array và number,
// tìm index và trả về, nếu index là số  lẻ và number đã cho chia hết cho value của index.
// nếu k trả về -1.

// arr1 = [5, 2, 4, 2, 11, 3, 7, 34]
// findIndex(arr1, 9) =>
// findIndex(arr1, 8 )
// findIndex(arr1, 17)

function findIndex1(array, so4) {
    // Tạo for để duyệt từng index trong mảng
    for(i = 0; i < array.length; i++) {
        // Tạo if để xác định index là số lẻ và number đã cho chia hết cho value của index
        if(i % 2 != 0 && so4 % array[i] == 0) {
            return i
        }
    }
    return -1
}

arr1 = [5, 2, 4, 2, 11, 3, 7, 34]
var result12 = findIndex1(arr1, 9)
console.log(result12)
var result13 = findIndex1(arr1, 8 )
console.log(result13)
var result14 = findIndex1(arr1, 17)
console.log(result14)

console.log('=========================================================================')

// cho 1 function getEvenNumber(), với tham số  là array,
// tìm tất cả các số chẵn trong array và trả về 

// arr1 = [6, 11, 4, 12, 33, 63, 12, 8, 1]

    function getEvenNumber(array) {
        // Tạo mảng hứng chứa element số chẵn
        var array2 = [] 
        // Tạo vòng for để duyệt tất cả index trong mảng
        for(let i = 0; i < array.length; i++) {
            // Tạo if để tìm element số chẵn và trả về kết quả
            if(array[i] % 2 ==0) {
                // Thêm element số chẵn vào mảng hứng
                array2.push(array[i])
            } 
        }
        return array2
    }

    arr1 = [6, 11, 4, 12, 33, 63, 12, 8, 1] // 6, 4, 12, 12, 8
    var result15 = getEvenNumber(arr1)
    console.log(result15) 

console.log('-------------------------------------------------------------------------')


// cho 1 function getEvenNumber1(), với tham số  là array,
// tìm số chẵn trong array, nếu là số chẵn thay nó thành số -1 không tạo mảng hứng và trả về 

// arr1 = [6, 11, 4, 12, 33, 63, 12, 8, 1] // -1, 11, -1, -1, 33, 63, -1, -1, 1

    function getEvenNumber1(array) {
        // Tạo for để duyệt tất cả index của mảng
        for(let i = 0; i < array.length; i++) {
        // Tạo if để tìm số chẵn
        if(array[i] % 2 == 0) {
            // Thay số -1 vào số chẵn trong mảng
            array.splice(i, 1, -1)
        }
        }
    return array
    }


    arr1 = [6, 11, 4, 12, 33, 63, 12, 8, 1] 
    // arr1.splice(4, 1, -1)
    var result16 = getEvenNumber1(arr1)
    console.log(result16)
    // console.log(arr1)


    /* 
    cho 1 function a() có tham số là b, kiểm tra kiểu dữ liệu của b
    nếu là number, và số đó là số chẵn thì +1, không phải số chẵn thì +2 và trả về,
    nếu là string và = hello thì nối chuỗi ' Duy '
    kiemTradulieu(8)
    kiemTradulieu('hello')
    */

    function kiemTradulieu(b) {
        // Dùng typeof để kiểm tra dữ liệu
        var a = typeof b
        if (a == 'number') {
            if (b % 2 == 0) {
                b++
            } else {
                b = b + 2
            }
            return b
        } else if (a == 'string') {
            if (b == 'hello') {
                b = b + ' Duy '
            }
            return b
        }
        }
        // var result17 = kiemTradulieu(9)
        // console.log(result17)
        var result18 = kiemTradulieu('hello1')
        console.log(result18)
       
        /*
        cho 1 function kiemTrangaythang(thu, thang) có 2 tham số string, number 
        kiểm tra thu và thang đã cho sau đó trả về kết quả là string
        kiemTrangaythang('t2', 6) => return 'Thứ 2, tháng 6'
        kiemTrangaythang('t5', 1) => return 'Thứ 5, tháng 1'
        */ 

        function kiemTrangaythang(thu, thang) {
            var timThuNgay = ''
            if(thu == 't2') {
                timThuNgay = 'Thứ 2'
            } else if(thu == 't3') {
                timThuNgay = 'Thứ 3'
            } else if(thu == 't4') {
                timThuNgay = 'Thứ 4'
            } else if(thu == 't5') {
                timThuNgay = 'Thứ 5'
            } else if(thu == 't6') {
                timThuNgay = 'Thứ 6'
            }

            if(thang == 1) {
                timThuNgay = timThuNgay + ', tháng 1'
            } else if(thang == 2) {
                timThuNgay = timThuNgay + ', tháng 2'
            } else if(thang == 3) {
                timThuNgay = timThuNgay + ', tháng 3'
            } else if(thang == 4) {
                timThuNgay = timThuNgay + ', tháng 4'
            } else if(thang == 5) {
                timThuNgay = timThuNgay + ', tháng 5'
            } else if(thang == 6) {
                timThuNgay = timThuNgay + ', tháng 6'
            } else if(thang == 7) {
                timThuNgay = timThuNgay + ', tháng 7'
            } else if(thang == 8) {
                timThuNgay = timThuNgay + ', tháng 8'
            } else if(thang == 9) {
                timThuNgay = timThuNgay + ', tháng 9'
            } else if(thang == 10) {
                timThuNgay = timThuNgay + ', tháng 10'
            } else if(thang == 11) {
                timThuNgay = timThuNgay + ', tháng 11'
            } else if(thang == 12) {
                timThuNgay = timThuNgay + ', tháng 12'
            }
            return timThuNgay
        }

        var result19 = kiemTrangaythang('t2', 6)
        console.log(result19)
        var result20 = kiemTrangaythang('t5', 1)
        console.log(result20)

    /*
    cho 1 function a() có tham số là b, kiểm tra kiểu dữ liệu của b
    nếu là array number thì thêm vào đầu mảng số 100 và cuối mảng là 1000
    nếu là array string thì thêm vào đầu mảng chữ 'hoang' và cuối mảng là 'duy'
    */


    var a = 10
var b = 10
let greeting;
if (a < b) {
  greeting = "Good morning";
} else if (a == b) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)


var thu = 'thu2'
if (thu == 'thu2') {
    console.log(1)
} else if (thu == 'thu3') {
    console.log(2)
} else if (thu == 'thu4') {
    console.log(3)
} else if (thu == 'thu5') {
    console.log(4)
} 

console.log('---------------------------------------------------------------')


// cho 1 function find(), với 2 tham số, a và b 
// nếu a và b đều là số chẵn thì trả về a + b,
// nếu a và b đều là số lẻ thì trả về a - b,
// nếu a là chẵn và b là lẻ thì trả về a,
// nếu b là chẵn và a là lẻ thì trả về b


// find(7,8)
// find(13217648237, 1)
// find(887, 51243)

function find(a, b) {
    // Tạo if và else if để kiểm tra a và b là số chẵn hay số lẻ
    // Tìm a là số chẵn
    // Nếu a là số chẵn thì tiếp tục tìm b là số chẵn hay lẻ
    // Nếu a là số lẻ 
    if(a % 2 == 0) { // a là số chẵn 
        if(b % 2 == 0) { // b là số chẵn và a là số chẵn
           return a + b
        } else { // khi a là số chẵn và b là số lẻ
            return a
        }
    } else { // a là số lẻ
        if(b % 2 == 0) { // b là số chẵn và a là số lẻ
           return b
        } else { // khi a là số lẻ và b là số lẻ
           return a - b
        }
    } 
}
var result21 = find(6,8)
console.log(result21)
var result22 = find(13217648237, 1)
console.log(result22)
var result23 = find(887, 51243)
console.log(result23)



console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// cho 1 function find() với 2 tham số  string là str1 và str2,
// gọi a là độ dài của str1 và b là độ dài của str2
// nếu a và b đều là số chẵn thì trả về a + b,
// nếu a và b đều là số lẻ thì trả về a - b,
// nếu a là chẵn và b là lẻ thì trả về a,
// nếu b là chẵn và a là lẻ thì trả về b

// find('hsdujsd', 'nnn23')
// find(' vcx', 'n3')
// find('3', 'adsad2341')


function find1(str1, str2) {
    // Tạo 2 biến hứng để chứa độ dài của 2 string
    var a = str1.length
    var b = str2.length
    // Tạo if và else if để kiểm tra a và b là số chẵn hay lẻ
    if(a % 2 == 0 && b % 2 == 0) { // kiểm tra a là số chẵn và b là số chẵn
        return a + b
    } else if(a % 2 != 0 && b % 2 != 0) { // kiểm tra a là số lẻ và b là số lẻ
        return a - b
    } else if(a % 2 == 0 && b % 2 != 0) { // kiểm tra a là số chẵn và b là số lẻ
        return a
    } else if(a % 2 != 0 && b % 2 == 0) { // kiểm tra là số lẻ và b là số chẵn
        return b
    }
}

var result24 = find1('hsdujsd', 'nnn23')
console.log(result24)
var result25 = find1(' vcx', 'n3')
console.log(result25)
var result26 = find1('3', 'adsad2341')
console.log(result26)


/*
cho 1 function find2() có 3 tham số a, b, c đều là number
kiểm tra a, b là số chẵn ; c là số lẻ thì trả về a + b
kiểm tra a, c chẵn; b là số lẻ thì trả về a + c
*/

    // function find2(a, b, c) {
    //     // Tạo if để kiểm tra a, b, c là số chẵn hay lẻ
    //     if(a % 2 == 0) { // a là số chẵn
    //         if(b % 2 == 0) { // b là số chẵn và a là số chẵn
    //             if(c % 2 != 0) { // c là số lẻ và a và b là số chẵn
    //                 return a + b
    //             }
    //         }
    //     } 
    //     if(a % 2 == 0) { // a là số chẵn
    //         if(c % 2 == 0) { // c là số chẵn và a là số chẵn
    //             if(b % 2 != 0) { // b là số lẻ và a,c là số chẵn
    //                 return a + c
    //             }   
    //         }
    //     }
    //     } 

    function find3(a, b, c) {
        // Tạo if để kiểm tra a, b, c là số chẵn hay lẻ
        if(a % 2 == 0) { // a là số chẵn
            if(b % 2 == 0) { // b là só chẵn và a là số chẵn
                if(c % 2 != 0) { // c là số lẻ và a, b là số chẵn
                    return a + b
                }
            } else { // b là số lẻ 
                if(c % 2 == 0) { // c là số chẵn và b là số lẻ
                    return a + c
                }
            }
        }
    }
var result27 = find3(6, 8, 1) // 14
console.log(result27)
var result28 = find3(13217648237, 1, 1231) // undefined
console.log(result28)
var result29 = find3(887, 51243, 123) // undefined
console.log(result29)



console.log('================================================================')

// cho 1 function update() với 2 tham số, array và index, 
// thay đổi giá trị value tại vị trí index thành -1 và trả về array

// arr1 = [1, 5, 1, 3, 13, 87]
// update(arr1, 3)
// arr2 = [1, 5, 1, 3, 13, 87]
// update(arr2, 9)

function update(array, index) {
    // Tạo for để duyệt tất cả index trong mảng
    for(let i = 0; i < array.length; i++) {
        // Tạo if để kiểm tra value trong mảng có bằng với value tại vị trí index hay không
        // array[i]
        if(i == index) { 
            // Thay số -1 vào value bằng với value tại vị trí index
            array.splice(i, 1, -1)
        }
    }
    return array
}

arr1 = [1, 5, 1, 3, 13, 87] // array.splice(3, 1, -1)
var result30 = update(arr1, 3)
console.log(result30)
arr2 = [1, 5, 1, 3, 13, 87]
var result31 = update(arr2, 9)
console.log(result31)

function update1(array, index) {
   var thayValue = array.splice(3, 1, -1)
    return thayValue
}

arr1 = [1, 5, 1, 3, 13, 87] // array.splice(3, 1, -1)
var result32 = update1(arr1, 3)
console.log(result32)
// arr2 = [1, 5, 1, 3, 13, 87]
// var result33 = update1(arr2, 9)
// console.log(result33)
console.log('-----------------------------------------------------------------')

// cho 1 function update() với tham số, là array,
// nếu độ dài của array là lẻ thì đổi value thành -1 tại index là chính giữa của array đó.
// nếu độ dài là số  chẵn thì thêm vào đầu của array -1
// và trả về array đó.
// arr1 = [1, 5, 1, 3, 13, 87]
// update(arr1)
// arr2 =  [1, 5, 1, 6 ,3, 13, 87]
// update(arr2)

function update1(array) {
    // Tạo biến để hứng độ dài của array
    var doDai = array.length
        // Tạo if để kiểm tra độ dài của mảng là số chẵn hay lẻ
            if(doDai % 2 != 0) {
                var tinhDodai = doDai % 2 + 2 // Biến tạm để hứng để kết quả tính index chính giữa
                // Thay -1 vào value của index chính giữa của mảng 
                array.splice(tinhDodai , 1, -1) 
            } else if(doDai % 2 == 0) {
                // Thêm -1 vào đầu mảng
                array.unshift(-1)
            }
            return array
        }

arr1 = [1, 5, 1, 3, 13, 87]
var result34 = update1(arr1)
console.log(result34)
arr2 =  [1, 5, 1, 6, 3, 13, 87]
var result35 = update1(arr2)
console.log(result35)