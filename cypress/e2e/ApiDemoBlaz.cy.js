describe('Pruebas de servicios REST en Demoblaze', () => {
  
    // 1 Crear un nuevo usuario
    it('Crear un nuevo usuario en signup', () => {
      const nuevoUsuario = {
        username: `user_${Math.random().toString(36).substring(2, 10)}`,
        password: `pass_${Math.random().toString(36).substring(2, 10)}`
      };
      
      cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/signup',
        body: {
          username: nuevoUsuario.username,
          password: nuevoUsuario.password
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Usuario creado:', nuevoUsuario);
      });
    });
  
    // 2 Intentar crear un usuario ya existente
    it('Intentar crear un usuario que ya existe', () => {
      const usuarioExistente = {
        username: 'usuarioExistente',
        password: 'password123'
      };
      
      cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/signup',
        body: {
          username: usuarioExistente.username,
          password: usuarioExistente.password
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.be.oneOf([400, 409]);
        cy.log(response.body);
      });
    });
  
    // 3 Con credenciales correctas
    it('Login con usuario y password correctos', () => {
      const credencialesCorrectas = {
        username: 'usuarioExistente',
        password: 'passwordCorrecta'
      };
      
      cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/login',
        body: {
          username: credencialesCorrectas.username,
          password: credencialesCorrectas.password
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
      });
    });
  
    // 4 Con credenciales incorrectas
    it('Login con usuario y password incorrectos', () => {
      const credencialesIncorrectas = {
        username: 'usuarioExistente',
        password: 'passwordIncorrecta'
      };
      
      cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/login',
        body: {
          username: credencialesIncorrectas.username,
          password: credencialesIncorrectas.password
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401); 
        cy.log(response.body);
      });
    });
  
  });
  