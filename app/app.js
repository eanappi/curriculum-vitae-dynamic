import Main from '../assets/js/main.js'
import Layout from './Layout.js'

const RenderContent = async () => {
  let resp = await fetch('content/page.yml')
  let data = await resp.text()
  let jsonData = jsyaml.load(data)

  document.querySelector('body').innerHTML = Layout(jsonData)
  Main()
}

RenderContent()