export const headerConfig = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access');

    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
    } else {
      return {};
    }
  }
};
