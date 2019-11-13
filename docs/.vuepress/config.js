module.exports = {
  base: '/ts-test/',
  dest: 'dist',
  title: 'TypeScript 入门',
  description: '学习使用 TypeScript',
  themeConfig: {
    // editLinks: false,
    // docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '初识 TypeScript',
        collapsable: false,
        children: [
          // ['chapter1/', 'Introduction'],
          'chapter1/',
          'chapter1/install',
          'chapter1/start'
        ]
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          'chapter2/1_type',
          'chapter2/2_declare',
          'chapter2/3_interface',
          'chapter2/4_class',
          'chapter2/5_function',
          'chapter2/6_generic',
          'chapter2/7_inference',
          'chapter2/8_advance'
        ]
      },
    ]
  }
}
