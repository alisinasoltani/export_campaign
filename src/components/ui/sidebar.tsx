"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.png";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const sidebarVariants = {
  open: {
    width: "15rem",
  },
  closed: {
    width: "3.05rem",
  },
};

const contentVariants = {
  open: { display: "block", opacity: 1 },
  closed: { display: "block", opacity: 1 },
};

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

const transitionProps = {
  type: "tween",
  ease: "easeOut",
  duration: 0.2,
  staggerChildren: 0.1,
};

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.02 },
  },
};


export function SessionNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
    <motion.div
      className={cn(
        "sidebar md:block hidden fixed right-0 z-40 h-full shrink-0 border-r shadow-xl",
      )}
      initial={isCollapsed ? "closed" : "open"}
      animate={isCollapsed ? "closed" : "open"}
      variants={sidebarVariants}
      transition={transitionProps}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}>
      <motion.div
        className={`relative z-40 flex text-muted-foreground h-full shrink-0 flex-col bg-white dark:bg-black transition-all`}
        variants={contentVariants} style={{ direction: 'rtl' }}>
        <motion.ul variants={staggerVariants} className="flex h-full flex-col">
          <div className="flex grow flex-col items-center">
            <div className="flex h-[54px] w-full shrink-0  border-b p-2">
              <div className=" mt-[1.5px] flex w-full">
                <Button variant="ghost" size="sm" className="flex w-fit items-center gap-2 px-2">
                  <Avatar className='rounded size-4'>
                    <AvatarFallback>
                      <Image src={logo} alt="Export Campaign Logo" />
                    </AvatarFallback>
                  </Avatar>
                  <motion.li variants={variants} className="flex w-fit items-center gap-2">
                    {!isCollapsed && (
                      <>
                        <p className="text-sm font-medium  ">
                          {"پویش ملی صادرات"}
                        </p>
                      </>
                    )}
                  </motion.li>
                </Button>
              </div>
            </div>

            <div className=" flex h-full w-full flex-col">
              <div className="flex grow flex-col gap-4">
                <ScrollArea className="h-16 grow p-2" style={{ direction: 'rtl' }}>
                  <div className={cn("flex w-full flex-col gap-1")}>
                    <Link
                      href="/dashboard"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5   transition hover:bg-muted hover:text-primary",
                        pathname?.includes("dashboard") &&
                          "bg-muted text-blue-600",
                      )}>
                      <LayoutDashboard className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="pr-2 text-sm font-medium">داشبورد</p>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                            آشنایی با پویش ملی صادرات
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                            مقدمات صادراتی
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 1
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 2
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 3
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 4
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 5
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 6
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              گام 7
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              روش های تحقیق بازار
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              مقدمه ای بر اصول مذاکره
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              صادرات را از کجا آغاز کنیم؟
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              امنیت اطلاعات
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Link
                      href="/reports"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}>
                      <FaRegCircle className="h-4 w-4" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="pr-2 text-sm font-medium">
                              نمونه موردی صادرات
                            </p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                  </div>
                </ScrollArea>
              </div>
              {/* <div className="flex flex-col p-2">
                <Link href="/settings/integrations" className="mt-auto flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5   transition hover:bg-muted hover:text-primary">
                  <Settings className="h-4 w-4 shrink-0" />{" "}
                  <motion.li variants={variants}>
                    {!isCollapsed && (
                      <p className="ml-2 text-sm font-medium"> Settings</p>
                    )}
                  </motion.li>
                </Link>
                <div>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="w-full">
                      <div className="flex h-8 w-full flex-row items-center gap-2 rounded-md px-2 py-1.5  transition hover:bg-muted hover:text-primary">
                        <Avatar className="size-4">
                          <AvatarFallback>
                            A
                          </AvatarFallback>
                        </Avatar>
                        <motion.li
                          variants={variants}
                          className="flex w-full items-center gap-2"
                        >
                          {!isCollapsed && (
                            <>
                              <p className="text-sm font-medium">Account</p>
                              <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground/50" />
                            </>
                          )}
                        </motion.li>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={5}>
                      <div className="flex flex-row items-center gap-2 p-2">
                        <Avatar className="size-6">
                          <AvatarFallback>
                            AL
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-medium">
                            {`Andrew Luo`}
                          </span>
                          <span className="line-clamp-1 text-xs text-muted-foreground">
                            {`andrew@usehindsight.com`}
                          </span>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        asChild
                        className="flex items-center gap-2"
                      >
                        <Link href="/settings/profile">
                          <UserCircle className="h-4 w-4" /> Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" /> Sign out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div> */}
            </div>
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
    <div className="w-[100vw] md:hidden flex flex-row justify-between items-center px-6 py-3">
      <Button onClick={toggleDrawer(true)}>
        <HiOutlineMenu />
      </Button>
      <div className="flex flex-row justify-center items-center">
        <Image src={logo} width={80} alt="export campaign logo" />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ direction: 'rtl' }} anchor="right" >
        <List>
          <ListItem>
            <ListItemButton className="flex h-1 flex-row justify-end items-center text-left" style={{ direction: 'rtl' }} disableRipple={true} onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <IoMdClose />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary", 
          pathname?.includes("dashboard") && "bg-muted text-blue-600" )}>
            <ListItemButton>
              <LayoutDashboard className="h-4 w-4" />{" "}
              <p className="pr-2 text-sm font-medium">داشبورد</p>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600" )}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                آشنایی با پویش ملی صادرات
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600" )}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                مقدمات صادراتی
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600" )}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 1
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem 
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600" )}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 2
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary", pathname?.includes("reports") && "bg-muted text-blue-600" )}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 3
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
            className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
            pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 4
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 5
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 6
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  گام 7
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  روش های تحقیق بازار
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  مقدمه ای بر اصول مذاکره
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  صادرات را از کجا آغاز کنیم؟
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  امنیت اطلاعات
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem
          className={cn("flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
          pathname?.includes("reports") && "bg-muted text-blue-600")}>
            <ListItemButton>
              <FaRegCircle className="h-4 w-4" />{" "}
              <div className="flex items-center gap-2">
                <p className="pr-2 text-sm font-medium">
                  نمونه موردی صادرات
                </p>
              </div>
            </ListItemButton>
          </ListItem>
          {/* <Separator className="w-full" /> */}
        </List>
      </Drawer>
    </div>
    </div>
  );
}
