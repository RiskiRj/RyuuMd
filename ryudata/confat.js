// Edit Kalau Tidak Sesuai

// Message Salah Command
exports.wrongFormat = (prefix) => {
    return `Format Salah ❎ Silakan Cek Cara Penggunaan Di *${prefix}allmenu*`
}

// Message Salah Url
exports.notNum = (q) => {
    return `"${q}", Bukan Angka!`
}

// Message Saat Fitur Error
exports.fiturError = () => {
    return `⚠️ Fitur Sedang Error`
}

// Message Sukses Menambahkan User Ke Grup
exports.addUser =() => {
	return `Sukses Menambahkan User Ke Grup ☑️`
}

// Message Sukses Kick User Dari Grup
exports.kickUser =() => {
	return `Sukses Kick User Dari Grup ☑️`
}

// Message Promote User
exports.proMote =() => {
	return `Sukses Menaikkan Jabatan User ☑️`
}

// Message Demote User
exports.deMote =() => {
	return `Sukses Menurunkan Jabatan User ☑️`
}

// Message Ubah Nama Grup
exports.namaGrup =(text) => {
	return `Sukses Mengubah Nama Group Menjadi ${text} ☑️`
}

// Message Ephermal On
exports.epOn =() => {
	return `Sukses Menghidupkan Ephermal/Pesan Sementara Di Group Ini ☑️`
}

// Message Ephermal Off
exports.epOff =() => {
	return `Sukses Menonaktifkan Ephermal/Pesan Sementara Di Group Ini ☑️`
}