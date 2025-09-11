import { SLoader } from "./Loader.styled";

const Loader = ({ width = 220, height = 130, borderRadius = 0 }) => {
  return (
    <SLoader
      style={{
        width: width + "px",
        height: height + "px",
        borderRadius: borderRadius + "px",
      }}
    ></SLoader>
  );
};
export default Loader;
