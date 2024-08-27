import { LoaderIcon } from "react-hot-toast";

function Loader() {
  return (
    <div
      style={{
        color: "var(--primary-600)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "8rem auto",
      }}
    >
      <p>درحال بارگذاری اطلاعات ...</p>
      <LoaderIcon style={{ width: "1.3rem", height: "1.3rem" }} />
    </div>
  );
}

export default Loader;
