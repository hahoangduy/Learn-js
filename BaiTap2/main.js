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




// Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
// – Phí thuê bao bắt buộc là 25 nghìn.
// – 600 đồng cho mỗi gọi của 50 phút đầu tiên.
// – 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// – 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.

// số phút 100 -> output = 75000 (30000 + 20000)
// số phút 250 -> output = 125000 (30000 + 60000 + 10000)

