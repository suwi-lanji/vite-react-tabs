import { Home, Inbox, Search, UserRound } from "lucide-react"
export interface BottomTabItem {
    id: number,
    href: string,
    label: string | null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
}

export const nav_items: BottomTabItem[] = [
{
    id: 1,
    href: "/",
    label: "Home",
    icon: Home
},
{
    id: 2,
    href: "/search",
    label: "Search",
    icon: Search
},
{
    id: 3,
    href: "/inbox",
    label: "Inbox",
    icon: Inbox
},
{
    id: 4,
    href: "/profile",
    label: "Profile",
    icon: UserRound
},
]