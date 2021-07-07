import marked from "marked";

const Previewer = ({ Preview }) => {
  marked.setOptions({
    breaks: true
  });
  return (
    <div className="container m-auto mt-5 ">
      <div style={{ width: 600, margin: "auto" }}>
        <div className="toolbar border-secondary border border-3 p-3">
          Previewer
        </div>

        <div
          id="preview"
          className="border-secondary border border-3 p-3"
          dangerouslySetInnerHTML={{ __html: marked(Preview) }}
        ></div>
      </div>
    </div>
  );
};

export default Previewer;
