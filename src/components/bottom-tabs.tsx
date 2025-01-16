import { Link } from "react-router-dom";
import { nav_items } from "../config/navigation";

export default function BottomTabs() {
    return (
        <div className="flex items-center justify-between p-4">
            { nav_items.map(item => 
                <Link to={''} className="flex flex-col items-center">
                    <item.icon/>
                    <span className="">{item.label}</span>
                </Link>
            )}
        </div>
    )
}