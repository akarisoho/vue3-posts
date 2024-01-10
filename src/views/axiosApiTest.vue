<template>
  <div>
    <div v-if="loading">로딩 중...</div>
    <div v-else>
      <div v-for="department in departments" :key="department.code">
        <h3>{{ department.name }}</h3>
        <p>{{ department.description }}</p>

        <!-- sbModuleCD에 대한 데이터 표시 -->
        <div v-for="sbModuleCD in department.sbModuleCDs" :key="sbModuleCD">
          <p>{{ sbModuleCD }}: {{ getSpecificDepartmentText(department.code, sbModuleCD) }}</p>
        </div>

        <!-- 특정 부서 코드에 대한 데이터 표시 -->
        <div>
          <p>특정 부서 데이터: {{ getSpecificDepartmentData(department.code) }}</p>
        </div>

        <!-- pageUseCd에 대한 데이터 표시 -->
        <div>
          <p>직급 정보: {{ getRankInfo(department.pageUseCd) }}</p>
        </div>

        <!-- pageNn에 대한 데이터 표시 -->
        <div>
          <p>페이지 이름: {{ getPageName(department.pageNn) }}</p>
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
    const specificDepartmentData = ref({});
    const loading = ref(true);

    // 페이지 정보를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/pageInfo');
        // 가져온 데이터를 departments에 할당
        departments.value = response.data.departments;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // 데이터 로딩이 끝났음을 표시
        loading.value = false;
      }
    };

    // 특정 부서 코드에 해당하는 텍스트 데이터를 가져오는 함수
    const getSpecificDepartmentText = (departmentCode, sbModuleCD) => {
      // 특정 부서 데이터에서 sbModuleCD에 해당하는 값을 가져옴
      const specificDepartmentText = specificDepartmentData.value[sbModuleCD];
      return specificDepartmentText ? specificDepartmentText : null;
    };

    // 특정 부서 코드에 대한 데이터 가져오는 함수 (예시: 별도의 API 호출)
    const getSpecificDepartmentData = async (departmentCode) => {
      try {
        const response = await axios.get(`https://api.example.com/specificDepartment/${departmentCode}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching specific department data:', error);
        return null;
      }
    };

    // pageUseCd에 대한 직급 정보 가져오는 함수
    const getRankInfo = (pageUseCd) => {
      // 예시로 정의한 직급 정보 데이터
      const ranks = [
        { code: '01', name: '사원' },
        { code: '02', name: '대리' },
        { code: '03', name: '과장' },
        // ... 나머지 직급 정보
      ];

      // 주어진 pageUseCd와 매칭되는 직급 정보를 찾아 반환
      const matchedRank = ranks.find(rank => rank.code === pageUseCd);
      return matchedRank ? matchedRank.name : null;
    };

    // pageNn에 대한 페이지 이름 가져오는 함수
    const getPageName = (pageNn) => {
      // 예시로 정의한 페이지 이름 데이터
      const pageNames = [
        { code: '01', name: '대시보드' },
        { code: '02', name: '통계' },
        { code: '03', name: '설정' },
        // ... 나머지 페이지 이름
      ];

      // 주어진 pageNn과 매칭되는 페이지 이름을 찾아 반환
      const matchedPageName = pageNames.find(page => page.code === pageNn);
      return matchedPageName ? matchedPageName.name : null;
    };

    // 컴포넌트가 마운트되면 데이터를 가져오도록 설정
    onMounted(() => {
      fetchData();
    });

    // 반환되는 객체
    return {
      loading,
      departments,
      specificDepartmentData,
      getSpecificDepartmentText,
      getSpecificDepartmentData,
      getRankInfo,
      getPageName,
    };
  },
};
</script>
