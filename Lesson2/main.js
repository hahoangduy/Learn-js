/*
    Chuỗi trong Javascript
    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên dùng cách nào? Lý do?
        - Kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết Code 
    5. Template string ES6
    */

        // var fullName = 'Hoang Duy'; // Cách 1
        // var fullName = new String('Ha Hoang Duy'); // Cách 2
        // console.log(fullName);

        // var fullName = 'Hoang Duy dang hoc \'code\'';
        // console.log(fullName);

        // var fullName = 'Hoang Duy';
        // console.log(fullName.length); // Dùng để kiểm tra độ dài chuỗi

        // var firstName = 'Duy';
        // var lastName = 'Hoang';
        // console.log(`Toi la : ${firstName} ${lastName}`)

        //==================================================================================//

        // Làm việc với chuỗi

            var myString = '     Ha Hoang Duy     ';

        // 1. Length
        // console.log(myString.length);
        
        // 2. Find index
        // console.log(myString.indexOf('Duy'))
        // console.log(myString.search('Ha'))

        // 3. Cut string
        // console.log(myString.slice(3, 9))

        // 4. Replace
        // console.log(myString.replace('Duy', 'Duc'))

        //5. Convert to upper case
        // console.log(myString.toUpperCase())

        //6. Convert to lower case
        // console.log(myString.toLowerCase())

        //7. Trim
        //  console.log(myString.trim())

        //8.Split
        // var languages = 'JS, PHP, Ruby';

        // console.log(languages.split(','))

        //9. Get a character by index
        const myString2 = 'Hoang Duy';

        console.log(myString2.charAt(6))

        //=================================================================================//

    /*
    Kiểu số (Number) trong Javascript

    1. Tạo giá trị Number
        - Các cách tạo
        - Dùng cách nào? Tại sao?
        - Kiểm tra data type
    2. Làm việc với Numbet
        - To String
        - To Fixed
    */
        var age = 16;                       // Cách 1
        var PI = 3.14;

        var otherNumber = new Number(9);    // Cách 2

        console.log(typeof otherNumber);

        var result = 20 / 5;
        console.log(result )

    /*
    Mảng trong Javascript - Array

    1. Tạo mảng
        - Các tạo mảng
        - Sử dụng cách nào? Tại sao?
        - Kiểm tra data type?
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
    */
        var languages = [
            'Javascript',
            'PHP',
            'Ruby',
        ];
        languages.join
        console.log('===========================================================')
        console.log(languages[1]);
        // console.log(Array.isArray(languages));
        // console.log(languages.length)
        // console.log(languages[0]) // Lấy value của index được chọn

        // function isNumber(value) {
        //     var a = typeof value
        //     if(a == 'number') {
        //         return true
        //     }
        //         return false
        // }
        
        
        
        
        // // Expected results:
        // console.log(isNumber(999)); // true
        // console.log(isNumber('abc')); // false
        // console.log(isNumber('100')); // false

        // var a = 10;
        // var b = 5;
        // var c

        // c = a
        // a = b
        // b = c
       
        // console.log(a);
        // console.log(b);


        /*
            Làm việc với Array

            1. To string
            2. Join
            3. Pop
            4. Push
            5. Shift
            6. Unshift
            7. Splicing
            8. Concat
            9. Slicing
            */

            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.toString()) // Chuyển kiểu dữ liệu của array trên thành string
            

            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.join(' - ')) // Dùng để nối 1 mảng + 1 kí tự thành 1 chuỗi


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.pop()) // Xóa element cuối mảng và trả về phần tử đã xóa 
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.push('Dart', 'Java')) // Thêm 1 hoặc nhiều element vào cuối mảng và trả về độ dài mới của mảng
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.shift()) // Xóa element đầu của mảng và trả về phần tử đã xóa
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.unshift('Dart')) // Thêm 1 hoặc nhiều element vào đầu mảng và trả về độ dài mới của mảng
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            
            languages.splice(1, 0, 'Dart')
            console.log(languages) // Dùng để xóa và chèn phần tử mới vào mảng


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];

            var languages2 = [
                'Dart',
                'Java',
            ];
            console.log(languages.concat(languages2)) // Dùng để nối Array


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.slice(1)) // Dùng để cắt toàn bộ hoặc 1 vài element của mảng


            // Object trong Javascript 

            var myInfo = {
                name: 'Hoang Duy',
                age: '16',
                Address: 'Dak Mil',
                getName: function() {
                    return this.name;
                }
            };

            console.log(myInfo.getName());
            // myInfo.email = 'hoangduy@gmail.com' // cách thêm 1 key vào biến
            // console.log(myInfo)

            // delete myInfo.name; // xóa key trong biến
            // delete myInfo.age;


            // Object constructor

            function User(firstName, lastName, avatar) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.avatar = avatar;

                this.getName = function() {
                    return `${this.firstName} ${this.lastName}`
                }
            };

            var author = new User('Hoang', 'Duc', 'Avatar');
            var user = new User('Hoang', 'Duy', 'Avatar');

            author.title = 'Huong dan hoc JS';
            author.title = 'Huong dan hoc JS';
            user.comment = 'Dang hoc JS';

            console.log(author);
            console.log(user);


            /*
            Object prototype - Basic

            1. Prototype là gì ?
            2. Sử dụng khi nào ?
            */

            function User(firstName, lastName, avatar) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.avatar = avatar;

                this.getName = function() {
                    return `${this.firstName} ${this.lastName}`
                }
            };

            var author = new User('Hoang', 'Duc', 'Avatar');
            var user = new User('Hoang', 'Duy', 'Avatar');

            author.title = 'Huong dan hoc JS';
            author.title = 'Huong dan hoc JS';
            user.comment = 'Dang hoc JS';

            console.log(author);
            console.log(user);

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
             
             // Ví dụ khi sử dụng
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
                //text = 1000 Mazda - + (array[2] + ' - ') => 1000 Mazda - Mercedes -
                 
               

                // i = 1, 1 <= 3 (true), i++
                // i = 2, 2 <= 3 (true), i++
                // i = 3, 3 <= 3 (true) => bug , i++
               
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



// cho 1 function getElement(), với 3 tham số  array, number1, number2. 
// lấy giá trị của array tại vị trí number1, so sánh giá trị vừa tìm được với number2,
// nếu chúng bằng nhau trả về  true, nếu không trả về false.


// arr1 = [3,1,63,65,7, 213, 4, 123]
// getElement(arr1, 2, 2)
// getElement(arr1, 6, 4)
// getElement(arr1, 4, 4)


    function getElement(array, so1, so2) {
        var timGiatri = array[so1]
        if(timGiatri == so2) {
            return true
        } else {
            return false
        }
    };

    arr1 = [3,1,63,65,7, 213, 4, 123]
    var result1 = getElement(arr1, 2, 2)
    console.log(result1)
    var result2 = getElement(arr1, 6, 4)
    console.log(result2)
    var result3 = getElement(arr1, 4, 4)
    console.log(result3)