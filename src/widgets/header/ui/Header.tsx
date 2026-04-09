import { AppBar, Tabs, Tab } from "@mui/material";
import type { Page } from "@/app/App";

interface NavTab {
    label: string;
    page: Page;
    width: number;
}

const tabs: NavTab[] = [
    {
        label: "Все котики",
        page: "home",
        width: 120,
    },
    {
        label: "Любимые котики",
        page: "favorites",
        width: 173,
    },
];

interface HeaderProps {
    currentPage: Page;
    onChangePage: (page: Page) => void;
}

const Header = ({ currentPage, onChangePage }: HeaderProps) => {
    const currentTab = tabs.findIndex((tab) => tab.page === currentPage);

    return (
        <AppBar
            position="sticky"
            sx={{
                top: 0,
                backgroundColor: "#2196F3",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.24)",
                height: 64,
                px: "62px",
            }}
        >
            <Tabs
                value={currentTab === -1 ? 0 : currentTab}
                onChange={(_, newValue) => onChangePage(tabs[newValue].page)}
                textColor="inherit"
                slotProps={{ indicator: { style: { display: "none" } } }}
                sx={{ height: "100%" }}
            >
                {tabs.map((tab) => (
                    <Tab
                        key={tab.page}
                        label={tab.label}
                        sx={{
                            width: tab.width,
                            minWidth: tab.width,
                            height: 64,
                            fontSize: 14,
                            letterSpacing: "0.25px",
                            lineHeight: "21px",
                            textTransform: "none",
                            transition: "all .2s ease",
                            color:
                                currentPage === tab.page
                                    ? "#ffffff"
                                    : "rgba(255, 255, 255, 0.7)",
                            backgroundColor:
                                currentPage === tab.page
                                    ? "#1E88E5"
                                    : "transparent",
                            fontFamily: "'Roboto', sans-serif",
                            "&:hover": {
                                backgroundColor: "#1E88E5",
                            },
                            fontWeight: 400,
                        }}
                    />
                ))}
            </Tabs>
        </AppBar>
    );
};

export default Header;
