export default interface Match {
  path: string;
  url: string;
  params: {
    number: string;
  };
  isExact: boolean;
}
