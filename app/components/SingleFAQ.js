
function SingleFAQ({ question, answer }) {
  return (
    <div className="my-8">
      <h1 className="font-bold sm:text-2xl">{question}</h1>
      <h4 className="sm:text-2xl">{answer}</h4>
    </div>
  );
}

export default SingleFAQ;
