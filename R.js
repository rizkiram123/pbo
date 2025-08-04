// function sapa () {
//     return {
//         name: 'sapa',
//         version: '1.0.0',
//         description: 'A simple JavaScript library for building user interfaces.',
//     }
// }

// sapa()

// function tambah (a, b) {
//     return a + b;
// }

// let hasil = tambah(5, 3);
// console.log("hasil:" + hasil);

// let car = {
//     nama: "Toyota",
//     model: "Corolla",
//     weight: 1500,
//     color: "Merah",
//     year: 2020,

//     start: function() {
//         console.log("Mobil dimulai");
//     },
//     drive: function() {
//         console.log("Mobil berjalan");
//     },
//     brake: function() {
//         console.log("Mobil mengerem");
//     },
//     stop: function() {
//         console.log("Mobil dimatikan");
//     },

// };
//     console.log (car.nama);
//     console.log (car.model);
//     console.log (car.weight);
//     console.log (car.color);
//     console.log (car.year);

//     car.start();
//     car.drive();
//     car.brake();
//     car.stop();


//     let byc = {
//     nama: "Polygon",
//     jumgi: 21,
//     warna: "Merah",
    
//     start: function() {
//         console.log("Sepeda di gayuh");
//     },
//     drive: function() {
//         console.log("sepeda berjalan");
//     },
//     brake: function() {
//         console.log("sepeda mengerem");
//     },
//     stop: function() {
//         console.log("sepeda berenti");
//     },

// };
//     console.log (byc.nama);
//     console.log (byc.jumgi);
//     console.log (byc.warna);
   

//     byc.start();
//     byc.drive();
//     byc.brake();
//     byc.stop();

// function car(name, model, weight, color, year) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.color = color;
//     this.year = year;

//     this.start = function() {
//         console.log(`${this.name} Mobil dimulai`);
//     };
//     this.drive = function() {
//         console.log(`${this.name} Mobil berjalan`);
//     };
//     this.brake = function() {
//         console.log(`${this.name} Mobil mengerem`);
//     };
//     this.stop = function() {
//         console.log(`${this.name} Mobil dimatikan`);
//     };
// }

// let car1 = new car("Toyota", "Corolla", 1500, "Merah", "100kg");
// let car2 = new car("Honda", "Civic", 1400, "Biru", "100kg");

// car1.start();
// car1.drive();   
// car1.brake();
// car1.stop();

// class byc {
//     constructor(nama, jumgi, warna) {
//         this.nama = nama;
//         this.jumgi = jumgi;
//         this.warna = warna;
//     }

//     start() {
//         console.log(`${this.nama} sepeda di gayuh`);
//     }
    
//     drive() {
//         console.log(`${this.nama} sepeda berjalan`);
//     }
    
//     brake() {
//         console.log(`${this.nama} sepeda mengerem`);
//     }
    
//     stop() {
//         console.log(`${this.nama} sepeda berenti`);
//     }
// }

// let byc1 = new byc("Polygon", 21, "Merah");
// byc1.start();

class Student {
    constructor(nama, nim, jurusan, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.nama}, NIM: ${this.nim}, jurusan ${this.jurusan}, angkatan ${this.angkatan}.`);
    }

    isSenior() {
        if (this.angkatan < 2025) {
            console.log(`${this.nama} adalah mahasiswa senior.`);
        } else {
            console.log(`${this.nama} adalah mahasiswa baru.`);
        }
    }

    displayInfo() {
        console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}`);
    }
}

// Membuat objek student
let student1 = new Student("iki", "123456", "Teknik Informatika", 2020);
let student2 = new Student("ncoyy", "654321", "Sistem Informasi", 2025);

// Memanggil method
student1.introduce();
student2.introduce();

student1.isSenior();
student2.isSenior();

student1.displayInfo();
student2.displayInfo();