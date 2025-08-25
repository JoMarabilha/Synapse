const CACHE_NAME = 'synapse-cache-v1'
const OPTIONAL_CACHE_URLS = ['/', '/manifest.json', '/icon-192x192.png']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        OPTIONAL_CACHE_URLS.map(async (url) => {
          try {
            const response = await fetch(url)
            if (response.ok) {
              await cache.put(url, response)
            }
          } catch {
            // Ignore missing files
          }
        })
      )
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  )
})

if ('sync' in self.registration) {
  self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
      event.waitUntil(handleBackgroundSync())
    }
  })
}

async function handleBackgroundSync() {
  try {
    const cache = await caches.open(CACHE_NAME)
    console.log('Background sync completed')
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

if ('PushManager' in self) {
  self.addEventListener('push', (event) => {
    const options = {
      body: event.data ? event.data.text() : 'New update available',
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [
        { action: 'explore', title: 'View Details', icon: '/icon-192x192.png' },
        { action: 'close', title: 'Close', icon: '/icon-192x192.png' },
      ],
    }

    event.waitUntil(self.registration.showNotification('Synapse', options))
  })

  self.addEventListener('notificationclick', (event) => {
    event.notification.close()
    if (event.action === 'explore') {
      event.waitUntil(clients.openWindow('/'))
    }
  })
}
