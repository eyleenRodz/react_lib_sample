import {memo} from 'react';

interface TitleProps {
 title : string,
 level?: number,
 color?: string
}

const Title = memo( function Title({title, level}:TitleProps): JSX.Element {
	switch (level) {
	case 2:
		return <h2> Hello world the title : {title}</h2>;
	case 3:
		return <h3>{title}</h3>;
	case 4:
		return <h4>{title}</h4>;
	case 5:
		return <h5>{title}</h5>;
	case 6:
		return <h6>{title}</h6>;
	default:
		return <h1>{title}</h1>;
	}
});

export default Title;
export type { TitleProps };
