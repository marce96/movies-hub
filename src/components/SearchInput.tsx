import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  searchText: string;
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch, searchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  if (ref.current) ref.current.value = searchText;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          defaultValue={searchText}
          borderRadius={20}
          placeholder="Search movies..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
