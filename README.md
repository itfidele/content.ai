# Advanced AI Content Creator
<img width="1440" alt="Screenshot 2023-11-25 at 23 26 58" src="https://github.com/itfidele/content.ai/assets/30210556/7eb0e5b9-49a0-43d0-bed3-6f4764e115d2">


## Development

Start the Remix development asset server and the Express server by running:
- [Remix Docs](https://remix.run/docs)

### Create .env and add
get your GOOGLE PALM API from this link https://developers.generativeai.google/tutorials/setup
```sh
PORT=port_where_server_should_run_from
GOOGLE_PALM_API_KEY=
```

### start a dev server
```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
