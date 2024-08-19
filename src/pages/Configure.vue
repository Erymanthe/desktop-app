<script setup>
// Components.
import Title from "../components/Title.vue";
import PrimaryButton from "../components/Button/Primary.vue";

import { ref } from "vue";
import { open } from '@tauri-apps/api/shell';

const discoveryTooltip = ref(false);
const discoveryUrl = ref("discover.gravitalia.com");
const openAuthPage = () => {
  open("https://account.gravitalia.com/oauth2/authorize?response_type=code&client_id=suba&redirect_uri=https://discovery.gravitalia.com/oauth2/callback&scope=identity")
};
</script>

<template>
    <div class="absolute w-full bg-amber-100 border-t border-b border-amber-500 text-amber-700 px-4 py-3" role="alert">
        <p class="font-bold">Avertissement</p>
        <p class="text-sm">Les instances personnalisées nécessitent l'ouverture de ports pour communiquer à l'extérieur de votre réseau.</p>
    </div>

    <div class="h-screen flex flex-col justify-center items-center">
        <div>
            <RouterLink to="/connect" class="mb-6 flex underline mt-6 xl:ml-1 text-md xl:text-lg text-zinc-500 dark:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-1.5 size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Revenir à la page de connexion
            </RouterLink>

                    <Title title="Configurer une instance" description="Créez votre instance Turms encore plus sécurisée !" />

                    <!-- Who are you? -->
                    <h2 class="mt-10 font-semibold text-xl">Vous identifier sur le réseau <span class="text-red-500">*</span></h2>
                    <div class="flex">
                        <input
                            class="w-36 h-7 text-sm text-zinc-700 dark:text-zinc-200 dark:placeholder:text-zinc-300 outline-none bg-transparent border border-zinc-400 dark:border-zinc-700 border-b-2 border-x-0 border-t-0"
                            type="text"
                            placeholder="Identifiant"
                            maxlength="15"
                        >
                        <span class="font-mono text-sm"> @{{ discoveryUrl }} </span>
                    </div>

                    <!-- STUN server configuration. -->
                    <div class="mt-10">
                        <h2 class="font-semibold text-xl">Configuration du serveur relais</h2>
                        <!-- STUN server URL. -->
                        <h3 class="mt-4 font-semibold text-md">URL du serveur STUN <span class="text-red-500">*</span></h3>
                        <input
                            class="w-[23rem] h-7 text-sm text-zinc-700 dark:text-zinc-200 dark:placeholder:text-zinc-300 outline-none bg-transparent border border-zinc-400 dark:border-zinc-700 border-b-2 border-x-0 border-t-0"
                            type="text"
                            placeholder="URL"
                            maxlength="15"
                        >

                        <h3 class="mt-4 font-semibold text-md">Authentification au serveur STUN</h3>

                        <input
                            class="w-[23rem] h-7 text-sm text-zinc-700 dark:text-zinc-200 dark:placeholder:text-zinc-300 outline-none bg-transparent border border-zinc-400 dark:border-zinc-700 border-b-2 border-x-0 border-t-0"
                            type="text"
                            placeholder="Nom d'utilisateur"
                        >
                        <div class="mt-2"></div>
                        <input
                            class="w-[23rem] h-7 text-sm text-zinc-700 dark:text-zinc-200 dark:placeholder:text-zinc-300 outline-none bg-transparent border border-zinc-400 dark:border-zinc-700 border-b-2 border-x-0 border-t-0"
                            type="text"
                            placeholder="Mot de passe"
                        >
                    </div>

                    <!-- Turms Discovery configuration. -->
                    <div class="mt-10">
                        <h2 class="flex font-semibold text-xl">Serveur Turms discovery <span class="text-red-500">*</span> <svg @mouseover="discoveryTooltip = true;" @mouseleave="discoveryTooltip = false;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
            </svg>
            </h2>
            <div v-if="discoveryTooltip" role="tooltip" class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">
                Instance de https://github.com/TurmsApp/discovery
            </div>

                        <!-- Turms Discovery URL. -->
                        <input
                            class="w-[23rem] h-7 text-sm text-zinc-700 dark:text-zinc-200 dark:placeholder:text-zinc-300 outline-none bg-transparent border border-zinc-400 dark:border-zinc-700 border-b-2 border-x-0 border-t-0"
                            type="text"
                            placeholder="URL de Turms discovery"
                            v-model="discoveryUrl"
                        >
                    </div>

                    <PrimaryButton class="mt-16 w-[23rem] flex justify-center items-center text-zinc-100">
                        Utiliser cette instance
                    </PrimaryButton>
        </div>
    </div>
</template>