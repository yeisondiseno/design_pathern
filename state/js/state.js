class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedSate {
  write(documentContext, text) {
    console.log("Documento aprobado ya no se modifica");
  }
}

const doc = new DocumentContext();
console.log(doc.state);
doc.write("Pato");
console.log(doc.content);
console.log(doc.state);
doc.write("Algo");
doc.write("Más");
console.log(doc.content);

doc.setState(new ApprovedSate());
console.log(doc.state);
doc.write("Nuevo");
console.log(doc.content);

doc.setState(new WithContentState());
console.log(doc.state);
doc.write("Modificado");
console.log(doc.content);
