import { Heading } from "@chakra-ui/react";

interface Props {
  heading: string;
}
const MovieHeading = ({ heading }: Props) => {
  return (
    <Heading marginY={3} fontSize={25}>
      {heading}
    </Heading>
  );
};

export default MovieHeading;
