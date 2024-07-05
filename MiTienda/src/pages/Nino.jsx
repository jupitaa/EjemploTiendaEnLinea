import banner_nino_img from "../components/assets/banner_kids.png";

function Nino() {
  return (
    <div className="hombre">
      <img
        src={banner_nino_img}
        alt="banner_nino_image"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Nino;