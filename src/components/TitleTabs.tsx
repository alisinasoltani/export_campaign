import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import { styled } from "@mui/material/styles";

const TitleTabs = ({ value, handleChange, titles, color }: { value: number, handleChange: any, titles: string[], color: string }) => {
    const TitleTab = styled(Tab)<TabProps>(({ theme }) => ({
        fontWeight: "bold",
        fontSize: 17,
        fontFamily: 'nazanin',
        color: color
    }));
    return (
        <Tabs value={value} onChange={handleChange} variant='fullWidth' 
        className='w-full px-[6rem]' indicatorColor='secondary' textColor='secondary' sx={{ direction: 'rtl', color: 'white' }}>
            {
                titles.map((title, index) => (
                    <TitleTab key={index} label={title}></TitleTab>
                ))
            }
        </Tabs>
    );
}

export default TitleTabs