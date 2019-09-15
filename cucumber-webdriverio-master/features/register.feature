Feature: Register into losestudiantes
    As a user I want to register with an account on the page losestudiantes.co

Scenario Outline: Register Failed with wrong inputs

Given I go to losestudiantes home screen
    When I open the register screen
    And I fill with <nombre>, <apellido>, <correo>, <password>, <terminos>
    And I try to register
    Then I expect to see <error>

    Examples:
      | nombre            | apellido            | correo               | password | terminos | error                  |
      | Primer Nombre     | Primer apellido     |                      |          |  true    |  Ingresa tu correo     |
      | Primer Nombre     | Primer apellido     | prueba@uniandes.edu  |          |  true    | Ingresa una contraseña |
      | Primer Nombre     | Primer apellido     | prueba@uniandes.edu  | 123456789|  false    | Debes aceptar los términos y condiciones |