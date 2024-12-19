const rotatingCircle = document.querySelector('.rotating-circle');
let rotation = 0;

function rotateCircle() {
  rotation = (rotation + 1) % 360; // Increment rotation
  rotatingCircle.style.transform = `rotate(${rotation}deg)`; // Apply rotation
  requestAnimationFrame(rotateCircle); // Call the function again for the next frame
}

// Start the rotation
rotateCircle();

// إنشاء عنصر <a>
const scrollUp = document.createElement('a');
scrollUp.href = '#home';
scrollUp.className = 'scroll-up';

// إضافة أيقونة إلى العنصر
const icon = document.createElement('i');
icon.className = 'fa-solid fa-arrow-up';
icon.setAttribute('rel', 'noopener');
scrollUp.appendChild(icon);

// تطبيق الأنماط مباشرة عبر JavaScript
scrollUp.style.position = 'fixed';
scrollUp.style.bottom = '20px';
scrollUp.style.right = '20px';
scrollUp.style.fontSize = '18px';
scrollUp.style.color = 'var(--primary-color)';
scrollUp.style.backgroundColor = 'var(--secondary-color)';
scrollUp.style.padding = '10px 15px';
scrollUp.style.borderRadius = '5px';
scrollUp.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.3)';
scrollUp.style.textDecoration = 'none';
scrollUp.style.display = 'flex';
scrollUp.style.justifyContent = 'center';
scrollUp.style.alignItems = 'center';
scrollUp.style.cursor = 'pointer';

// إضافة العنصر إلى الصفحة
document.body.appendChild(scrollUp);



