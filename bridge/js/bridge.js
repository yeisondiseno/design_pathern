class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str
      .split(/\./g)
      .reduce((acc, current) => acc + `<p>${current.trim()}</p>`, "");
  }

  decode(str) {
    return str
      .split("</p>")
      .reduce(
        (acc, current) =>
          current !== "" ? acc + current.replace("<p>", "") + ". " : acc + "",
        ""
      );
  }
}

// implement
const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("Pato largo"));
console.log(encoder1.decode("UGF0byBsYXJnbw=="));
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode("Este es un texto muy largo. aquí va otro"));
console.log(
  encoder2.decode("<p>Este es un texto muy largo</p><p>aquí va otro</p>")
);
