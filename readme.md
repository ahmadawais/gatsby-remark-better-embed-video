# `gatsby-remark-better-embed-video`

Embed a Youtube Video in your Markdown with more options.

Inspired by [gatsby-remark-embed-video](https://github.com/borgfriend/gatsby-remark-embed-video)

## Install

1. Install plugin to your site:

```sh
npm i gatsby-remark-better-embed-video

# OR #

yarn add gatsby-remark-better-embed-video
```

2. Add following to your `gatsby-config.js`:

```js
    plugins: [
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-better-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          }
          ]
        }
      },
```

Note: if you also rely on `gatsby-remark-responsive-iframe`, you have to define the embed-youtube plugin first:

``` js
plugins: [
  "gatsby-remark-better-embed-video",
  "gatsby-remark-responsive-iframe"
]
```

Note: you can style the videoIframe using `.embedVideoIframe`

1. Restart gatsby.

## Usage

```markdown
# Look at this Video:

`video: https://www.youtube.com/embed/2Xc9gXyf2G4`
`youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4`
`youtube: 2Xc9gXyf2G4`

`vimeo: https://vimeo.com/5299404`
`vimeo: 5299404`

`videoPress: https://videopress.com/v/kUJmAcSf`
`videoPress: kUJmAcSf`

`twitch: https://player.twitch.tv/?channel=dakotaz`
`twitch: https://player.twitch.tv/?autoplay=false&video=v273436948`
`twitch: 273436948`
`twitchLive: dakotaz`

```

## License

MIT — [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
