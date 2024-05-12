import "./style.scss";

type allProjectsType = {
  name: string;
  path: string;
};

const allProjcets: allProjectsType[] = [
  {
    name: "CV",
    path: "/cv",
  },
  {
    name: "Stoper",
    path: "/stoper",
  },
];

function App() {
  return (
    <div className="menu">
      <h1>Wszystkie Projecty </h1>
      <div className="projects">
        {allProjcets.map(({ name, path }, index) => (
          <div className="project" key={name}>
            <p>
              Project {index + 1} {name}
            </p>
            <a href={path}>
              <button type="button">Zobacz</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
