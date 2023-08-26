import { Outlet } from "react-router-dom";

function Page() {
  return (
    <div>
      <header>header componant</header>
      <Outlet />
    </div>
  );
}

export default Page;
