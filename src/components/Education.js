const Education = (props) => {
  const content = props.content.map((item) => {
    return (
      <section>
        <p className="credential">{item.credential} <span className="concentration">{item.study}</span>, <span className="year_graduated">{item.yearGraduated}</span></p>
        <p><span className="institution">{item.institution}</span></p>
      </section>
    );
  });

  return(
    <article className="education">
      <h3>Education</h3>
      {content}
    </article>
  );
};

export default Education;