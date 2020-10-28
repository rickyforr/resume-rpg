import { connect } from "react-redux";
import { addTiles } from "./world.actions";
import World from "./world.component";

const mapStateToProps = (
  state = {
    player: {},
  }
) => ({
  player: state.player,
  musicModalText:
    "I began playing trumpet when I was 11 years old. I was hooked! Played a lot with school bands, the jazz band in university and had a short stint with a local band called Freak Motif (check them out!). Here's me playing at the Motion Notion Festival in BC",
  geologyModalText:
    "After a couple student/new grad contracts I was hired on as a Geologist at Perpetual Energy in 2006. While there I helped discover oil and natural gas prospects through scientific studies and geological mapping.I oversaw the geology side of drilling operations from the office and occasionally in the field. Had a great time at Perpetual but after about 10 years I was ready for a change.",
  universityModalText:
    " What can I say...I love rocks!. From 2001 - 2005 I attended Queens University in Kingston Ontario and earned my bachelors degree in Earth Science. Learning about the Earth at a great institution was an awesome experience. It was a lot of fun and the reason I first moved out to Calgary. Highlights were Geological Field School in Quebec and getting to handle some of the earliest animal fossils ever found.",
  lighthouseLabsModalText:
    "In 2016 I was ready for something new and exciting. After doing some freelance website work for friends and family I decided to register for Lighthouse Labs Web Development Bootcamp. I learned Javascript, HTML, Node, CSS, React and a little Ruby on Rails. I also learned what a rubber duck was really for.",
});

const mapDispatchToProps = (dispatch) => ({
  addTiles: () => dispatch(addTiles()),
});

export const WorldContainer = connect(mapStateToProps, mapDispatchToProps)(World);
