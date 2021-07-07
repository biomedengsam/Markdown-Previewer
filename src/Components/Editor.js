const Editor = ({ EditorInput, InputChange }) => {
  return (
    <div className="container m-auto mt-5 ">
      <div style={{ width: 600, margin: "auto" }}>
        <div className="toolbar border-secondary border border-3 p-3">
          Editor
        </div>
        <textarea
          className="border-secondary border border-3 p-3"
          id="editor"
          onChange={(e) => {
            InputChange(e.target.value);
          }}
          value={EditorInput}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
