<template>
  <div>
    <div v-if="loading">로딩 중...</div>
    <div v-else>
      <div v-for="department in departments" :key="department.code">
        <h3>{{ department.name }}</h3>
        <p>{{ department.description }}</p>

        <!-- sbModuleCD에 대한 데이터 표시 -->
        <div v-for="sbModuleCD in department.sbModuleCDs" :key="sbModuleCD">
          <p>{{ sbModuleCD }}: {{ getCodeName('sbModuleCD', sbModuleCD) }}</p>
        </div>

        <!-- pageUseCd에 대한 데이터 표시 -->
        <div>
          <p>직급 정보: {{ getCodeName('pageUseCd', department.pageUseCd) }}</p>
        </div>

        <!-- pageNn에 대한 데이터 표시 -->
        <div>
          <p>페이지 이름: {{ getCodeName('pageNn', department.pageNn) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    // 데이터 상태
    const departments = ref([]);
    const codeMappings = ref({
      sbModuleCD: {},
      pageUseCd: {},
      pageNn: {},
    });
    const loading = ref(true);

    // 한글이름 데이터 예시
    const koreanNames = [
      { code: '01', name: '대시보드' },
      { code: '02', name: '통계' },
      { code: '03', name: '설정' },
    ];

    // 페이지 정보를 가져오는 함수
    const fetchData = async () => {
      try {
        // 여기서는 임시로 한글이름 데이터를 설정
        const response = await axios.get('https://api.example.com/pageInfo');
        departments.value = response.data.departments;

        // 코드값과 한글이름 데이터를 매핑
        codeMappings.value.sbModuleCD = mapCodeNames(response.data.sbModuleCD, koreanNames);
        codeMappings.value.pageUseCd = mapCodeNames(response.data.pageUseCd, koreanNames);
        codeMappings.value.pageNn = mapCodeNames(response.data.pageNn, koreanNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    // 코드값에 해당하는 한글이름 데이터를 가져오는 함수
    const getCodeName = (codeType, codeValue) => {
      const codeMapping = codeMappings.value[codeType];
      return codeMapping ? codeMapping[codeValue] : null;
    };

    // 코드값과 한글이름 데이터를 매핑하는 함수
    const mapCodeNames = (codeData, koreanNames) => {
      return codeData.reduce((acc, codeValue) => {
        const koreanName = findKoreanName(koreanNames, codeValue);
        if (koreanName) {
          acc[codeValue] = koreanName;
        }
        return acc;
      }, {});
    };

    // 코드값에 해당하는 한글이름을 찾는 함수
    const findKoreanName = (koreanNames, codeValue) => {
      const koreanNameObject = koreanNames.find(item => item.code === codeValue);
      return koreanNameObject ? koreanNameObject.name : null;
    };

    // 컴포넌트가 마운트되면 데이터를 가져오도록 설정
    onMounted(() => {
      fetchData();
    });

    // 반환되는 객체
    return {
      loading,
      departments,
      codeMappings,
      getCodeName,
    };
  },
};
</script>
