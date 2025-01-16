import { Outlet } from "react-router-dom";
import BottomTabs from "../components/bottom-tabs";

export default function Root() {
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-grow">
            <Outlet/>
            </main>
            <BottomTabs/>
        </div>
    )
}