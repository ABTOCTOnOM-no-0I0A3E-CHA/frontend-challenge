import { useLocation, useNavigate } from "react-router";
import { AppBar, Tabs, Tab } from "@mui/material";

interface NavTab {
    label: string;
    path: string;
    width: number;
}

const tabs: NavTab[] = [
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
    const navigate = useNavigate();

    const currentTab = tabs.findIndex((tab) => tab.path === path);

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
                onChange={(_, newValue) => navigate(tabs[newValue].path)}
                textColor="inherit"
                slotProps={{ indicator: { style: { display: "none" } } }}
                sx={{ height: "100%" }}
            >
                {tabs.map((tab) => (
                    <Tab
                        key={tab.path}
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
                                path === tab.path
                                    ? "#ffffff"
                                    : "rgba(255, 255, 255, 0.7)",
                            backgroundColor:
                                path === tab.path ? "#1E88E5" : "transparent",
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
