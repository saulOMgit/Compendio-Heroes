import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate=jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}));

describe('Pruebas en <Navbar/>', () => { 
    const contexValue={
        logged:true,
        user:{
            name:'Saul'
        },
        logout:jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => { 
        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Saul')).toBeTruthy();

     });

     test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 
        render(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn=screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contexValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login",{"replace":true});

     });
 });