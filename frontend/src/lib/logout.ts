export const logout = (localItem: string, router: any) => {
  localStorage.removeItem(localItem);
  localStorage.removeItem('access');
  router.push('/');

  if (router.pathname === '/') {
    router.reload();
  }
};
