<template>
  <ContentList v-slot="{ list }" path="/projects">
    <div v-for="article in list" :key="article._path">
      <h2>{{ article.title }}</h2>
    </div>
  </ContentList>
</template>
