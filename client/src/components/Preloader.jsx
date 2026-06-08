import "../css/preloader.css";
import preloaderSvg from "/preloader.svg";

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={preloaderSvg} alt="Preloader" className="preloader-img" />
    </div>
  );
}