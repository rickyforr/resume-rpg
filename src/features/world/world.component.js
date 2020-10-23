import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/modal.component";
import UniversityModal from "../../components/university-modal/university-modal.component";
import { GoblinContainer } from "../goblin/goblin.container";
import { MapContiner } from "../map/map.container";
import { PlayerContainer } from "../player/player.container";
import trumpetImage from "./trumper_zebra.jpg";

/**
 * Renders the game world.
 *
 * @param props    The component props.
 */
const World = (props) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    props.addTiles();
  }, []);

  const onClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px",
      }}
    >
      <MapContiner />
      <GoblinContainer />
      <PlayerContainer />
      {props.player.position[1] === 240 && props.player.position[0] === 0 && showModal && (
        <Modal
          onClose={onClose}
          image={trumpetImage}
          text=" I began playing trumpet when I was 11 years old. I was hooked! Played a lot with school bands, the jazz band in university and had a short stint with a local band
            called Freak Motif (check them out!). Here's me playing at the Motion Notion Festival in BC"
        />
      )}
      {props.player.position[1] === 240 && props.player.position[0] === 210 && showModal && <UniversityModal onClose={onClose} />}
    </div>
  );
};

export default World;
