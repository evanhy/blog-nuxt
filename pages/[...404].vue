<template>
    <section class="prose ">
        <ContentDoc class="slide-enter-content" path="404">
            <template #not-found>
                <div class="cursor-pointer" @click="$router.back()">
                    <div class="i-icon-park-outline-left-small-up"/>
                    Back
                </div>
                <h1 class="text-center">
                    Not Found Any Document...
                </h1>
            </template>
        </ContentDoc>
    </section>
</template>
