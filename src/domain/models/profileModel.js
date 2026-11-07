export const createProfileModel = ({
  fullName,
  role,
  headline,
  location,
  socialLinks,
  metrics,
  skillCategories,
  experiences,
  projects,
  education,
}) => {
  if (!fullName || !role) {
    throw new Error(
      "El nombre completo y el rol profesional son obligatorios en el modelo de dominio.",
    );
  }

  return Object.freeze({
    fullName,
    role,
    headline,
    location,
    socialLinks,
    metrics: metrics ?? [],
    skillCategories: skillCategories ?? [],
    experiences: experiences ?? [],
    projects: projects ?? [],
    education: education ?? [],
  });
};
