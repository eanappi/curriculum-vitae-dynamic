import Config from './Config.js'

import Main from '../assets/js/main.js'
import Layout from './Layout.js'

const RenderContent = async () => {
  let resp = await fetch(Config.contentUrl)
  let data = await resp.text()
  let jsonData = await jsyaml.load(data)

  document.querySelector('body').innerHTML = Layout(jsonData)
  Main()
}

RenderContent()