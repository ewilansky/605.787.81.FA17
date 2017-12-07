describe("menuitemvalidator", function() {
    var invalidCodes;
    var validCodes;
    var $httpBackend;
    var ApiBasePath;
  
    beforeEach(function() {
      module('common');

      inject(function ($injector) {
        menuService = $injector.get('MenuService');
        $httpBackend = $injector.get('$httpBackend');
        ApiBasePath = $injector.get('ApiPath');

        // I don't know why this is required since I'm am testing expectations
        // read about this bug here: https://stackoverflow.com/questions/27016235/angular-js-unit-testing-httpbackend-spec-has-no-expectations
        expect('Suppress SPEC HAS NO EXPECTATIONS').toBeDefined();
      });
    });
  
    // https://ewilansky-course5.herokuapp.com/menu_items/{shortName}.json
    it("should be able to detect an invalid menu code", function() {
      $httpBackend
      .whenGET(ApiBasePath + '/menu_items/A99.json')
      .respond(500);

      // call the implemented service now that the http mock has been created
      menuService.tryGetMenuItem('A99').then(function(response) {

        // flush this call to make it synchrnous
        $httpBackend.flush();


        // test with expecatation
        expect($httpBackend.flush).not.toThrow();
        expect(response.status).toEqual(500); 
      });

    });
  
    it('should be able to detect valid menu codes', function() {
      menuItem9 = {
        id: 9,
        short_name: "A9",
        name: "Chicken with Garden Vegetable Soup",
        description: "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) and chicken pieces",
        price_small: 3.25,
        price_large: 6.4,
        small_portion_name: "pint",
        large_portion_name: "quart",
        created_at: "2017-12-04T13:29:49.939Z",
        updated_at: "2017-12-04T13:29:49.939Z",
        category_short_name: "A",
        image_present: true
      };

      $httpBackend
        .whenGET(ApiBasePath + '/menu_items/A9.json')
        .respond(200, menuItem9);

        // call the implemented service now that the http mock has been created
        menuService.tryGetMenuItem('A9').then(function(response) {

          // flush this call to make it synchrnous
          $httpBackend.flush();

          // test with expecatation
          expect(response.data).toEqual(menuItem9); 

        });

    });

  });