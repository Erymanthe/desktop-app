<script setup>
// Components.
import Title from "../components/Title.vue";
import PrimaryButton from "../components/Button/Primary.vue";
import SecondaryButton from "../components/Button/Secondary.vue";

import { useRouter } from "vue-router";
import { open } from "@tauri-apps/plugin-shell";

const router = useRouter();

const openAuthPage = () => {
  open(
    "https://account.gravitalia.com/oauth2/authorize?response_type=code&client_id=suba&redirect_uri=https://discovery.gravitalia.com/oauth2/callback&scope=identity",
  );
};
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <Title
      title="Bienvenue sur Turms"
      description="Accédez à votre messagerie sécurisée pair-à-pair."
    />

    <PrimaryButton
      class="mt-16 w-[23rem] flex justify-center items-center text-zinc-100"
      @click="openAuthPage"
    >
      <img src="../assets/gravitalia.webp" class="w-8 h-8 mr-4" />
      Continuer avec Gravitalia
    </PrimaryButton>

    <div class="flex mt-4 items-center text-center w-[23rem]">
      <hr class="border-zinc-300 border-1 w-full rounded-md" />
      <label class="block font-medium text-sm text-zinc-600 w-full"> OU </label>
      <hr class="border-zinc-300 border-1 w-full rounded-md" />
    </div>

    <SecondaryButton
      class="mt-4 w-[23rem] flex justify-center items-center"
      @click="router.push('/configure')"
    >
      Configurer sa propre instance
    </SecondaryButton>
  </div>
</template>
