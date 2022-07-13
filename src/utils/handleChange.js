export const handleChange = (e, setter) =>
  setter((state) => ({ ...state, [e.target.name]: e.target.value }));
