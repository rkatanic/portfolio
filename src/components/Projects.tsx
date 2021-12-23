import "./Projects.css";

const Projects = () => {
  const items = [
    {
      name: "Project One",
      image:
        "https://www.littleleloo.com/wp-content/uploads/Colorful-Abstract-Painting-Against-All-Odds-1-960x720.jpg.webp",
    },
    {
      name: "Project Two",
      image:
        "https://images.squarespace-cdn.com/content/v1/577e85abc534a5d5bcf943d2/1583872755717-4F870FEGV2AVO8ZXC1UF/Hearts+on+Fire+6.jpg?format=750w",
    },
    {
      name: "Project Three",
      image:
        "https://cdn.pixabay.com/photo/2017/12/25/16/16/creativity-3038628_960_720.jpg",
    },
    {
      name: "Project Four",
      image:
        "https://cdn.zmescience.com/wp-content/uploads/2020/08/photo-1540763763255-0fa8899f9664.jpg",
    },
    {
      name: "Project Five",
      image:
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];
  return (
    <div className="list">
      <p className="desc">
        One of the examples of project preview list. Hover for preview.
      </p>
      {items.map((item, i) => (
        <div
          className="list-item"
          style={{
            animation: `fadeIn 750ms ease-out ${250 * (i + 1)}ms forwards`,
          }}
        >
          <div className="list-item-desc">
            <div className="list-item-number">{`0${i + 1}`}</div>
            <div className="list-item-name">{item.name}.</div>
            <a href="" className="list-item-link">
              visit page
            </a>
          </div>
          <div className="list-item-img-wrapper">
            <img
              className={`list-item-img ${i == 0 ? "first" : ""}`}
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
