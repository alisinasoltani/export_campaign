import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Slider from '@mui/material/Slider';
import Fab from '@mui/material/Fab';
import { selectedStyle, color, fontfamily } from "@/types";
import Image from "next/image";
import custom_icon from "@/../public/icons/custom.svg";

const LevelsTextCutomMenu = ({ selectedStyle, background_colors_options, font_families, handleChangeBackgroundColor, handleFontChange, handleFontSizeChange, variant }: 
{ selectedStyle: selectedStyle, background_colors_options: color[], font_families: fontfamily[], handleChangeBackgroundColor: any, handleFontChange: any, handleFontSizeChange: any, variant: "Button"|"Menu" }) => {
  return variant == "Menu" ? (
    <div className='flex flex-row gap-4 justify-between items-center bg-[#ffffff] text-black py-4 px-6 fixed bottom-5 shadow-xl rounded-3xl'>
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger className='flex flex-row gap-2 justify-center items-center text-sm border-none outline-none'>
                <div className='w-6 h-6 rounded-full border-2 border-[#CF3828]' style={{ backgroundColor: background_colors_options[selectedStyle.background_color_index].color, color: background_colors_options[selectedStyle.background_color_index].type == "dark" ? "#F5F5F5" : "#000000" }}>آ</div>
                <h5>رنگ پس زمینه</h5>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='overflow-visible flex flex-row gap-2 bg-[#ffffff] border-none m-0 px-4 py-2 rounded-xl'>
                {background_colors_options.map((option, index) => (
                <DropdownMenuItem
                className='w-6 h-6 rounded-full border-2 flex flex-row justify-center items-center border-[#CF3828]'
                key={option.color}
                onClick={(event) => handleChangeBackgroundColor(event, index)}
                style={{ backgroundColor: option.color, color: option.type == "dark" ? "#F5F5F5" : "#000000" }}>
                    آ
                </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row gap-2 justify-center items-center text-sm border-none outline-none'>
                    <h5 className='font-bold'>{font_families[selectedStyle.font_index].name}</h5>
                    <h5>فونت</h5>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='overflow-visible flex flex-row gap-2 bg-[#ffffff] border-none m-0 px-4 py-2 rounded-xl'>
                    {font_families.map((family, index) => (
                    <DropdownMenuItem
                    className='w-6 h-6 rounded-full border-2 flex flex-row justify-center items-center border-[#CF3828]'
                    key={family.css_class}
                    onClick={(event) => handleFontChange(event, index)}
                    style={{ fontFamily: family.css_class }}>
                        آ
                    </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger className='flex flex-row gap-2 justify-center items-center text-sm border-none outline-none'>
                <h5 className='font-bold'>{selectedStyle.font_size}</h5>
                <h5>اندازه</h5>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='overflow-visible bg-[#ffffff] border-none m-0 px-4 py-2 rounded-xl'>
                <Slider className='flex flex-row justify-center items-center' aria-label="Font Size" defaultValue={22} onChange={handleFontSizeChange} 
                valueLabelDisplay="auto" size='small' shiftStep={6} step={6} marks={true} min={10} max={64}/>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
    ) : (
    <Fab component="div" className="fixed right-[3rem] bottom-5 shadow-lg" size="small" color="secondary" aria-label="add">
        <DropdownMenu>
            <DropdownMenuTrigger className="border-none outline-none">
                <Image src={custom_icon} width={24} alt="click to cutomize" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-end bg-transparent border-none absolute shadow-none" style={{ bottom: "2rem", right: "-1.7rem" }}>
                <DropdownMenuItem onClick={(event) => handleChangeBackgroundColor(event, ((selectedStyle.background_color_index+1) % background_colors_options.length))}>
                    <div className='flex flex-row-reverse min-w-max gap-2 justify-start items-center text-sm border-none outline-none'>
                        <div className='flex justify-center items-center w-8 h-8 rounded-full border-2 border-[#CF3828] shadow-md' style={{ backgroundColor: background_colors_options[selectedStyle.background_color_index].color, color: background_colors_options[selectedStyle.background_color_index].type == "dark" ? "#F5F5F5" : "#000000" }}>آ</div>
                        <h5 className="bg-white shadow-md rounded-2xl px-4 py-1.5">رنگ پس زمینه</h5>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(event) => handleFontChange(event, ((selectedStyle.font_index+1) % font_families.length))}>
                    <div className='flex flex-row-reverse min-w-max gap-2 justify-start items-center text-sm border-none outline-none'>
                        <h5 className={`bg-white flex justify-center items-center w-8 h-8 border-2 border-[#CF3828] shadow-md rounded-full font-bold ${font_families[selectedStyle.font_index].css_class}`}>آ</h5>
                        <h5 className="bg-white shadow-md rounded-2xl px-4 py-1.5">{font_families[selectedStyle.font_index].name}</h5>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(event) => handleFontSizeChange(event, (selectedStyle.font_size+6))}>
                    <div className='flex flex-row-reverse min-w-max gap-2 justify-start items-center text-sm border-none outline-none'>
                        <h5  className="bg-white flex justify-center items-center w-8 h-8 border-2 border-[#CF3828] shadow-md rounded-full font-bold">{selectedStyle.font_size}</h5>
                        <h5 className="bg-white shadow-md rounded-2xl px-4 py-1.5">اندازه</h5>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </Fab>
    );
}

export default LevelsTextCutomMenu;