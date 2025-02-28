'use client';

import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import { styled } from "@mui/material/styles";
import { useState, useEffect } from 'react';

const TitleTabs = ({ value, handleChange, titles, color }: { value: number, handleChange: any, titles: string[], color: string }) => {
    const [windowSize, setWindowSize] = useState<number>(768);
      useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    const TitleTab = styled(Tab)<TabProps>(({ theme }) => ({
        fontWeight: "bold",
        fontSize:  windowSize >= 768 ? 17 : 14,
        fontFamily: 'nazanin',
        color: color
    }));
    return (
        <Tabs value={value} onChange={handleChange} variant={`${windowSize >= 768 ? 'fullWidth' : 'scrollable'}`} scrollButtons="auto"
        className='w-full md:px-[6rem] px-6' indicatorColor='secondary' textColor='secondary' sx={{ direction: 'rtl' }}>
            {
                titles.map((title, index) => (
                    <TitleTab key={index} label={title}></TitleTab>
                ))
            }
        </Tabs>
    );
}

export default TitleTabs