import React from "react";

function SearchBar({ handleApi, handleChange }) {
  return (
    <div
      className="search-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Enter a prompt here"
        style={{ padding: "10px", border: "1px solid #ddd" }}
        onChange={handleChange}
      />
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
        }}
        className="search-bar-button"
        onClick={handleApi}
      >
        Submit
      </button>
    </div>
  );
}

export default SearchBar;
