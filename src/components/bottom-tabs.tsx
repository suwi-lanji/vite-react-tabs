import { Link, useLocation } from "react-router-dom";
import { nav_items } from "../config/navigation";

export default function BottomTabs() {
    const location = useLocation();
    return (
        <div className="flex items-center justify-around py-2 sticky bottom-0 bg-opacity-85">
            { nav_items.map(item => 
                <Link to={item.href} className="flex flex-col items-center">
                    <item.icon className={`${location.pathname === item.href ? "text-white" : "text-gray-500"}`}/>
                    <span className={`text-xs font-semibold ${location.pathname === item.href ? "text-white" : "text-gray-500"}`}>{item.label}</span>
                </Link>
            )}
        </div>
    )
}