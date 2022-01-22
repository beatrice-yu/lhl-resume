const Sidebar = (props) => {
  return(
    <aside className="sidebar">
      <figure>
        <img src={props.picture} alt={props.name} />
        <figcaption>
          <h1>{props.name}</h1>
          <h2>{props.title}</h2>
        </figcaption>
      </figure>
      <p>{props.description}</p>
    </aside>
  );
};

export default Sidebar;