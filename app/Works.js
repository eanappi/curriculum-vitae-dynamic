const Works = (works = []) => {
  let template = works.map( item => `
      <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-work text-center mt-30">
              <div class="work-image">
                  <img src="${item.thumbnail}" alt="work">
              </div>
              <div class="work-overlay">
                  <div class="work-content">
                      <h3 class="work-title">${item.title}</h3>
                      <ul>
                          <li><a class="image-popup" href="${item.image}"><i class="lni-plus"></i></a></li>
                          ${item.link ? `
                            <li><a href="${item.link}" target="_blank"><i class="lni-link"></i></a></li>
                          ` : ``}
                      </ul>
                  </div>
              </div>
          </div> <!-- single work -->
      </div>
  `).join('')

  return template
}

export default Works