export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
        primary_light: string;
        primary_dark: string;
        secondary: string;
        secondary_light: string;
        secondary_dark: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
        black: string;
        white: string;
        overlay: string;
        font: string;
        font_dark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        10: string;
        12: string;
        16: string;
        20: string;
        40: string;
        64: string;
        80: string;
        px: string;
    };
    fontSizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
        primary_light: string;
        primary_dark: string;
        secondary: string;
        secondary_light: string;
        secondary_dark: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
        black: string;
        white: string;
        overlay: string;
        font: string;
        font_dark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        10: string;
        12: string;
        16: string;
        20: string;
        40: string;
        64: string;
        80: string;
        px: string;
    };
    fontSizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
        primary_light: string;
        primary_dark: string;
        secondary: string;
        secondary_light: string;
        secondary_dark: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
        black: string;
        white: string;
        overlay: string;
        font: string;
        font_dark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        10: string;
        12: string;
        16: string;
        20: string;
        40: string;
        64: string;
        80: string;
        px: string;
    };
    fontSizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            primary: string;
            primary_light: string;
            primary_dark: string;
            secondary: string;
            secondary_light: string;
            secondary_dark: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
            light: string;
            dark: string;
            black: string;
            white: string;
            overlay: string;
            font: string;
            font_dark: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            10: string;
            12: string;
            16: string;
            20: string;
            40: string;
            64: string;
            80: string;
            px: string;
        };
        fontSizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '4xl': string;
            '5xl': string;
            '6xl': string;
            '7xl': string;
            '8xl': string;
            '9xl': string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
        primary_light: string;
        primary_dark: string;
        secondary: string;
        secondary_light: string;
        secondary_dark: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
        black: string;
        white: string;
        overlay: string;
        font: string;
        font_dark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        10: string;
        12: string;
        16: string;
        20: string;
        40: string;
        64: string;
        80: string;
        px: string;
    };
    fontSizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            primary: string;
            primary_light: string;
            primary_dark: string;
            secondary: string;
            secondary_light: string;
            secondary_dark: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
            light: string;
            dark: string;
            black: string;
            white: string;
            overlay: string;
            font: string;
            font_dark: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            10: string;
            12: string;
            16: string;
            20: string;
            40: string;
            64: string;
            80: string;
            px: string;
        };
        fontSizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '4xl': string;
            '5xl': string;
            '6xl': string;
            '7xl': string;
            '8xl': string;
            '9xl': string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        primary: import("@stitches/react/types/theme").Token<"primary", string, "colors", "">;
        primary_light: import("@stitches/react/types/theme").Token<"primary_light", string, "colors", "">;
        primary_dark: import("@stitches/react/types/theme").Token<"primary_dark", string, "colors", "">;
        secondary: import("@stitches/react/types/theme").Token<"secondary", string, "colors", "">;
        secondary_light: import("@stitches/react/types/theme").Token<"secondary_light", string, "colors", "">;
        secondary_dark: import("@stitches/react/types/theme").Token<"secondary_dark", string, "colors", "">;
        success: import("@stitches/react/types/theme").Token<"success", string, "colors", "">;
        info: import("@stitches/react/types/theme").Token<"info", string, "colors", "">;
        warning: import("@stitches/react/types/theme").Token<"warning", string, "colors", "">;
        danger: import("@stitches/react/types/theme").Token<"danger", string, "colors", "">;
        light: import("@stitches/react/types/theme").Token<"light", string, "colors", "">;
        dark: import("@stitches/react/types/theme").Token<"dark", string, "colors", "">;
        black: import("@stitches/react/types/theme").Token<"black", string, "colors", "">;
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", "">;
        overlay: import("@stitches/react/types/theme").Token<"overlay", string, "colors", "">;
        font: import("@stitches/react/types/theme").Token<"font", string, "colors", "">;
        font_dark: import("@stitches/react/types/theme").Token<"font_dark", string, "colors", "">;
    };
    space: {
        1: import("@stitches/react/types/theme").Token<"1", string, "space", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "space", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "space", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "space", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "space", "">;
        6: import("@stitches/react/types/theme").Token<"6", string, "space", "">;
        7: import("@stitches/react/types/theme").Token<"7", string, "space", "">;
        8: import("@stitches/react/types/theme").Token<"8", string, "space", "">;
        10: import("@stitches/react/types/theme").Token<"10", string, "space", "">;
        12: import("@stitches/react/types/theme").Token<"12", string, "space", "">;
        16: import("@stitches/react/types/theme").Token<"16", string, "space", "">;
        20: import("@stitches/react/types/theme").Token<"20", string, "space", "">;
        40: import("@stitches/react/types/theme").Token<"40", string, "space", "">;
        64: import("@stitches/react/types/theme").Token<"64", string, "space", "">;
        80: import("@stitches/react/types/theme").Token<"80", string, "space", "">;
        px: import("@stitches/react/types/theme").Token<"px", string, "space", "">;
    };
    fontSizes: {
        xxs: import("@stitches/react/types/theme").Token<"xxs", string, "fontSizes", "">;
        xs: import("@stitches/react/types/theme").Token<"xs", string, "fontSizes", "">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "fontSizes", "">;
        md: import("@stitches/react/types/theme").Token<"md", string, "fontSizes", "">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "fontSizes", "">;
        xl: import("@stitches/react/types/theme").Token<"xl", string, "fontSizes", "">;
        '2xl': import("@stitches/react/types/theme").Token<"2xl", string, "fontSizes", "">;
        '4xl': import("@stitches/react/types/theme").Token<"4xl", string, "fontSizes", "">;
        '5xl': import("@stitches/react/types/theme").Token<"5xl", string, "fontSizes", "">;
        '6xl': import("@stitches/react/types/theme").Token<"6xl", string, "fontSizes", "">;
        '7xl': import("@stitches/react/types/theme").Token<"7xl", string, "fontSizes", "">;
        '8xl': import("@stitches/react/types/theme").Token<"8xl", string, "fontSizes", "">;
        '9xl': import("@stitches/react/types/theme").Token<"9xl", string, "fontSizes", "">;
    };
    fontWeights: {
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", "">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        primary?: string | number | boolean | undefined;
        primary_light?: string | number | boolean | undefined;
        primary_dark?: string | number | boolean | undefined;
        secondary?: string | number | boolean | undefined;
        secondary_light?: string | number | boolean | undefined;
        secondary_dark?: string | number | boolean | undefined;
        success?: string | number | boolean | undefined;
        info?: string | number | boolean | undefined;
        warning?: string | number | boolean | undefined;
        danger?: string | number | boolean | undefined;
        light?: string | number | boolean | undefined;
        dark?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        overlay?: string | number | boolean | undefined;
        font?: string | number | boolean | undefined;
        font_dark?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
        7?: string | number | boolean | undefined;
        8?: string | number | boolean | undefined;
        10?: string | number | boolean | undefined;
        12?: string | number | boolean | undefined;
        16?: string | number | boolean | undefined;
        20?: string | number | boolean | undefined;
        40?: string | number | boolean | undefined;
        64?: string | number | boolean | undefined;
        80?: string | number | boolean | undefined;
        px?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        xxs?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        '2xl'?: string | number | boolean | undefined;
        '4xl'?: string | number | boolean | undefined;
        '5xl'?: string | number | boolean | undefined;
        '6xl'?: string | number | boolean | undefined;
        '7xl'?: string | number | boolean | undefined;
        '8xl'?: string | number | boolean | undefined;
        '9xl'?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        regular?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        primary?: string | number | boolean | undefined;
        primary_light?: string | number | boolean | undefined;
        primary_dark?: string | number | boolean | undefined;
        secondary?: string | number | boolean | undefined;
        secondary_light?: string | number | boolean | undefined;
        secondary_dark?: string | number | boolean | undefined;
        success?: string | number | boolean | undefined;
        info?: string | number | boolean | undefined;
        warning?: string | number | boolean | undefined;
        danger?: string | number | boolean | undefined;
        light?: string | number | boolean | undefined;
        dark?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        overlay?: string | number | boolean | undefined;
        font?: string | number | boolean | undefined;
        font_dark?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
        7?: string | number | boolean | undefined;
        8?: string | number | boolean | undefined;
        10?: string | number | boolean | undefined;
        12?: string | number | boolean | undefined;
        16?: string | number | boolean | undefined;
        20?: string | number | boolean | undefined;
        40?: string | number | boolean | undefined;
        64?: string | number | boolean | undefined;
        80?: string | number | boolean | undefined;
        px?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        xxs?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        '2xl'?: string | number | boolean | undefined;
        '4xl'?: string | number | boolean | undefined;
        '5xl'?: string | number | boolean | undefined;
        '6xl'?: string | number | boolean | undefined;
        '7xl'?: string | number | boolean | undefined;
        '8xl'?: string | number | boolean | undefined;
        '9xl'?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        regular?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {};
    theme: {
        colors: {
            primary: string;
            primary_light: string;
            primary_dark: string;
            secondary: string;
            secondary_light: string;
            secondary_dark: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
            light: string;
            dark: string;
            black: string;
            white: string;
            overlay: string;
            font: string;
            font_dark: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            10: string;
            12: string;
            16: string;
            20: string;
            40: string;
            64: string;
            80: string;
            px: string;
        };
        fontSizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '4xl': string;
            '5xl': string;
            '6xl': string;
            '7xl': string;
            '8xl': string;
            '9xl': string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {};
};
