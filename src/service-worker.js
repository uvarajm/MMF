// src/service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

// Precache all of the assets in the build directory
precacheAndRoute(self.__WB_MANIFEST);

// Cache API requests with a Network First strategy
registerRoute(
  ({url}) => url.pathname.startsWith('/api/'),
  new NetworkFirst()
);
