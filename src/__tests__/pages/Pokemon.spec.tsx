import React from 'react';
import { render } from '@testing-library/react';
import Pokemon from '../../pages/Pokemon'
import { act } from 'react-dom/test-utils';



jest.mock('react-router-dom' , () => {
  return {
    Link: ({children}: {children: React.ReactNode}) => children,
    useRouteMatch: () => ({
      'pokemon': 'venusaur'
    })
  }
})

describe('Dashboard page', () => {
  it('should be able to render the Pokemon', () => {
    const { debug } = render( <Pokemon/> )

    act(() => debug())
    
    
  })
  
})