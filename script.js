// 导航交互（小屏幕下点击展开）
const nav = document.querySelector('nav');
const navList = document.querySelector('nav ul');
const isMobile = window.innerWidth < 768;

if (isMobile) {
  nav.style.position = 'relative';
  navList.style.display = 'none';
  nav.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'none' ? 'block' : 'none';
  });
} else {
  navList.style.display = 'flex';
}

// 窗口变化时重新检测是否为小屏幕
window.addEventListener('resize', () => {
  const newIsMobile = window.innerWidth < 768;
  if (newIsMobile !== isMobile) {
    location.reload(); // 简单处理，重新加载页面适配
  }
});

// 下载按钮点击提示（可选，可根据需求调整提示内容）
const downloadBtn = document.querySelector('.download-btn');
downloadBtn.addEventListener('click', () => {
  alert('即将开始下载应用安装包，请在下载完成后前往手机下载目录安装~');
});