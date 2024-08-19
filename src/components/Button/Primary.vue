<template>
    <button
        class="rounded-md px-4 py-3 select-none cursor-pointer text-zinc-100 bg-violet-500 hover:bg-violet-600 transition-colors disabled:bg-opacity-70 disabled:hover:bg-violet-500/70 disabled:cursor-not-allowed"
        type="button"
    >
        <slot />
    </button>
</template>