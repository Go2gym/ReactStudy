const Concept = (props) => {
    return (
      <li className="concept">
        <img src={props.lists.image} alt={props.lists.title} />
        <h2>{props.lists.title}</h2>
        <p>{props.lists.description}</p>
      </li>
    );
  };
  
  export default Concept;
  