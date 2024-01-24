import SideNavigation from "../components/SideNavigation";

const Dashboard = () => {
  return (
    <div class="bg-main min-h-screen flex">
      <SideNavigation />
      <div class="bg-white flex-grow m-2 ml-0 rounded-lg">Dashboard</div>            
    </div>
  );
};

export default Dashboard;
