// cho 1 function, find() có 1 tham số  là tháng,
// nhập 1 số bất kì và trả về số ngày trong tháng đó. 
// vd: tháng 7 là 31 ngày. nếu k có tháng tồn tại trả về  -1

function find(thang) {
    if(thang == 1) {
        return '31 ngày'
    } else if(thang == 2) {
        return '30 ngày'
    } else if(thang == 3) {
        return '31 ngày'
    } else if(thang == 4) {
        return '30 ngày'
    } else if(thang == 5) {
        return '31 ngày'
    } else if(thang == 6) {
        return '30 ngày'
    } else if(thang == 7) {
        return '31 ngày'
    } else if(thang == 8) {
        return '31 ngày'
    } else if(thang == 9) {
        return '30 ngày'
    } else if(thang == 10) {
        return '31 ngày'
    } else if(thang == 11) {
        return '30 ngày'
    } else if(thang == 12) {
        return '31 ngày'
    } else {
        return -1
    }
}

var result = find(8)
console.log(result)




// Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
// – Phí thuê bao bắt buộc là 25 nghìn.
// – 600 đồng cho mỗi gọi của 50 phút đầu tiên.
// – 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// – 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.

