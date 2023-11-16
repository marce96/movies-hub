import { Movie } from "../hooks/useMovies";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import noImage from "../assets/No-Image-Placeholder.png";
import { useEffect, useRef, useState } from "react";
import GenreLabel from "./GenreLabel";

interface Props {
  movie: Movie;
}
const MoviesCard = ({ movie }: Props) => {
  const { colorMode } = useColorMode();
  // Define background colors for light and dark modes
  const bgColor = { light: "gray.800", dark: "gray.900" }; // Change these colors as needed

  const poster = "http://image.tmdb.org/t/p/w500" + movie.backdrop_path;
  const imageUrl = !!movie.backdrop_path ? poster : noImage;
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [isTooltipOverviewOpen, setTooltipOverviewOpen] = useState(false);

  const [headingOverflow, setHeadingOverflow] = useState(false);
  const [overviewOverflow, setOverviewOverflow] = useState(false);

  const headingRef = useRef(null);
  const overviewRef = useRef(null);

  const headingOverflowText = () => {
    const headingElement = headingRef.current as any;
    if (headingElement) {
      // Check if the text overflows and set tooltip state accordingly
      const result: boolean =
        headingElement.scrollWidth > headingElement.clientWidth;
      setHeadingOverflow(result);
    }
  };

  const overviewOverflowText = () => {
    const overviewElement = overviewRef.current as any;
    if (overviewElement) {
      // Check if the text overflows and set tooltip state accordingly
      const result: boolean =
        overviewElement.scrollWidth > overviewElement.clientWidth;

      setOverviewOverflow(result);
    }
  };
  useEffect(() => {
    headingOverflowText();
    overviewOverflowText();
  }, [movie.title, movie.overview]);

  return (
    <Card height="100%" bg={bgColor[colorMode]}>
      <Image
        width="auto"
        height="60%"
        objectFit="cover"
        src={imageUrl}
        onMouseEnter={() => setTooltipOpen(headingOverflow)}
        onMouseLeave={() => setTooltipOpen(false)}
      />

      <CardBody overflow={"hidden"}>
        <HStack marginBottom={2} justifyContent={"space-between"}>
          <GenreLabel genreIds={movie.genre_ids} />
          <CriticScore score={movie.vote_average} />
        </HStack>
        <Tooltip
          isOpen={isTooltipOpen}
          label={movie.title}
          placement="top"
          hasArrow
        >
          <Heading
            ref={headingRef}
            color="white"
            fontSize="2xl"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {movie.title}
          </Heading>
        </Tooltip>

        <Tooltip
          isOpen={isTooltipOverviewOpen}
          label={"Overview: " + movie.overview}
          placement="top"
          padding={3}
          hasArrow
        >
          <Text
            ref={overviewRef}
            onMouseEnter={() => {
              console.log("clicked");
              console.log("overview", overviewOverflow);
              setTooltipOverviewOpen(overviewOverflow);
            }}
            marginY={3}
            onMouseLeave={() => setTooltipOverviewOpen(false)}
            fontWeight="bold"
            color="lightsteelblue"
            fontSize="14px"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis" // Adjust this based on your font size
          >
            {movie.overview}
          </Text>
        </Tooltip>
      </CardBody>
    </Card>
  );
};

export default MoviesCard;
