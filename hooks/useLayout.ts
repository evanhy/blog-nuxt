import {StorageSerializers, useStorage} from "@vueuse/core";


const layoutName = useStorage("layoutName", "blog", undefined, {
    serializer: StorageSerializers.object
})

export const useLayout = () => {

    return {
        layoutName
    }
}