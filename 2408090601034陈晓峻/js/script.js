// 技能进度条动画：页面加载后自动填充
const skills = [
    { id: "htmlBar", pct: "htmlPct", value: 85 },
    { id: "cssBar", pct: "cssPct", value: 70 },
    { id: "jsBar", pct: "jsPct", value: 45 },
    { id: "teamBar", pct: "teamPct", value: 90 }
];

function animateSkills() {
    skills.forEach(({ id, pct, value }) => {
        const bar = document.getElementById(id);
        const label = document.getElementById(pct);
        bar.style.width = value + "%";
        label.textContent = value + "%";
    });
}

// 联系表单提交反馈
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    formStatus.textContent = "✅ 留言已收到，感谢你的反馈！";
    form.reset();
});

// 页面加载完成后再触发动画，确保宽度过渡生效
window.addEventListener("load", () => {
    setTimeout(animateSkills, 300);
});

// 回到顶部小功能：控制台输出站点信息
console.log("欢迎访问 2408090601034 陈晓峻 的第一个网页！");
