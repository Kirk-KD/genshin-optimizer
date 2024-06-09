import type { GeneralAutocompleteProps } from '@genshin-optimizer/common/ui'
import { GeneralAutocomplete } from '@genshin-optimizer/common/ui'
import type { RelicSetKey } from '@genshin-optimizer/sr/consts'
import { allRelicSetKeys } from '@genshin-optimizer/sr/consts'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

type RelicSetAutocompleteProps = {
  relicSetKey: RelicSetKey | ''
  setRelicSetKey: (key: RelicSetKey | '') => void
  label?: string
  props?: Omit<
    GeneralAutocompleteProps<RelicSetKey | ''>,
    'options' | 'valueKey' | 'onChange' | 'toImg' | 'groupBy' | 'renderGroup'
  >
}

export function RelicSetAutocomplete({
  relicSetKey,
  setRelicSetKey,
  label = '',
  ...props
}: RelicSetAutocompleteProps) {
  const { t } = useTranslation(['relic', 'relicNames_gen'])
  label = label ? label : t('relic:autocompleteLabels.set')

  const options = useMemo(
    () =>
      allRelicSetKeys.map((set) => ({
        key: set,
        label: t(`relicNames_gen:${set}`),
      })),
    [t]
  )

  const onChange = useCallback(
    (k: RelicSetKey | '' | null) => setRelicSetKey(k ?? ''),
    [setRelicSetKey]
  )
  return (
    <GeneralAutocomplete
      options={options}
      valueKey={relicSetKey}
      onChange={onChange}
      toImg={() => <> </>}
      label={label}
      {...props}
    />
  )
}
