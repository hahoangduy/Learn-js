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

        var a = 10;
        var b = 5;
        var c

        c = a
        a = b
        b = c
       
        console.log(a);
        console.log(b);
