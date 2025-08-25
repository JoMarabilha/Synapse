const CACHE_NAME = 'synapse-cache-v1'
const PRECACHE_URLS = ['/', '/manifest.json', '/icon-192x192.png']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        PRECACHE_URLS.map((url) =>
          fetch(url)
            .then((response) => {
              if (response.ok) {
                return cache.put(url, response)
              }
            })
            .catch(() => {})
        )
      )
    )
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})

if ('SyncManager' in self) {
  self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
      event.waitUntil(handleBackgroundSync())
    }
  })
}

async function handleBackgroundSync() {
  console.log('Background sync triggered')
}

if ('PushManager' in self && self.registration && self.registration.showNotification) {
  self.addEventListener('push', (event) => {
    const options = {
      body: event.data ? event.data.text() : '',
      icon: '/icon-192x192.png'
    }
    event.waitUntil(self.registration.showNotification('Synapse', options))
  })

  self.addEventListener('notificationclick', (event) => {
    event.notification.close()
    event.waitUntil(self.clients.openWindow('/'))
  })
}
