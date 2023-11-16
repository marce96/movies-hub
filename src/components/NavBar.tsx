import {
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  searchText: string;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch, searchText }: Props) => {
  const flexDirection = useBreakpointValue({
    base: "column",
    lg: "row",
  }) as any;

  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        align="center" // Align based on direction
        justify="space-between" // Justify based on direction
      >
        <Image src={logo} boxSize="60px" />
        <Text whiteSpace="nowrap">React App</Text>
        <SearchInput searchText={searchText} onSearch={onSearch} />
        {flexDirection == "row" && <ColorModeSwitch />}
      </Stack>
      {flexDirection == "column" && (
        <Stack marginY={2} direction="row" align="center" justify="end">
          <ColorModeSwitch />
        </Stack>
      )}
    </>
  );
};

export default NavBar;
