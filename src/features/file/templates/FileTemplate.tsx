import UploadFile from "../components/UploadFile";
import "./style.css";
import useFileUpload from "../hooks/useFileUpload";

const FileTemplate = () => {
  const { fileUrl, onChange, onOpen, onClear, inputRef } = useFileUpload();

  return (
    <section className="inputContainer">
      <div className="inputButton">
        <button onClick={onOpen}>Add image</button>
        {fileUrl ? <button onClick={onClear}>clear image</button> : null}
      </div>
      <UploadFile onChange={onChange} ref={inputRef} />
      {fileUrl ? <img src={fileUrl} /> : null}
    </section>
  );
};

export default FileTemplate;
