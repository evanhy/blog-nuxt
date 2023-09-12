// uno.config.ts
import {defineConfig, presetAttributify, presetUno, presetIcons, presetTypography} from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        presetIcons({
                warn: true,
                extraProperties: {
                    display: 'inline-block',
                    'vertical-align': 'middle',
                }
            }
        ),
        // 版式预设
        presetTypography(),
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
        "bg-main": "bg-blue-7",
        "text-link": "text-#1890ff",
        "warn-red": "bg-red-4 text-white  rounded p-1",
    },
})