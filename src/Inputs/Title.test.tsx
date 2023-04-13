import {render, screen} from '@testing-library/react';
import Title from './Title';

describe('Testing Title Component', ()=>{
	const title= 'Hello World';
	test('', () => {
		expect(true).toBe(true);
	});
	
	test('H1 text exists when passing level 1 and title ', async ()=>{
		render(<Title title={title} level={1} />);
		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
	} );
});