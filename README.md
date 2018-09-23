<div align="center">

  <img src="https://on.ahmda.ws/6de47022e721/c" alt="gatsby-remark-better-embed-video" />

  <h1><code>gatsby-remark-better-embed-video</code></h1>

[![GitHub](https://img.shields.io/wordpress/v/akismet.svg?colorA=D14543&colorB=21759B&maxAge=2592000&style=flat&label=WordPress)](https://github.com/ahmadawais/WPGulp/)
[![emoji-log](https://img.shields.io/badge/🚀%20Emoji-Log-gray.svg?colorA=D14543&colorB=21759B&style=flat)](https://github.com/ahmadawais/Emoji-Log/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/WPGulp.svg?style=social&label=Stars)](https://github.com/ahmadawais/WPGulp/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)  [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

</div>

<div align="center">
<table width='100%' align="center">
    <tr>
        <td align='left' width='100%' colspan='2'>
            <strong><code>gatsby-remark-better-embed-video</code></strong><br />
            📺 Embed a Youtube Video in your Markdown with more options.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href='https://github.com/ahmadawais'>@AhmadAwais</a>.
        </td>
        <td align='center'>
            <a href='https://twitter.com/MrAhmadAwais/'>
                <img src='https://img.shields.io/badge/→-AHMAD%20AWAIS-gray.svg?colorA=4D2AFF&colorB=2D2B57&style=flat' width='100' />
            </a>
        </td>
    </tr>
</table>
</div>

<br>

Embed a Youtube Video in your Markdown with more options.

Inspired by [gatsby-remark-embed-video](https://github.com/ahmadawais/gatsby-remark-better-embed-video)

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
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
              height: 400, // Optional: Overrides optional.ratio.
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
              showInfo: false // Optional: Hides video title and player actions.
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
