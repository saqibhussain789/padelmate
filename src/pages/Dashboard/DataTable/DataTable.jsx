import React from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons

// Sample Data
const data = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
  { id: 3, name: "Michael Brown", email: "michael@example.com", age: 28 },
];

// Define Columns
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={() => handleEdit(row)}
        >
          <FaEdit />
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={() => handleDelete(row.id)}
        >
          <FaTrash />
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

// Handle Edit Button Click
const handleEdit = (row) => {
  alert(`Editing: ${row.name}`);
};

// Handle Delete Button Click
const handleDelete = (id) => {
  alert(`Deleting user with ID: ${id}`);
};

const DataTableComponent = () => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination // Enables pagination
        highlightOnHover // Highlights row on hover
        striped // Adds alternating row colors
      />
    </div>
  );
};

export default DataTableComponent;
