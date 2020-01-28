const Services = (services = []) => {
  let template = services.map( item => `
      <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="single-service text-center mt-30">
              <div class="service-icon">
                  <i class="${item.icon}"></i>
              </div>
              <div class="service-content">
                  <h4 class="service-title">${item.title}</h4>
                  <p>${item.description}</p>
              </div>
          </div> <!-- single service -->
      </div>
  `).join('')

  return template
}

export default Services