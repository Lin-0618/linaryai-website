(() => {
  const form = document.querySelector("[data-search-form]");
  const input = document.querySelector("[data-search-input]");
  const routes = [
    { terms: ["cc switch", "ccswitch", "switch", "供应商", "deepseek", "5.6"], url: "ccswitch.html" },
    { terms: ["官方", "codex 安装", "apple silicon", "intel"], url: "codex-install.html" },
    { terms: ["windows", "win", "exe", "不明", "smartscreen"], url: "download.html#windows" },
    { terms: ["mac", "macos", "gatekeeper", "放行", "zip"], url: "download.html#macos" },
    { terms: ["key", "api", "密钥"], url: "download.html" },
    { terms: ["自动", "automation", "定时", "提醒", "周报"], url: "automation.html" },
    { terms: ["skill", "skills", "工作流", "模板"], url: "skills.html" },
    { terms: ["plugin", "插件", "mcp", "连接器"], url: "plugins.html" },
    { terms: ["日志", "中文", "config", "配置", "faq"], url: "faq.html" }
  ];

  if (!(form instanceof HTMLFormElement) || !(input instanceof HTMLInputElement)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const keyword = input.value.trim().toLowerCase();
    const target = routes.find((route) => route.terms.some((term) => keyword.includes(term)));
    window.location.href = target ? target.url : "tutorials.html";
  });
})();
