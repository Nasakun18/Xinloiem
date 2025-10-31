// Lấy các phần tử cần thiết
const confessButton = document.getElementById('confessBtn');
const modal = document.getElementById('confessionModal');
const closeButtons = document.querySelectorAll('.close-btn, .close-btn-modal');

// Hàm hiển thị Modal
function showModal() {
    modal.style.display = "block";
    confessButton.textContent = "Lời Hứa Đã Được Gửi!";
    confessButton.style.backgroundColor = '#4CAF50';
    confessButton.style.boxShadow = '0 8px #388E3C';
}

// Hàm ẩn Modal
function hideModal() {
    modal.style.display = "none";
}

// 1. Khi nhấn nút chính: Hiển thị Modal
confessButton.addEventListener('click', showModal);

// 2. Khi nhấn nút 'X' hoặc nút 'Anh Được Tha Thứ Rồi!': Ẩn Modal
closeButtons.forEach(button => {
    button.addEventListener('click', hideModal);
});

// 3. Khi người dùng click bên ngoài Modal, nó cũng sẽ đóng
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal();
    }
});

// Lưu ý: Thay đổi link ảnh 'https://i.imgur.com/example_romantic_image.jpg' trong HTML thành ảnh của hai bạn để tăng hiệu quả.
