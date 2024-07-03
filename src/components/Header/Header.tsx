import React, { useState } from "react";
import { Button } from "../../UI/Button";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderIconList,
  HeaderIcon,
  HeaderIconText,
  HeaderButtonList,
  HeaderSearchInput,
} from "./styles";

interface Props {
  setFilmsWithSearch: (search: string) => Promise<void>;
  filmsPressed: () => Promise<void>;
}

export const Header: React.FC<Props> = ({
  setFilmsWithSearch,
  filmsPressed,
}) => {
  const [search, setSearch] = useState("");
  return (
    <HeaderContainer>
      <HeaderLogo>crackle</HeaderLogo>
      <HeaderIconList>
        <HeaderIcon onClick={filmsPressed}>
          <i className="fa-solid fa-film"></i>
          <HeaderIconText>Movies</HeaderIconText>
        </HeaderIcon>
        <HeaderIcon>
          <i className="fa-solid fa-tv"></i>
          <HeaderIconText>TV Shows</HeaderIconText>
        </HeaderIcon>
        <HeaderIcon>
          <i className="fa-solid fa-star"></i>
          <HeaderIconText>Favorites</HeaderIconText>
        </HeaderIcon>
      </HeaderIconList>
      <HeaderButtonList>
        <HeaderSearchInput
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFilmsWithSearch(search);
              setSearch("");
            }
          }}
          placeholder="Search"
        />
        <Button primary={"true"}>create account</Button>
        <Button primary={"false"}>sign in</Button>
      </HeaderButtonList>
    </HeaderContainer>
  );
};
