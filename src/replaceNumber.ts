const e2p = (s: string): string => {
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};

const p2e = (s: string): string => {
  return s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};

const sp = (number: number): string => {
  const formattedNumber = number.toLocaleString("en-US");
  const seperatedNumber = formattedNumber.split(".");
  seperatedNumber[0] = e2p(seperatedNumber[0]);
  return seperatedNumber.join(".");
};

export { e2p, p2e, sp };
