export function renderExperiences() {
  fetch('../experiences.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Esto debe devolver un array de objetos
    })
    .then((data) => {
      const experiencesContainer = document.getElementById('experiences');
      data.forEach((experience) => {
        const templateClone = document
          .getElementById('experience-template')
          .content.cloneNode(true);

        templateClone.querySelector('.tmline-item__img').src =
          experience.company.logo;
        templateClone.querySelector('.tmline-item__img').alt =
          experience.company.alt;
        templateClone.querySelector('.tmline-item__company-name').textContent =
          experience.company.name;
        templateClone.querySelector('.tmline-item__time').textContent =
          experience.time_period;
        templateClone.querySelector('.tmline-item__job-title').textContent =
          experience.job_title;
        templateClone.querySelector(
          '.tmline-item__job-description'
        ).textContent = experience.job_description;
        experiencesContainer.appendChild(templateClone);
      });
    });
}
