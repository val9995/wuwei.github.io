// 获取弹出层元素
const modal = document.getElementById('qrCodeModal');
const modalTitle = document.getElementById('modalTitle');
const qrCodeImage = document.getElementById('qrCodeImage');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close-btn');

// 二维码配置
const qrCodes = {
    purchase: {
        title: '扫码购买课程',
        image: './wechat-qr.jpg', // 购买二维码图片路径，请在课程上线后替换为实际的二维码图片路径
        desc: '请扫描二维码，在线报名缴费'
    },
    consult: {
        title: '扫码咨询详情',
        image: './wechat-qr.jpg', // 咨询二维码图片路径
        desc: '请扫描二维码，添加客服微信进行咨询'
    }
};

// 显示二维码弹出层
function showQRCode(type) {
    const qrCode = qrCodes[type];
    modalTitle.textContent = qrCode.title;
    qrCodeImage.src = qrCode.image;
    modalDesc.textContent = qrCode.desc;
    modal.style.display = 'flex';
}

// 关闭弹出层
function closeModal() {
    modal.style.display = 'none';
}

// 点击关闭按钮关闭弹出层
closeBtn.addEventListener('click', closeModal);

// 点击弹出层外部关闭弹出层
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 阻止滚动穿透
modal.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });

// 课程大纲标签切换
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.outline-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有活动状态
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // 添加当前活动状态
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
}); 