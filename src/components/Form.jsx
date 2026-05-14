import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Persist the name field in localStorage under the key "name"
  const [name, setName] = useLocalStorage("name", "");

  // Persist the service number field in localStorage under the key "serviceNumber"
  const [serviceNumber, setServiceNumber] = useLocalStorage(
    "serviceNumber",
    ""
  );

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          id="service"
          type="text"
          data-testid="service"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>

      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;