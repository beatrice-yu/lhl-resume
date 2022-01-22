const Skills = (props) => {
  return(
    <article className="skills">
      <h3>Skills</h3>
      <ul>
        {props.content.map((item) => <li>{item}</li>)}
      </ul>
    </article>
  );
};

export default Skills;