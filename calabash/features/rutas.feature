Feature: Abrir pantalla de rutas

  Scenario: Como un usuario quiero poder ver las diferentes rutas de la aplicacion
    Given I press "Paraderos" 
    When I press "Rutas"               
    #button to remove the splash screen
    And I wait for the "Rutas" view to appear  
    And I press "TRANSMILENIO"
    Then I go back

Scenario: Como un usuario quiero poder ver las diferentes rutas de la aplicacion
   Given I wait for 1 second
    When  I press "Rutas"
    And I wait for the "Rutas" view to appear          
    #button to remove the splash screen
    And I wait for the "Rutas" view to appear  
    And I see the text "URBANO"  
    And I press "URBANO"
    And I press "4"
    Then I should see "Ruta 4"


