import { Home, Inbox, Search, UserRound } from "lucide-react"
export interface BottomTabItem {
    id: number,
    label: string | null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
}

export const nav_items: BottomTabItem[] = [
{
    id: 1,
    label: "Home",
    icon: Home
},
{
    id: 2,
    label: "Search",
    icon: Search
},
{
    id: 3,
    label: "Inbox",
    icon: Inbox
},
{
    id: 4,
    label: "Profile",
    icon: UserRound
},
]