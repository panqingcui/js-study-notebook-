<template>
  <div class="demo-descriptions">
    <h3>基础描述列表</h3>
    <el-descriptions title="用户信息" border>
      <el-descriptions-item label="用户名">Tom</el-descriptions-item>
      <el-descriptions-item label="手机号">188****8888</el-descriptions-item>
      <el-descriptions-item label="创建时间">2025-10-12</el-descriptions-item>
      <el-descriptions-item label="电子邮箱">tom@example.com</el-descriptions-item>
      <el-descriptions-item label="VIP">
        <el-tag type="success">VIP 会员</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="地址" :span="2"
        >北京市朝阳区建国门外大街 1 号</el-descriptions-item
      >
      <el-descriptions-item label="备注"
        >这是一段备注信息，可以使用更长的描述内容。</el-descriptions-item
      >
    </el-descriptions>

    <h3>三列 + 无边框</h3>
    <el-descriptions title="订单信息" :column="3">
      <el-descriptions-item label="订单编号">202510120001</el-descriptions-item>
      <el-descriptions-item label="下单时间">2025-10-12 14:30</el-descriptions-item>
      <el-descriptions-item label="支付状态">
        <el-tag type="success">已支付</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="商品金额">¥ 99.00</el-descriptions-item>
      <el-descriptions-item label="运费">¥ 0.00</el-descriptions-item>
      <el-descriptions-item label="实付金额">¥ 99.00</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.demo-descriptions {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-descriptions h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>
