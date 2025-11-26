import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <>

        <h3>Admin Side bar</h3>

        <Outlet />

        <h3>Footer</h3>

        </>
    );
}

export default AdminLayout;