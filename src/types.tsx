interface color {
    name: string
    type: "dark" | "light"
    color: string
}
  
interface fontfamily {
    name: string
    css_class: string
}
  
interface TabPanelProps {
      children?: React.ReactNode;
      dir?: string;
      index: number;
      value: number;
      fontSize: number;
      fontFamily: string;
}
  
interface selectedStyle {
    background_color_index: number
    font_index: number
    font_size: number
    line_height: number
}

interface ServiceProps {
    title: string;
    subtitle: string;
    description: string;
    isNew: boolean;
    img: string;
    href: string;
    btnTitle: string;
}

export type { color, fontfamily, TabPanelProps, selectedStyle, ServiceProps };