const Skills = (skills = []) => {
  let template = `
  <div class="about-skills pt-25">
    ${skills.map(item => `
      <div class="skill-item mt-25">
          <div class="skill-header">
              <h6 class="skill-title">${item.name}</h6>
              <div class="skill-percentage">
                  <div class="count-box counted">
                      <span class="counter">${item.percentage}</span>
                  </div>
                  %
              </div>
          </div>
          <div class="skill-bar">
              <div class="bar-inner">
                  <div class="bar progress-line" data-width="${item.percentage}"></div>
              </div>
          </div>
      </div> <!-- skill item -->
    `).join('')}
  </div> <!-- about skills -->
  `

  return template
}

export default Skills