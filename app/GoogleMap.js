const GoogleMap = (googleMapUrl = '') => {
  let template = `
    <div class="gmap_canvas">                            
        <iframe id="gmap_canvas" src="${googleMapUrl}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  `

  return googleMapUrl ? template : ''
}

export default GoogleMap