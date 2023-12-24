<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- <RouterLink class="nav-link" active-class="active" to="/nested/one"> 
                                              router.push로 이동한 것과 같고, 브라우저 히스토리에 저장됨
                                              replace 속성을 사용하여 히스토리에 저장되지 않도록 할 수 있음 -->
        <RouterLink class="nav-link" active-class="active" :to="{name:'NestedOne', replace: true}">
        Nested One
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" :to="{name:'NestedTwo', replace: true}">
          Nested Two
        </RouterLink>
      </li>
    </ul>
    <hr class="my-4" />
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>