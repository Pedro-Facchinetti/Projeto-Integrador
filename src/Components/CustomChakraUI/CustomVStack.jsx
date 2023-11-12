import { VStack } from "@chakra-ui/react";

const CustomVStack = ({ children, ...rest }) => {
  return (
    <VStack
      flexDirection="row"
      border="1px solid #057765"
      borderRadius="md"
      p="4"
      {...rest}
      marginTop={2}
    >
      {children}
    </VStack>
  );
};

export default CustomVStack;
