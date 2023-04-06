class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method='post' action='${this.action}' >
      ${this.controls.reduce(
        (acc, current) =>
          acc +
          `<div>
            ${this.getLabel(current)}
            ${this.getInput(current)}
          </div> `,
        ""
      )} 
      <button type='submit' >Enviar</button>
    </form>`;
  }

  getLabel(control) {
    return `<label>${control.text}:</label>`;
  }

  getInput(control) {
    return `<input type='${control.type}' id='${control.name}' />`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.controls = [];
    this.action = "";
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({ name: name, text: text, type: "text" });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({ name: name, text: text, type: "email" });
    return this;
  }

  setCheckBox(name, text) {
    this.controls.push({ name: name, text: text, type: "checkbox" });
    return this;
  }

  setColor(name, text) {
    this.controls.push({ name: name, text: text, type: "color" });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

// director
class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText("firstName", "Nombre")
      .setText("lastName", "Apellido");
  }

  createContactForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText("firstName", "Nombre Interesado")
      .setEmail("email", "Correo electrónico")
      .setText("message", "Mensaje");
  }
}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder
  .setAction("add.php")
  .setText("firstName", "Nombre")
  .setText("lastName", "Apellido")
  .setCheckBox("drinker", "Eres bebedor?")
  .setColor("favoriteColor", "Color favorito")
  .build();

form1.innerHTML = formPeople.getContent();

const formMail = frmBuilder
  .setAction("send.php")
  .setText("name", "Nombre")
  .setEmail("email", "Correo electrónico")
  .build();

form2.innerHTML = formMail.getContent();

const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();

director.createPeopleForm();
form4.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();
