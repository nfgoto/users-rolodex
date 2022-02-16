import "./card.styles.css";
import { FC } from "react";
import { User } from "../../types";

interface CardProps {
  user: User;
}

const Card: FC<CardProps> = ({
  user: { name, username, email, id, website, phone },
}) => (
  <div className="card-container" key={id}>
    <img src={`https://robohash.org/${id}.png?set=set3&size=150x150`} alt="" />
    <h3>{name}</h3>
    <p>
      <u>
        <b>username</b>
      </u>
      : {username}
    </p>
    <p>
      <u>
        <b>email</b>
      </u>
      : {email}
    </p>
    <p>
      <u>
        <b>username</b>
      </u>
      : {username}
    </p>
    <p>
      <u>
        <b>phone</b>
      </u>
      : {phone}
    </p>
    <p>
      <u>
        <b>website</b>
      </u>
      : {website}
    </p>
  </div>
);

export default Card;
