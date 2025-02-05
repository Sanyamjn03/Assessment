import { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
