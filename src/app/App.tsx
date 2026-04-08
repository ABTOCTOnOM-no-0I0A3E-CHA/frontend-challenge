import { Outlet } from "react-router";
import Header from "@/widgets/header/ui/Header";

export function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
