// import this file in main.ts and test.ts so that these prototype functions
// will be available across the application as well as in unit testing.

String.prototype.format = format;

interface String {
  format: typeof format;
}

/**
 * Custom printf-style String format function.
 *
 * Returns formatted string which may contain given string with one or more embedded format specifiers.
 *
 * Thanks for the below post.
 *
 * https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 *
 * Ex., "Hi {0}".format('Boss'); returns  'Hi Boss'
 */
function format(...args): string {
  return this.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== 'undefined' ? args[index] : match;
  });
}

Date.prototype.addbusinessDays = addbusinessDays;

interface Date {
  addbusinessDays: typeof addbusinessDays;
}

/**
 * Custom Date function.
 *
 * Adds given number of business days to the given date and returns it.
 *
 * Thanks for the below post.
 *
 * https://www.sitepoint.com/community/t/add-days-to-date-while-ignoring-weekends-and-holidays-possible/3827/4
 *
 * @param n number, it can be +ve or -ve
 */
function addbusinessDays(n: number): Date {
  let dt = this;
  const num = Math.abs(n);
  let tem;
  let count = 0;
  const dir = n < 0 ? -1 : 1;
  while (count < num) {
    dt = new Date(dt.setDate(dt.getDate() + dir));
    tem = dt.getDay();
    if (tem !== 0 && tem !== 6) {
      ++count;
    }
  }
  return dt;
}
