export function createTeamCard(user, job) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-member');

    const teamMemberImg = document.createElement('div');
    teamMemberImg.classList.add('team-member-img');

    const teamMemberImgContent = document.createElement('img');
    teamMemberImgContent.src = user.image;

    const teamMemberInfo = document.createElement('div');
    teamMemberInfo.classList.add('team-member-info');

    const teamMemberName = document.createElement('h3');
    teamMemberName.innerText = user.name;

    const teamMemberJob = document.createElement('h5');
    teamMemberJob.innerText = job;

    const teamMemberDescription = document.createElement('p');
    job === "Sales Representative" 
        ? teamMemberDescription.innerText = `With a profound understanding of products and services, ${user.name.split(' ')[0]} tailors precise solutions to meet clients' needs. Excellent communication and attentive listening help navigate even the toughest objections with finesse.` 
        : teamMemberDescription.innerText = `${user.name.split(' ')[0]}'s dedication to customer satisfaction makes them a support superstar, turning dissatisfied clients into brand advocates, fostering loyalty, and contributing to the company's success.`;

    const teamMemberSocial = document.createElement('div');
    teamMemberSocial.classList.add('team-member-social');

    const teamMemberSocialLinkedin = document.createElement('i');
    teamMemberSocialLinkedin.classList.add('fa-brands', 'fa-linkedin');

    const teamMemberSocialTwitter = document.createElement('i');
    teamMemberSocialTwitter.classList.add('fa-brands', 'fa-twitter');

    const teamMemberSocialFacebook = document.createElement('i');
    teamMemberSocialFacebook.classList.add('fa-brands', 'fa-facebook');

    const teamMemberSocialInstagram = document.createElement('i');
    teamMemberSocialInstagram.classList.add('fa-brands', 'fa-instagram');

    teamMemberImg.appendChild(teamMemberImgContent);
    teamMemberInfo.append(teamMemberName, teamMemberJob, teamMemberDescription);
    teamMemberSocial.append(teamMemberSocialLinkedin, teamMemberSocialTwitter, teamMemberSocialFacebook, teamMemberSocialInstagram);
    teamCard.append(teamMemberImg, teamMemberInfo, teamMemberSocial);

    return teamCard;
}

