# Cosmos · 天体模拟系统

交互式天体引力模拟程序（Canvas + 原生 JS，零依赖单文件应用），已用 Electron 封装为桌面应用。

![version](https://img.shields.io/badge/version-0.0.1-blue)

## 功能

- 引力 N 体模拟：天体间相互吸引、轨道演化
- 鼠标/触摸拖拽交互，捏合缩放
- 毛玻璃 UI 面板，深空视觉风格

## 下载安装

到 [Releases](../../releases) 页面下载对应平台安装包：

| 平台 | 文件 |
|---|---|
| macOS Apple Silicon | `Cosmos-0.0.1-arm64.dmg` |
| macOS Intel | `Cosmos-0.0.1.dmg` |
| Windows x64 | `Cosmos Setup 0.0.1.exe` |
| Windows ARM64 | `Cosmos Setup 0.0.1-arm64.exe` |
| Linux | `Cosmos-0.0.1.AppImage` / `.deb` |

> macOS 首次打开若提示"未公证"，右键 → 打开，或到 系统设置 → 隐私与安全性 放行。

## 开发

```bash
npm install
npm start        # 本地运行
npm run dist     # 构建全平台安装包（本机构建 mac+win，Linux 走 CI）
```

## 打包说明

- Electron + electron-builder；macOS 出 DMG（arm64/x64），Windows 出 NSIS 安装器（x64/arm64），Linux 出 AppImage/deb（GitHub Actions）
- 推送 `v*` 标签自动触发三平台构建并上传 Release
