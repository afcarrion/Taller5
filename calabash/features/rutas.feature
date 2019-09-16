Feature: Abrir pantalla de rutas

  Scenario: Como un usuario quiero poder ver las diferentes rutas de la aplicacion
    Given I press "Paraderos" 
    When I press "Rutas"               
    And I wait for the "Rutas" view to appear  
    And I press "TRANSMILENIO"
    Then I go back

Scenario: Como un usuario quiero poder entrar a la ruta 4
   Given I wait for 1 second
    When  I press "Rutas"
    And I wait for the "Rutas" view to appear           
    And I see the text "URBANO"  
    And I press "URBANO"
    And I press "4"
    Then I should see "Ruta 4"

Scenario: Como usuario quiero buscar una ruta
    Given  I press "Paraderos"
    When  I press "Rutas" 
    Then I wait for the "Buscar" view to appear
    When  I press "Buscar"
    Then I enter input "alcala"
    And I press the enter button
    Then I see the text "Estación Alcala >> Colina"
    Then I go back


