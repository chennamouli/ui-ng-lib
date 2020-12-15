describe('CustomPrototypes', () => {
  it('should format the string with 1 replacer', () => {
    const s = 'Hello {0}';
    expect(s.format('there')).toEqual('Hello there');
  });

  it('should format the string with 2 replacer', () => {
    const s = 'Hello {0}{1}';
    expect(s.format('there', '!!')).toEqual('Hello there!!');
  });

  it('should format the string with 0 replacer', () => {
    const s = 'Hello';
    expect(s.format('there')).toEqual('Hello');
  });

  it('should format the string with unequal replacers', () => {
    const s = 'Hello {0}, Mr. {1}';
    expect(s.format('there')).toEqual('Hello there, Mr. {1}');
  });

  it('should format the string with unequal replacers 2', () => {
    const s = 'Hello {0}, Mr. {1}';
    expect(s.format('there', 'mouli', 'gajam')).toEqual('Hello there, Mr. mouli');
  });

  it('should format the string with null arg', () => {
    const s = 'Hello {0}';
    expect(s.format(null)).toEqual('Hello null');
  });

  it('should add given business days', () => {
    const d = new Date().addbusinessDays(0);
    expect(d.getDate()).toEqual(new Date().getDate());
  });

  it('should add given business days', () => {
    const d = new Date(2019, 4, 21).addbusinessDays(7);
    expect(d.getDate()).toEqual(30); // May 30th
  });
});
