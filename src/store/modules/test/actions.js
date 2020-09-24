import { getTestData } from "@/api"

export default {
  async getTestDataAct({ commit,state },params) {
      const res = await getTestData(params)
      commit('setTestData',res)
  }
}
