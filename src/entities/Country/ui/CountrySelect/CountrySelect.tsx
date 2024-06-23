import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kyrgyzstan, content: Country.Kyrgyzstan },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Russia, content: Country.Russia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation();
  const { className, value, onChange, readonly } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Select country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
