import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>This is Dashboard Page</h1>
      <p>
        Let say we have params route like /product/:id how to protect this if
        product id is not present it will return empty structure.we have to
        throw error in this case
      </p>
    </div>
  );
}

export default Dashboard;
