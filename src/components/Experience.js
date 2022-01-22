const Experience = (props) => {
  const content = props.content.map((item) => {
    let experienceDate = item.startDate + ' - ';

    if (typeof item.endDate !== undefined && item.endDate.trim() !== '') {
      experienceDate = experienceDate + item.endDate;
    } else {
      experienceDate = experienceDate + 'Present';
    }

    return (
      <section className="experience">
        <p className="experience_date">{experienceDate}</p>
        <p className="position">{item.position}</p>
        <p className="company"><span>{item.company}</span> (<em className="location">{item.location}</em>)</p>
      </section>
    );
  });

  return(
    <article className="experiences">
      <h3>Experience</h3>
      {content}
    </article>
  );
};

export default Experience;