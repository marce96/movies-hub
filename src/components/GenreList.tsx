import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { MdLocalMovies } from "react-icons/md";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { colorMode } = useColorMode();
  // Define background colors for light and dark modes
  const bgColor = { light: "gray.800", dark: "gray.300" }; // Change these colors as needed
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" textAlign="left" marginY={3}>
        Genres
      </Heading>
      <List>
        {!data.length && !isLoading && <span>No data.</span>}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <MdLocalMovies
                color={bgColor[colorMode]}
                style={{ fontSize: "1.3em" }}
              />
              <Button
                color={
                  genre.id === selectedGenre?.id
                    ? "orange.300"
                    : bgColor[colorMode]
                }
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="md"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
