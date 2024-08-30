// Soal no 1

class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode di bawah ini
  
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur)
      this.namaSekolah = namaSekolah;
    }
  
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
  
    }
  
  }
  let pelajar = new Pelajar ("Terra", 17, "skilvul")
  console.log(pelajar.nama)
  console.log(pelajar.belajar())
  console.log(pelajar.tidur())
  console.log(pelajar.makan())
  console.log(pelajar)

//   batas

// soal no 2

class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  
  // Buat kode kamu di bawah ini
  
  class Harimau extends Hewan{
    constructor(nama){
    super(nama);
  
  }
  makan() {
    return `${this.nama} makan daging`;
  }
  }
  let harimuSumatra = new Harimau ("Harimau Sumatra")
  console.log(harimuSumatra.makan())
  console.log(harimuSumatra)
//   batas

// gambar1 
class Vehicle{
  constructor(brand){
    this.brand = brand
  }
  start(){
    return`${this.brand} Vehicle is starting`
  }
}
class Car extends Vehicle{
  constructor (model, brand){
    super (brand)
    this.model = model
  }
  start(){
    return`${this.model} car is starting` 
  }
}

const Mobil = new Car("Wuling")
console.log(Mobil.start());

// gambar2
class Shape{
  draw() {
    return`drawing Shape`
  }
}

class Rectangle extends Shape{
    draw() {
      return `drawing Rectangle`
    }
}

const Shape1 = new Rectangle()
console.log(Shape1.draw());

// gambar3
class Person{
  constructor (name,){
    this.name = name
  }

  introduce(){
    return`Hi my mane is ${this.name}`
  }
}
 class Employee extends Person{
  constructor(name, position){
    super(name)
      this.position
  }

  introduce(){
    return `Hi my mane is ilyas and i am an ${this.position}`
  }
}

class Manager extends Employee{
  introduce(){
    return`Hi my mane is ilyas${this.name}, i am an ${this.position}, and i manage a team`
  }
}

const Orang2 = new Person("ilyas")
console.log(Orang2.introduce());

const Azka = new Employee("ilyas", "ustadz")
console.log(Azka.introduce());

const Hammam = new Manager ("ilyas", "ustadz")
console.log(Hammam.introduce());
