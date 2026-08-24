# Cosmos v0.1.0 · 重大更新 / Major Update

## 中文

- ✦ **AI 讲解入口**：每个天体（含黑洞/中子星/罗森桥）新增 AI 介绍卡片，内置中英双语知识库离线可用；支持接入任意 OpenAI 兼容接口实时生成（点卡片右上角 ⚙ 配置）
- ⚡ **流畅模式 (Lite)**：老设备福音——自动检测低内存/低核心数并开启；降低渲染分辨率、精简着色器特效、去除毛玻璃材质；控制台可手动开关
- 🛡 **修复"打不开"问题**：渲染管线三级降级保底（主着色器 → 精简管线 → 极简渲染器），启动看门狗超时自动给出进入选项，软件渲染环境友好提示
- 🌍 **界面全面中英双语**：一键切换，自动跟随系统语言
- ♿ 无障碍：遵循系统「减弱动态效果」设置；交互即时反馈、面板弹簧动效等 Apple 风格打磨
- 🐛 修复重构过程中缺失的 useProgram 调用导致的 WebGL 告警

## English

- ✦ **AI Guide entry** for every body (black hole, neutron star, bridge included) — bilingual offline knowledge base; connect any OpenAI-compatible endpoint via the ⚙ button for live answers
- ⚡ **Lite mode** for older devices — auto-detected low memory/CPU cores; lower render scale, cheaper shaders, no frosted glass; manual toggle in console
- 🛡 **Fixed "won't open" on weak GPUs**: three-tier rendering fallback (main shader → simplified pipeline → minimal renderer) plus a boot watchdog that offers entry options instead of hanging forever
- 🌍 **Fully bilingual UI** with system-language auto-detect
- ♿ Accessibility: honors Reduce Motion; instant press feedback and springy panel transitions throughout
- 🐛 Fixed missing useProgram call causing WebGL warnings after refactor

---

📦 **安装包 / Installers**: macOS (Apple Silicon & Intel) · Windows x64+ARM64 · Linux AppImage/deb
