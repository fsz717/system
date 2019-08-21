<template>
    <div>
        <section v-loading="tableLoading" element-loading-text="数据请求中" element-loading-spinner="el-icon-loading">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="省份"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="市区"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="region"
                        label="地址"
                        min-width="100">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="params.pageNum"
                    :page-sizes="[15, 30, 45, 60]"
                    :page-size.sync="params.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalCount">
            </el-pagination>
        </section>
        <el-drawer
                :title="infoTitle"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose">
        </el-drawer>

    </div>
</template>

<script>
    export default {
        name: "fsz1",
        data() {
            return {
                tableData: [],
                params: {"pageNum":1,"pageSize":15},
                totalCount:0,
                tableLoading:false,
                direction:'rtl',
                drawer:false,
                infoTitle:'基本信息',
            }
        },
        mounted(){
            this.searchList()
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleClick(row) {
                this.drawer=true
                this.$http.get('/userInfo').then(res=>{
                    console.log(res)
                })
            },
            searchList(){
                this.tableLoading = true
                this.$http.postForm('/userList',this.params).then(res=>{
                    let data=Object.assign({},res.data.data)
                    this.totalCount=data.count
                    this.tableData=data.data.slice(0)
                    setTimeout(() => {
                        this.tableLoading = false
                    }, 300)
                })
            },
            handleSizeChange(val) {
                this.params.pageSize=val
                this.searchList()
            },
            handleCurrentChange(val) {
                this.params.pageNum=val
                this.searchList()
            }
        },

    }
</script>

<style scoped>

</style>
