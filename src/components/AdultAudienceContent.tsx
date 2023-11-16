import { FaExclamationCircle } from "react-icons/fa";

const AdultAudienceContent = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaExclamationCircle style={{ color: "red", fontSize: "1.5em" }} />
        <span style={{ marginLeft: "10px", fontSize: "14px", color: "gray" }}>
          Explicit Nudity{" "}
        </span>
      </div>
    </>
  );
};

export default AdultAudienceContent;
