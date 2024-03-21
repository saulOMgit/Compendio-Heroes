import {types} from '../../../src/auth/'

describe('Pruebas en "Types.js', () => { 
    
    test('debe de regresar esos types', () => { 
        
        expect(types).toEqual({            
            login:'[Auth] Login',
            logout: '[Auth] Logout' 
        })
     });
 })