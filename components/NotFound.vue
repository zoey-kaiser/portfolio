<template>
  <div>
    <div class="min-h-[40vh] grid place-content-center h-full w-full">
      <div class="flex flex-col items-center">
        <h1 class="text-5xl font-bold">
          Not Found
        </h1>
        <p class="text-lg">
          This page could not be found.
        </p>

        <div class="mt-6 flex items-center gap-2">
          <NuxtLink to="/">
            <AppButton>
              Home
            </AppButton>
          </NuxtLink>
          <NuxtLink to="/projects">
            <AppButton :solid="false">
              Projects
            </AppButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
