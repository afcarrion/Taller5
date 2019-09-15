var { defineSupportCode } = require("cucumber");
var { expect } = require("chai");

defineSupportCode(({ Given, When, Then }) => {
  Given("I go to losestudiantes home screen", () => {
    browser.url("/");
    if (browser.isVisible("button=Cerrar")) {
      browser.click("button=Cerrar");
    }
  });

  When("I open the login screen", () => {
    browser.waitForVisible("button=Ingresar", 6000);
    setTimeout(function() {
      browser.click("button=Ingresar");
    }, 3000);
    browser.click("button=Ingresar");
  });

  When("I fill a wrong email and password", () => {
    var cajaLogIn = browser.element(".cajaLogIn");

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys("wrongemail@example.com");

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys("123456789");
  });

  When("I try to login", () => {
    var cajaLogIn = browser.element(".cajaLogIn");
    cajaLogIn.element("button=Ingresar").click();
  });

  Then("I expect to not be able to login", () => {
    browser.waitForVisible(".aviso.alert.alert-danger", 6000);
  });

  When(/^I fill with (.*) and (.*)$/, (email, password) => {
    browser.waitForVisible(".cajaLogIn", 5000);
    var cajaLogIn = browser.element(".cajaLogIn");

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });

  Then("I expect to see {string}", error => {
    browser.waitForVisible(".aviso.alert.alert-danger", 5000);
    var alertText = browser.element(".aviso.alert.alert-danger").getText();
    expect(alertText).to.include(error);
  });

  Then("I want for home page", () => {
    browser.waitForVisible("#cuenta", 6000);
  });

  /** Registro en la pagina los estudiantes */
  When("I open the register screen", () => {
    browser.waitForVisible("button=Ingresar", 6000);
    setTimeout(function() {
      browser.click("button=Ingresar");
    }, 3000);
    browser.click("button=Ingresar");
  });

  When(
    /^I fill with (.*), (.*), (.*), (.*), (.*)$/,
    (nombre, apellido, correo, password, terminos) => {
      browser.waitForVisible(".cajaSignUp", 5000);
      var cajaSignUp = browser.element(".cajaSignUp");

      var nombreInput = cajaSignUp.element('input[name="nombre"]');
      nombreInput.click();
      nombreInput.keys(nombre);

      var apellidoInput = cajaSignUp.element('input[name="apellido"]');
      apellidoInput.click();
      apellidoInput.keys(apellido);

      var mailInput = cajaSignUp.element('input[name="correo"]');
      mailInput.click();
      mailInput.keys(correo);

      var passwordInput = cajaSignUp.element('input[name="password"]');
      passwordInput.click();
      passwordInput.keys(password);

      var selectPrograma = cajaSignUp.element('select[name="idPrograma"]');
      selectPrograma.selectByVisibleText("Lenguas y Cultura");

      if (terminos === "true") {
        var acceptInput = cajaSignUp.element('input[name="acepta"]');
        acceptInput.click();
      }
    }
  );

  When("I try to register", () => {
    browser.waitForVisible(".cajaSignUp", 5000);
    var cajaSignUp = browser.element(".cajaSignUp");
    cajaSignUp.element("button=Registrarse").click();
  });
});
