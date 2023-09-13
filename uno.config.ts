// uno.config.ts
import {defineConfig, presetAttributify, presetUno, presetIcons, presetTypography, presetWebFonts} from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify(),
        presetUno({
            dark: 'class',
        }),
        presetIcons({
                warn: true,
                extraProperties: {
                    'display': 'inline-block',
                    'vertical-align': 'middle',
                    'width': '1.2em',
                    'height': '1.2em',
                }
            }
        ),
        // 版式预设
        presetTypography(),
        presetWebFonts({
            provider: 'google', // default provider
            fonts: {
                sans: ['Inter', 'Noto Sans Simplified Chinese'],
                mono: ['Fira Mono:400,700'],
                hand: ['Dancing Script'],
            },
        })
    ],
    rules: [
        [
            // 多行文本超出部分省略号 line-n
            /^line-(\d+)$/,
            ([, l]) => {
                if (~~l === 1) {
                    return {
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                        "white-space": "nowrap",
                        width: "100%",
                    }
                }
                return {
                    overflow: "hidden",
                    display: "-webkit-box",
                    "-webkit-box-orient": "vertical",
                    "-webkit-line-clamp": l,
                }
            },
        ],
    ],
    shortcuts: {
        "flex-c": "flex justify-center items-center",
        "flex-bc": "flex justify-between items-center",
        'hover': 'op-70 hover:op-100 cursor-pointer transition-opacity',
    },
})