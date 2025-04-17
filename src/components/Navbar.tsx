"use client"

import { useState } from "react";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import search from "@/../public/icons/search.svg";
import road from "@/../public/icons/road.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import menu_icon from "@/../public/icons/menu.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
    <div className="w-full flex flex-row-reverse justify-center items-center md:w-full px-8 py-1 irsansx-md fixed top-0 z-[100] bg-none irsansx" id="navbar">
        <div className="w-full flex flex-row-reverse justify-center items-center gap-8">
            {/* <Image src={logo} width={100} alt="export campaign logo" /> */}
            <div className="min-w-fit flex justify-end items-center">
                <h1 className="md:text-lg text-lg iransanx-mid font-medium place-self-start">پویش ملی صادرات</h1>
            </div>
            <button className="md:hidden flex" onClick={toggleDrawer(true)}>
                <Image src={menu_icon} alt="expand menu icon" width={24} />
            </button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem disablePadding>
                        <Accordion style={{ boxShadow: 'none' }}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header">
                            صادرات
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemButton>
                                        آموزش صادرات
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                        ایده های صادراتی
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                        اورژانس صادراتی
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                        خدمات صادراتی
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <h3>آزمون آنلاین</h3>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <h3>عصرانه</h3>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <h3>برند ملی</h3>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <h3>سوالات متداول</h3>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <h3>درباره ما</h3>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <div className="w-full md:flex hidden md:flex-row-reverse md:justify-center md:items-center md:gap-6">
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none font-medium">صادرات</DropdownMenuTrigger>
                    <DropdownMenuContent className="px-4 py-4 text-right rounded-xl bg-white z-40" style={{ direction: 'rtl' }}>
                        <DropdownMenuItem className="py-2">آموزش صادرات</DropdownMenuItem>
                        <DropdownMenuItem className="py-2">آزمون آنلاین</DropdownMenuItem>
                        <DropdownMenuItem className="py-2">ایده های صادراتی</DropdownMenuItem>
                        <DropdownMenuItem className="py-2">اورژانس صادراتی</DropdownMenuItem>
                        <DropdownMenuItem className="py-2">خدمات صادراتی</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none font-medium">فعالیت ها</DropdownMenuTrigger>
                    <DropdownMenuContent className="px-4 py-4 text-right rounded-xl bg-white z-40" style={{ direction: 'rtl' }}>
                        <DropdownMenuItem className="py-2">عصرانه</DropdownMenuItem>
                        <DropdownMenuItem className="py-2">برند ملی</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <h3 className="font-medium">سوالات متداول</h3>
                <h3 className="font-medium">درباره ما</h3>
            </div>
        </div>
        <div className="md:flex hidden flex-row gap-4 justify-start items-center">
            <button type="button" className="h-full min-w-fit bg-[#E6A817] hover:shadow-lg transition-all duration-500 px-2 py-1.5 rounded-xl flex flex-row items-center justify-center gap-4">
                <Image src={road} width={26} alt="road button" />
                شروع مسیر
            </button>
            <button type="button" className="min-w-fit bg-[#f5f5f5] hover:shadow-lg transition-all duration-500 p-2 rounded-full flex flex-row items-center justify-center">
                <Image src={search} width={26} alt="search button" />
            </button>
        </div>
    </div>
    );
}

export default Navbar;