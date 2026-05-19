const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
  };
  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
