<!---->
// https://api.example.com/pageInfo
{
  "departments": [
    {"sbModuleCD": "AA", "pageUseCd": "01", "pageNn": "dashboard" },
    {"sbModuleCD": "BB", "pageUseCd": "02", "pageNn": "statistics" },
    {"sbModuleCD": "CC", "pageUseCd": "03", "pageNn": "settings" },
    {"sbModuleCD": "DD", "pageUseCd": "04", "pageNn": "profile" },
    {"sbModuleCD": "EE", "pageUseCd": "05", "pageNn": "notifications" },
  ]
}

// 각 데이터의 name 키값으로 맵핑된 별도의 API 데이터
{
  "departments": [
    { "code": "AA", "name": "Sales" },
    { "code": "BB", "name": "Marketing" },
    // ... 다른 부서들
  ],
  "ranks": [
    { "code": "01", "name": "Intern" },
    { "code": "02", "name": "Junior" },
    // ... 다른 직급들
  ],
  "pageNames": [
    { "code": "dashboard", "name": "대시보드" },
    { "code": "statistics", "name": "통계" },
    // ... 다른 페이지이름들
  ]
}

 -->

<template>
  <div>
    <div v-if="loading">로딩 중...</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>부서</th>
            <th>직급</th>
            <th>페이지 이름</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in dataGridRows" :key="row.id">
            <td>{{ row.department }}</td>
            <td>{{ row.rank }}</td>
            <td>{{ row.pageName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    // 데이터 상태
    const dataGridRows = ref([]);
    const loading = ref(true);

    // 페이지 정보를 가져오는 함수
    const fetchData = async () => {
      try {
        const pageInfoResponse = await axios.get('https://api.example.com/pageInfo');
        const departmentsResponse = await axios.get('https://api.example.com/departments');
        const ranksResponse = await axios.get('https://api.example.com/ranks');
        const pageNamesResponse = await axios.get('https://api.example.com/pageNames');

        // 각 API에서 가져온 데이터를 조합하여 데이터그리드를 생성
        dataGridRows.value = pageInfoResponse.data.map(item => ({
          id: item.id,
          department: findName(departmentsResponse.data, item.sbModuleCD),
          rank: findName(ranksResponse.data, item.pageUseCd),
          pageName: findName(pageNamesResponse.data, item.pageNn),
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    // 코드값에 해당하는 name을 찾는 함수
    const findName = (dataArray, codeValue) => {
      const item = dataArray.find(item => item.code === codeValue);
      return item ? item.name : null;
    };

    // 컴포넌트가 마운트되면 데이터를 가져오도록 설정
    onMounted(() => {
      fetchData();
    });

    // 반환되는 객체
    return {
      loading,
      dataGridRows,
    };
  },
};
</script>
