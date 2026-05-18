// Install event - Forces activation immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('SW: Installed');
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('SW: Activated');
});

// Fetch event - Required by Chrome to meet install requirements
self.addEventListener('fetch', (event) => {
  // Acts as a passthrough to keep internet connectivity active
});
