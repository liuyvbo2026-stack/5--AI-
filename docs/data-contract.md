# 组长负责冻结的数据约定

Git 合并的是代码和格式约定。用户照片、回忆与制作结果存储在运行环境，按 token 更新；这些用户数据不通过 PR 合并。

## 提交

`POST /api/stories`，Content-Type: application/json。总请求上限约 6 MB，每张照片最多 2 MB。

```json
{
  "names": ["参与者A", "参与者B"],
  "memories": {
    "meeting": "第一次见面的细节",
    "decision": "决定一起走下去的时刻",
    "future": "未来想象"
  },
  "photos": ["data:image/jpeg;base64,...", "data:image/jpeg;base64,..."],
  "consent": true
}
```

成功返回 HTTP 201：`{"token":"48位随机十六进制字符串","status":"submitted","albumPath":"/album/TOKEN"}`。

## 查询

`GET /api/stories/TOKEN`，成功返回 HTTP 200。

```json
{
  "status": "ready",
  "names": ["参与者A", "参与者B"],
  "message": "故事已完成。",
  "chapters": [
    {"key":"meeting","title":"相遇","text":"双方确认的回忆","imageUrl":"https://图片地址"},
    {"key":"decision","title":"决定","text":"双方确认的回忆","imageUrl":"https://图片地址"},
    {"key":"future","title":"未来","text":"双方认可的想象","imageUrl":"https://图片地址"}
  ]
}
```

状态只有 submitted / processing / ready / failed。ready 必须有三幕；failed 必须有可读的原因。客户端约每五秒查询一次等待中的记录。未知 token 返回 404，输入错误返回 400，请求过大返回 413，Content-Type 错误返回 415；错误格式统一为 `{"error":"用户可读的原因"}`。

## 人工制作

制作人员从受控存储读取提交素材。输出符合 examples/result.json 的 JSON，再由组长或数据负责人在服务端执行 import-result.mjs。没有面向公网的结果写入接口。

参与者的两句誓言目前仅在当前浏览器页面中展示，未存入服务端。双方使用同一设备；远程双人参与属于后续任务。

## 格式变更

修改 shared/contract.mjs 后，同一 PR 更新本文与测试；通知创作页、相册页、后端与 AI 内容四位负责人。相册页先使用同格式的假数据开发，接入真实接口后删除假数据入口。
