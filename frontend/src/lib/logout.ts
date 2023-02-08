export const logout = (localItem: string, router: any) => {
  localStorage.removeItem(localItem);
  localStorage.removeItem('access');
  router.push('/');

  const listLandingLink = [
    '/',
    '/about',
    'facilities',
    'search-room',
    '/contact',
    '/career',
    'internship',
    '/faq',
    '/term-of-service',
    '/privacy-policy',
  ];

  if (router.pathname === listLandingLink) {
    router.reload();
  }
};
