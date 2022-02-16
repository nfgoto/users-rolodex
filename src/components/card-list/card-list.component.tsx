import type { FC } from "react";
import { User } from "../../types";
import Card from "../card/card.component";
import "./card-list.styles.css";

interface CardListProps {
  users: User[];
}

const CardList: FC<CardListProps> = ({ users }) => (
  <div className="card-list">
    {users.map((user) => (
      <Card user={user} />
    ))}{" "}
  </div>
);

export default CardList;
