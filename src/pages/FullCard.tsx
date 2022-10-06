import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "../styles/fullCard.module.scss";
//useparams and uselocation rerender if url string changes
//useparams returns dynamic vars from url search (:id)

function FullCard(): JSX.Element {
  const [card, setCard] = React.useState<{
    img: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get(
          "https://630f176d379256341887958d.mockapi.io/items/" + id
        );
        setCard(data);
      } catch (error) {
        alert("error fetching card");
        navigate("/");
      }
    }
    fetchCard();
  }, []);

  if (!card) {
    return <div className={styles.title}>loading</div>;
  }
  return (
    <div className={styles.container}>
      <img alt={"card image"} className={styles.img} src={card.img} />
      <h2 className={styles.title}>{card.title}</h2>

      <h3 className={styles.price}>{card.price} rub</h3>
    </div>
  );
}

export default FullCard;
