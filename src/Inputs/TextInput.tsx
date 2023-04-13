import {Checkbox, CheckboxProps} from '@mantine/core';
import Title from '@/Inputs/Title';

interface CheckProps {
 label : string,
 mainLabel?: string,
 color?: CheckboxProps["color"]
}

const CheckBoxInput = ({
 label,
 mainLabel,
 color
}: CheckProps) => {

 return (<div>
  {mainLabel && <Title title='label'/> }
     <Checkbox label={label} color={color} />
 </div>);

};

export default CheckBoxInput;

export type { CheckProps };