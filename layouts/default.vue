<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, locales, setLocale, t } = useI18n()
const route = useRoute()

const selectedLocale = locale.value

function changeLocale(event: Event) {
  const target = event.target as HTMLSelectElement
  const newLocale = target.value
  setLocale(newLocale)
}

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});

const title = computed(() => t('layouts.title'));

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    <NuxtLinkLocale to="/login" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">{{ $t("login.login") }}</NuxtLinkLocale>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <select v-model="selectedLocale" @change="changeLocale" class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option v-for="loc in locales" :key="loc.code" :value="loc.code">{{ loc.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
        <slot />
      </Body>
    </Html>
  </div>
</template>