import { Outlet } from "react-router-dom";

function WebLayout() {
    return (
        <>

        <h3>Web Header</h3>

        <Outlet />

        <h3>Footer</h3>

        </>
    );
}

export default WebLayout;