import React from "react";
import { useFetch } from "../hooks/useFetch";

function DataFetcher() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Data Fetching using Custom Hook</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul style={{ textAlign: "left", listStyleType: "none", padding: 0 }}>
          {data.slice(0, 5).map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;
