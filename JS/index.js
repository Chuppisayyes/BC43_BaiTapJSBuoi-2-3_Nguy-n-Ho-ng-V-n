// Bài 1
function tinhTienLuong(){
    /* input: tienLuongMotNgay: number, soNgayLam: number */  
debugger
var tienLuongMotNgay = document.getElementById('tienLuongMotNgay').value;
var soNgayLam = document.getElementById('soNgayLam').value;
// Output: tienLuongNhanVien: number
var tienLuongNhanVien = 0;
// Process:
tienLuongNhanVien = tienLuongMotNgay * soNgayLam;
document.getElementById('tienLuongNhanVien').innerHTML = tienLuongNhanVien .toLocaleString();
}
// Bài 2
function tinhGiaTriTrungBinh(){
    // input: soA: number, soB: number, soC: number, soD: number, soE: number,
    var soA = document.getElementById('soA').value;
    var soB = document.getElementById('soB').value;
    var soC = document.getElementById('soC').value;
    var soD = document.getElementById('soD').value;
    var soE = document.getElementById('soE').value;
    // output: giaTriTrungBinh
    var giaTriTrungBinh = 0;
    // process:
    giaTriTrungBinh = (soA*1 + soB*1 + soC*1 + soD*1 + soE*1) /5;
    document.getElementById('giaTriTrungBinh').innerHTML = giaTriTrungBinh.toFixed(2);
}
// Bài 3
function quyDoiTien(){
    /* input: usdPrice: number; soTienUsd: number*/ 
    const usdPrice = 23500;
    var soTienUsd = document.getElementById('soTienUsd').value;
    // Output: soTienQuyDoiSangVND;
    var soTienQuyDoiSangVND = 0;
    // Process:
    soTienQuyDoiSangVND = usdPrice * (soTienUsd*1);
    document.getElementById('soTienQuyDoiSangVND').innerHTML = new Intl.NumberFormat('vn-VN').format(soTienQuyDoiSangVND);
}
// Bài 4
function tinhDienTichChuViHCN(){
    // Input: chieuDai:number, chieuRong:nuumber
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    // Output: chuVi:number, dienTich:number
    var Chuvi = 0;
    var dienTich = 0;
    // Process:
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai*1 + chieuRong*1) * 2;
    document.getElementById('dienTich').innerHTML = dienTich.toFixed(2);
    document.getElementById('chuVi').innerHTML = chuVi.toFixed(2);
}
// Bài 5
function tinhTongHaiKySo(){
    // Input: var soCanTinh: number, soHangDonVi: number, soHangChuc: number
    var soCanTinh = document.getElementById('soCanTinh').value;
    var soHangDonVi = 0;
    var soHangChuc = 0;
    // Output: dapso:number
    var dapSo = 0;
    // Process:
    soHangDonVi = soCanTinh % 10;
    soHangChuc = (soCanTinh*1- soHangDonVi*1) / 10;
    dapSo = soHangDonVi*1 + soHangChuc*1;
    document.getElementById('dapSo').innerHTML = dapSo.toFixed(2);
}
