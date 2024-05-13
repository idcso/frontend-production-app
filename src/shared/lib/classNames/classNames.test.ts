import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('className')).toBe('className');
  });

  test('with additional classes', () => {
    const expected = 'className class1 class2';
    expect(classNames('className', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with true mods', () => {
    const expected = 'className selected hidden class1 class2';
    expect(
      classNames('className', { selected: true, hidden: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with false mods', () => {
    const expected = 'className selected class1 class2';
    expect(
      classNames('className', { selected: true, hidden: false }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with undefined mods', () => {
    const expected = 'className selected class1 class2';
    expect(
      classNames('className', { selected: true, hidden: undefined }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
