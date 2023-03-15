interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T) {
    this.observers.forEach((obs) => {
      obs.refresh(value);
    });
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((number) => {
  console.log(`Hola ${number}`);
});

const obs2 = new Observer<number>((number) => {
  console.log(`Hi ${number}`);
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();
const obs1String = new Observer<string>((string) => {
  console.log(string.toUpperCase());
});
const obs2String = new Observer<string>((string) => {
  console.log(string.toLowerCase());
});

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify("Yeison");
subjectString.notify("Apellido");
