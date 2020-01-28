const SocialNetwork = (socials) => {
  let template = `
      <li>
        <a href="${socials.facebook}" target="_blank">
          <i class="lni-facebook-filled"></i>
        </a>
      </li>
      <li>
        <a href="${socials.twitter}" target="_blank">
          <i class="lni-twitter-original"></i>
        </a>
      </li>
      <li>
        <a href="${socials.behance}" target="_blank">
          <i class="lni-behance-original"></i>
        </a>
      </li>
      <li>
        <a href="${socials.linkedin}" target="_blank">
          <i class="lni-linkedin-original"></i>
        </a>
      </li>
  `

  return template
}

export default SocialNetwork