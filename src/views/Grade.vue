<template>
  <div class="grade">
    <div class="center">
      <Select v-model="course" style="width: 300px" placeholder="课程">
        <Option
          v-for="item in cityList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      <Select v-model="course" style="width: 300px" placeholder="学分">
        <Option
          v-for="item in gradeList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      <Select v-model="course" style="width: 300px" placeholder="绩点">
        <Option
          v-for="item in pointList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      <Table
        width="1000"
        height="1000"
        class="table"
        :columns="columns"
        :data="table"
      ></Table>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, onMounted, nextTick, computed, ref } from "vue";

export default {
  name: "Grade",
  setup() {
    const store = useStore();
    let course = ref("");
    let data = reactive({
      table: [],
      columns: [
        {
          title: "课程名称",
          key: "course",
        },
        {
          title: "学分",
          key: "grade",
        },
        {
          title: "绩点",
          key: "point",
        },
      ],
      cityList: [
        {
          value: "数据结构",
          label: "数据结构",
        },
        {
          value: "软件测试",
          label: "软件测试",
        },
        {
          value: "计算机组成原理",
          label: "计算机组成原理",
        },
      ],
      gradeList: [
        {
          value: "4",
          label: "4",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "2",
          label: "2",
        },
      ],
      pointList: [
        {
          value: "3-4",
          label: "3-4",
        },
        {
          value: "2-3",
          label: "2-3",
        },
        {
          value: "1-2",
          label: "1-2",
        },
      ],
    });
    const table = computed(() => {
      return data.table;
    });
    const cityList = computed(() => {
      return data.cityList;
    });
    const gradeList = computed(() => {
      return data.gradeList;
    });
    const pointList = computed(() => {
      return data.pointList;
    });
    const columns = computed(() => {
      return data.columns;
    });
    function getTab() {
      data.table = JSON.parse(JSON.stringify(store.getters.tab));
    }
    onMounted(() => {
      nextTick(() => {
        getTab();
      });
    });
    return {
      table,
      columns,
      cityList,
      course,
      gradeList,
      pointList
    };
  },
};
</script>

<style lang="less" scoped>
.grade {
  height: 1178px;
  width: 100%;
  margin-top: 105px;
  float: left;
  background-color: white;
  display: flex;
  justify-content: center;
  .center {
    display: flex;
    width: 1043px;
    border-left: 3px solid #d6d6d6;
    border-right: 3px solid #d6d6d6;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .table {
      flex-shrink: 0;
    }
  }
}
</style>