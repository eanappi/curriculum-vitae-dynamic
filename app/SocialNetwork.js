const SocialNetwork = (socials) => {
  let template = `
      <li>
        <a href="${socials.facebook}">
          <i class="lni-facebook-filled"></i>
        </a>
      </li>
      <li>
        <a href="${socials.twitter}">
          <i class="lni-twitter-original"></i>
        </a>
      </li>
      <li>
        <a href="${socials.behance}">
          <i class="lni-behance-original"></i>
        </a>
      </li>
      <li>
        <a href="${socials.linkedin}">
          <i class="lni-linkedin-original"></i>
        </a>
      </li>
  `

  return template
}

export default SocialNetwork