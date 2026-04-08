import { useLocation } from "react-router";

interface Tab {
    label: string;
    path: string;
    width: number;
}

const tabs: Tab[] = [
    {
        label: "Все котики",
        path: "/",
        width: 120,
    },
    {
        label: "Любимые котики",
        path: "/favorites",
        width: 173,
    },
];

const Header = () => {
    const path = useLocation().pathname;

    return (
        <header className="bg-[#2196F3] h-16 px-15.5 shadow-[0px_4px_4px_rgba(0,0,0,0.24)]">
            <nav className="h-full">
                <ul className="flex h-full">
                    {tabs.map((tab) => (
                        <li key={tab.path}>
                            <a
                                href={tab.path}
                                className={`h-full flex items-center justify-center tracking-[0.25px] leading-5.25 text-center text-sm ${path === tab.path ? "bg-primary-600 text-high-emphasis" : "bg-primary-500 text-medium-emphasis"}`}
                                style={{ width: tab.width }}
                            >
                                {tab.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
