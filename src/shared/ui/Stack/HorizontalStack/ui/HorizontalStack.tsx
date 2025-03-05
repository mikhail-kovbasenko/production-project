import Flex, { FlexProps } from '../../Flex/ui/Flex';

type HorizontalStackProps = Omit<FlexProps, 'direction'>

function HorizontalStack(props: HorizontalStackProps) {
  return (
    <Flex {...props} direction="row" />
  );
}

export default HorizontalStack;
