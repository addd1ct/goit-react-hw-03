const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
