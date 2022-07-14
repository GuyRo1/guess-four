import { fireEvent, render, screen } from '@testing-library/react';
import GuessFour from './GuessFour'

test('renders Guess four and press one twice', () => {
    render(<GuessFour />)
    fireEvent.keyUp(document, { key: 1 })
    fireEvent.keyUp(document, { key: 1 })
    const ones = screen.getAllByText('1')
    expect(ones.length).toBe(2);
});

test('render Gues four and press 500 times on letters and twice on one',()=>{
    render(<GuessFour/>)
    fireEvent.keyUp(document, { key: 1 })
    for(let i=0;i<500;i++){
        fireEvent.keyUp(document, { key: 'A' })
    }
    fireEvent.keyUp(document, { key: '1' })
    const ones = screen.getAllByText('1')
    expect(ones.length).toBe(2);
})


