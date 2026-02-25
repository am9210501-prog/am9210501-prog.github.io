self.addEventListener('install', event => {
  console.log('Service Worker نصب شد');
});

self.addEventListener('fetch', event => {
  // برای آینده می‌توان کش اضافه کرد، فعلاً فقط لاگ می‌دهد
});
