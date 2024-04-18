import { classNames } from '.';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    const expected = 'someClass myClass myClass_2';

    expect(classNames('someClass', {}, ['myClass', 'myClass_2']))
      .toBe(expected);
  });
  test('with additional and mods class', () => {
    const expected = 'someClass myClass myClass_2 hovered disabled';

    expect(classNames(
      'someClass',
      { hovered: true, disabled: true },
      ['myClass', 'myClass_2'],
    )).toBe(expected);
  });
  test('with additional and mods false class', () => {
    const expected = 'someClass myClass myClass_2 hovered';

    expect(classNames(
      'someClass',
      { hovered: true, disabled: false },
      ['myClass', 'myClass_2'],
    )).toBe(expected);
  });
  test('with additional and mods undefined class', () => {
    const expected = 'someClass myClass myClass_2 disabled';

    expect(classNames(
      'someClass',
      { hovered: undefined, disabled: true },
      ['myClass', 'myClass_2'],
    )).toBe(expected);
  });
});
