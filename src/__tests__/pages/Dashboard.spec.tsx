import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard'
import { act } from 'react-dom/test-utils';


jest.mock('react-router-dom' , () => {
  return {
    Link: ({children}: {children: React.ReactNode}) => children,
  }
})




describe('Dashboard page', () => {
  it('should be able to render the Dashboard', () => {
    const { debug } = render( <Dashboard/> )
    act(() => debug())
    
  })
})