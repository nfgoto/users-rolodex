import "./search-box.styles.css";
import { ChangeEventHandler, FC, RefObject } from "react";

interface SearchBoxProps {
  handleSearchChange: ChangeEventHandler<HTMLInputElement>;
  searchInputRef: RefObject<HTMLInputElement>;
  placeholder: string;
}

const SearchBox: FC<SearchBoxProps> = ({
  handleSearchChange,
  searchInputRef,
  placeholder,
}) => {
  return (
    <input
      type="search"
      name="search-user"
      id="search-user"
      placeholder={placeholder}
      onChange={handleSearchChange}
      ref={searchInputRef}
      className="search"
    />
  );
};

export default SearchBox;
