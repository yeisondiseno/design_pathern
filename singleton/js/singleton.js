class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    this.random = Math.random();

    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

// const singleton = new Singleton();
// const singleton2 = new Singleton();
// const singleton3 = Singleton.getInstance();
// console.log(singleton.random);
// console.log(singleton2.random);
// console.log(singleton3.random);
// console.log(singleton === singleton2);
// console.log(singleton3 === singleton2);

class WeekDays {
  dayEs = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Doming",
  ];

  dayEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === "es" ? this.dayEs : this.dayEn;
  }
}

const weekDays = new WeekDays("es");
const weekDays2 = new WeekDays("en");

console.log(weekDays.getDays());
console.log(weekDays2.getDays());
