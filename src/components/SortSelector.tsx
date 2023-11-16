import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";

interface Props {
  disableSort: boolean;
  selectedSortOrder: string;
  selectedSortBy: string;
  onSelectedOrderBy: (order: string) => void;
  onSelectedSort: (selectedSort: string) => void;
}
const SortSelector = ({
  disableSort,
  selectedSortOrder,
  onSelectedSort,
  selectedSortBy,
  onSelectedOrderBy,
}: Props) => {
  console.log("disablesort", disableSort);
  const sortBy: { value: string; Text: string }[] = [
    { value: "popularity", Text: "Popularity" },
    { value: "release_date", Text: "Release Date" },
    { value: "vote_average", Text: "Vote Average" },
    { value: "original_title", Text: "Original Title" },
    { value: "revenue", Text: "Revenue" },
  ];

  const handleSelectedSortOrder = () => {
    if (selectedSortOrder == "asc") return onSelectedOrderBy("desc");
    else return onSelectedOrderBy("asc");
  };

  const findSortBy = (value: string) => {
    return sortBy.find((sort) => sort.value === value)?.Text;
  };

  return (
    <HStack>
      <Menu>
        <MenuButton
          isDisabled={disableSort}
          marginY={5}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          Order By: {findSortBy(selectedSortBy)}
        </MenuButton>

        <MenuList>
          {sortBy.map((sort) => (
            <MenuItem
              key={sort.value}
              color={sort.value == selectedSortBy ? "teal" : "white"}
              fontWeight={sort.value == selectedSortBy ? "bold" : "normal"}
              onClick={() => onSelectedSort(`${sort.value}`)}
            >
              {sort.Text}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          isDisabled={disableSort}
          marginY={5}
          as={Button}
          onClick={() => handleSelectedSortOrder()}
          rightIcon={
            selectedSortOrder === "desc" ? (
              <FaSortAmountDownAlt />
            ) : (
              <FaSortAmountUpAlt />
            )
          }
        ></MenuButton>
      </Menu>
    </HStack>
  );
};

export default SortSelector;
