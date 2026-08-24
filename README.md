# Cosmos · 天体模拟系统 / Celestial Simulator

<p>
<b>简体中文</b> · <a href="#english">English</a>
</p>

![version](https://img.shields.io/badge/version-0.1.0-blue) ![platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)

基于广义相对论的光线步进黑洞模拟器 + 太阳系沙盒。支持四种黑洞度规、引力透镜、爱因斯坦-罗森桥、白洞形态，并为每个天体提供 AI 讲解入口。

## ✨ 特性 / Features

- 🕳 **四种度规**：史瓦西 / 雷斯勒-诺斯特朗姆 / 克尔 / 克尔-纽曼，实时切换自旋与电荷
- 🌌 **真实相对论渲染**：光线在弯曲时空中步进积分，引力透镜、光子环、吸积盘自然涌现
- 🪐 **11 个天体 + 中子星 + 罗森桥出口**，全部可调参（半径/轨道/色调）
- ✦ **AI 讲解**：每个天体都有 AI 介绍入口；内置双语知识库离线可用，也可接入任意 OpenAI 兼容接口实时生成
- ⚡ **流畅模式 (Lite)**：为老设备自动/手动降级——降低渲染分辨率、精简着色器特效、去除毛玻璃
- 🛡 **三级降级保底**：主着色器失败 → 精简管线 → 极简渲染器，老设备也能打开
- 🌍 **中英双语界面**：一键切换
- ♿ 尊重系统「减弱动态效果」设置

## 🎮 操作

| 操作 | 效果 |
|---|---|
| 拖动 | 旋转视角 |
| 滚轮 / 双指捏合 | 缩放 |
| WASD / QE | 平移视角 |
| 点击星体或列表 | 选中并跟随 |
| ESC | 关闭 AI 讲解 |

## 📦 下载安装 / Download

到 [Releases](../../releases) 下载：

| 平台 | 文件 |
|---|---|
| macOS Apple Silicon | `Cosmos-0.1.0-arm64.dmg` |
| macOS Intel | `Cosmos-0.1.0.dmg` |
| Windows x64+ARM64 | `Cosmos-Setup-0.1.0.exe` |
| Linux | `Cosmos-0.1.0.AppImage` / `cosmos_0.1.0_amd64.deb` |

> macOS 包未公证：首次打开若被拦，右键 → 打开，或到 系统设置 → 隐私与安全性 放行。
> Notarization is skipped; on first launch, right-click → Open, or allow it in Privacy & Security.

## 🛠 开发

```bash
npm install
npm start        # 本地运行
npm run dist     # 本机构建 mac + win（Linux 走 CI）
```

推送 `v*` 标签自动触发三平台构建并发布 Release。

---

<a name="english"></a>
## English

A general-relativistic ray-marched black hole simulator with a solar-system sandbox. Four black-hole metrics, gravitational lensing, an Einstein–Rosen bridge, white-hole mode — plus an AI guide for every body.

### Features

- **Four metrics**: Schwarzschild / Reissner–Nordström / Kerr / Kerr–Newman with live spin & charge control
- **Relativistic rendering**: rays integrated through curved spacetime — lensing, photon rings and the accretion disk emerge naturally
- **11 bodies + neutron star + bridge exit**, each fully tunable (radius / orbit / tint)
- ✦ **AI Guide**: every body has an AI intro entry; a bilingual built-in knowledge base works offline, or plug in any OpenAI-compatible endpoint for live answers
- ⚡ **Lite mode**: automatic or manual degradation for older devices — lower render scale, cheaper shaders, no blur
- 🛡 **Three-tier fallback**: main shader → simplified pipeline → minimal renderer, so it always opens
- 🌍 **Bilingual UI** (中文 / English), one click away
- ♿ Honors "reduce motion"

### Controls

Drag to orbit · scroll/pinch to zoom · WASD/QE to pan · click a body or list item to select · ESC closes the AI card.

### Development

```bash
npm install && npm start     # run locally
npm run dist                 # build mac + win installers (Linux via CI)
```

Pushing a `v*` tag builds all three platforms in CI and publishes a release.

## License

MIT
