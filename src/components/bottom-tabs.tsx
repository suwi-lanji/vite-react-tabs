import { Link } from "react-router-dom";
import { nav_items } from "../config/navigation";

export default function BottomTabs() {
    return (
        <div className="flex items-center justify-around py-2 sticky bottom-0 bg-opacity-85">
            { nav_items.map(item => 
                <Link to={''} className="flex flex-col items-center">
                    <item.icon/>
                    <span className="text-xs font-semibold">{item.label}</span>
                </Link>
            )}
        </div>
    )
}