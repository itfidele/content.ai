// entry.server.tsx
import { renderToString } from 'react-dom/server'
import { CacheProvider } from '@emotion/react'
import { RemixServer } from '@remix-run/react'
import type { EntryContext } from '@remix-run/node' // Depends on the runtime you choose
import createEmotionCache from './createEmotionCache'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache()



  const markup = renderToString(
      <CacheProvider value={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>,
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}