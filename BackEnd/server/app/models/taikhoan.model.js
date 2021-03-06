const mongoose = require('mongoose')

const TaikhoanSchema = mongoose.Schema({
    username: String,
    password: String,
    soCMND: String,
    ngCapCMND: Date,
    hTen: String,
    ngSinh: Date,
    danToc: String,
    gioiTinh: String,
    anh34: String,
    SDT: String,
    noiSinh: String,
    diaChi: String,
    email: String,
    loai: String,
    tinhTrang: Intl,
    tgDangKy: Date,
    maXacNhan: String
}, {
    timestamps: true
})

module.exports = mongoose.model('taikhoan', TaikhoanSchema)