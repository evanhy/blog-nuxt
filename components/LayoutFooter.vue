<script lang="ts" setup>

import {siteConfig} from "~/site.config";
</script>

<template>
    <footer class="text-sm mt-20 flex items-center text-gray-500 dark:text-slate-400">
        <div class="flex items-center flex-col md:flex-row gap-1em">
                <span class="op-50 text-sm">
                    <a class="link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noopener noreferrer"
                       target="_blank">
                      CC BY-NC-SA 4.0
                    </a>
                    2023-PRESENT © {{ siteConfig.author }}
                </span>
        </div>
    </footer>
</template>