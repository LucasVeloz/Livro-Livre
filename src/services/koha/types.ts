export type KohaApiResponse = {
  me: {
    get(): { name: string };
  };
};
