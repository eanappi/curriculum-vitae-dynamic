const SocialNetwork = (socials) => {

  let template = socials.map(social => `
      <li>
        <a href="${social.link}" target="_blank">
          <i class="${social.icon}"></i>
        </a>
      </li>
  `).join('')

  return template
}

export default SocialNetwork