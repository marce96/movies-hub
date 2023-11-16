import { MdMovieFilter } from "react-icons/md";
import useGenres from "../hooks/useGenres";
interface Props {
  genreIds: number[];
}

const GenreLabel = ({ genreIds }: Props) => {
  const { data } = useGenres();

  const labels = data
    .filter((genre) => genreIds.includes(genre.id))
    .flatMap((value) => value.name)
    .join(", ");

  return (
    <>
      <div style={{ width: "80%", display: "flex", alignItems: "center" }}>
        <MdMovieFilter style={{ color: "gray", fontSize: "1.5em" }} />
        <span
          style={{
            whiteSpace: "nowrap",
            marginLeft: "10px",
            fontSize: "14px",
            color: "gray",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {labels}
        </span>
      </div>
    </>
  );
};

export default GenreLabel;
