module.exports = {
  types: [
    {
      value: '✨ feat',
      name: '✨ feat:     新功能'
    },
    {
      value: '🐛 fix',
      name: '🐛 fix:      修复bug'
    },
    {
      value: '📦️ build',
      name: '📦️ build:    打包'
    },
    {
      value: '⚡️ perf',
      name: '⚡️ perf:     性能优化'
    },
    {
      value: '🎉 release',
      name: '🎉 release:  发布正式版'
    },
    {
      value: '💄 style',
      name: '💄 style:    代码的样式美化'
    },
    {
      value: '♻️  refactor',
      name: '♻️  refactor: 重构'
    },
    {
      value: '✏️  docs',
      name: '✏️  docs:     文档变更'
    },
    {
      value: '✅ test',
      name: '✅ test:     测试'
    },
    {
      value: '⏪️ revert',
      name: '⏪️ revert:   回退'
    },
    {
      value: '🚀 chore',
      name: '🚀 chore:    构建/工程依赖/工具'
    },
    {
      value: '👷 ci',
      name: '👷 ci:       CI 相关的修改'
    }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    subject: '请简要描述提交(必填)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  // 跳过问题
  skipQuestions: ['scope', 'body', 'breaking', 'footer'],
  subjectLimit: 72
}
