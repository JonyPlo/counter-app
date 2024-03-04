// import { Subtitulo } from "./Subtitulo";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid='test-title'> {title} </h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
      {/* <Subtitulo /> */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Jony",
  subTitle: "No hay subtitulo",
  // title: "No hay ningun titulo",
};
