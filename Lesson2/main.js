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

        console.log(languages);
        // console.log(Array.isArray(languages));
        // console.log(languages.length)
        // console.log(languages[0])

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
            console.log(languages.toString())
            

            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.join(' - '))


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.pop()) // Xóa elenment cuối mảng và trả về phần tử đã xóa 
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.push('Dart', 'Java')) // Thêm element vào cuối mảng
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.shift()) // Xóa element đầu của mảng
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.unshift('Dart')) // Thêm element vào đầu mảng
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            
            languages.splice(1, 0, 'Dart')
            console.log(languages)


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];

            var languages2 = [
                'Dart',
                'Java',
            ];
            console.log(languages.concat(languages2))


            var languages = [
                'Javascript',
                'PHP',
                'Ruby',
            ];
            console.log(languages.slice(1))


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