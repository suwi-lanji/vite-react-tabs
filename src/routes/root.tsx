import { Outlet } from "react-router-dom";
import BottomTabs from "../components/bottom-tabs";

export default function Root() {
    return (
        <div className="">
            <main>
                <Outlet/>
            </main>
            <BottomTabs/>
        </div>
    )
}