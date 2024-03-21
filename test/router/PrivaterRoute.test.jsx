import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import {PrivateRoute} from '../../src/router/PrivateRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';


describe('Pruebas en el <PrivateRoute/>', () => { 
    
    test('deber de mostrar el children si esta autenticado', () => { 

        Storage.prototype.setItem=jest.fn();

        const contextValue={
            logged:true,
            user:{
                id:'abc',
                name:"Juan"
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
                
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman');

     });
 })