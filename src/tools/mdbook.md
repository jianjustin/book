mdBook是一款使用 Markdown 创建书籍的工具。

## 使用
- 创建书籍：`mdbook init --title="my amazing book"`
- 本地运行查看：`mdbook serve`

## 如何管理目录
- 标题
    ```markdown
    # Summary
    ```
  
- 前缀章节
    ```markdown
    [A Prefix Chapter](relative/path/to/markdown.md)
    
    - [First Chapter](relative/path/to/markdown2.md)
    ```

- 分隔符
```markdown
# My Part Title

[A Prefix Chapter](relative/path/to/markdown.md)

---

- [First Chapter](relative/path/to/markdown2.md)

```

## cloudflard自动化构建
- 关联github仓库
- 新增构建配置
  - **Build Command**
    ```shell
    curl -L https://github.com/rust-lang/mdBook/releases/download/v0.4.40/mdbook-v0.4.40-x86_64-unknown-linux-gnu.tar.gz | tar xvz && ./mdbook build
    ```
  - **Build output directory**: `/book` 