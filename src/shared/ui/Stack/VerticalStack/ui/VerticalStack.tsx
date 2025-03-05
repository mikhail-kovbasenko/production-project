import Flex, { FlexProps } from '../../Flex/ui/Flex';

type VerticalStackProps = Omit<FlexProps, 'direction'>

function VerticalStack(props: VerticalStackProps) {
  const { align = 'start' } = props;
  return (
    <Flex {...props} direction="column" align={align} />
  );
}

export default VerticalStack;
