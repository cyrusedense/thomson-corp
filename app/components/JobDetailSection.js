function JobDetailSection({ title, list }) {
  let attributeList;

  if (!list || list.length === 0) {
    attributeList = null;
  } else {
    attributeList = (
      <div className="list-wrapper">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    );
  }

  return (
    <section className="mb-5">
      <h1 className="mb-5 text-3xl text-tsdarkgreen">{title}</h1>

      {attributeList}
    </section>
  );
}

export default JobDetailSection;
