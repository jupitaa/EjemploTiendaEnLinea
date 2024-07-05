import banner_mans_image from "../components/assets/banner_mens.png";
import { Container, Grid } from "@mui/material";

function Hombre() {
  return (
    <div className="hombre">
      <img
        src={banner_mans_image}
        alt="banner_mans_image"
        style={{ width: "100%" }}
      />
    </div>
  );
}
export default Hombre;