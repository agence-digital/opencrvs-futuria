/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors located at https://github.com/opencrvs/opencrvs-core/blob/master/AUTHORS.
 */

import {
  IFormFieldValue,
  Validation,
  ValidationResult
} from '../../types/types'

export function isNumberLessThan21(value: IFormFieldValue) {
  if (Number(value) < 21) {
    return {
      message: {
        defaultMessage: 'Must be less than 21',
        description:
          'The error message appears when the the given value is less than 21'
      }
    } satisfies ValidationResult
  }

  return {}
}

export const dateNotPastFieldDate =
  (section: string, fieldname: string): Validation =>
  (value: IFormFieldValue, drafts?): ValidationResult | undefined => {
    const cast = value as string
    if (section && fieldname && drafts) {
      const limit = drafts[section][fieldname] as string
      if (limit) {
        if (new Date(cast) >= new Date(limit)) {
          return undefined
        } else {
          return {
            message: {
              defaultMessage: `Must be greater than the ${section} birth day`,
              description:
                'The error message appears when the date is less than the parents birth date'
            }
          }
        }
      }
    }
  }
